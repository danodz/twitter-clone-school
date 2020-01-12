const lodash = require('lodash');

const router = require('express').Router();

const data = require('../data');

const { CURRENT_USER_HANDLE } = require('./routes.helpers.js');

router.put('/api/tweets/:tweetId/like', (req, res) => {
  const { like } = req.body;

  const tweet = data.tweets[req.params.tweetId];

  if (!tweet) {
    res.sendStatus(404);
    return;
  }

  if (typeof like !== 'boolean') {
    res.status(400).json({
      error: 'Please specify whether to "like" or "unlike" this tweet.',
    });
    return;
  }

  // Disallow "repeat" requests (eg trying to like an already-liked tweet).
  const currentlyLiked = tweet.likedBy.includes(CURRENT_USER_HANDLE);

  if (like === currentlyLiked) {
    res.status(409).json({
      error:
        'You are not allowed to like an already-liked tweet, or unlike an already-unliked tweet.',
    });
    return;
  }

  if (like) {
    data.tweets[req.params.tweetId].likedBy.push(CURRENT_USER_HANDLE);
  } else {
    data.tweets[req.params.tweetId].likedBy = data.tweets[
      req.params.tweetId
    ].likedBy.filter(handle => handle !== CURRENT_USER_HANDLE);
  }

  return res.json({ success: true });
});

module.exports = router;
