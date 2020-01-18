/**
  This file contains endpoints for interacting with a single tweet.
*/

const lodash = require('lodash');

const router = require('express').Router();

const data = require('../data');

const {
  CURRENT_USER_HANDLE,
  denormalizeTweet,
  simulateProblems,
} = require('./routes.helpers.js');

/**
 * Get the specified tweet + any replies (soon)
 */
router.get('/api/tweet/:tweetId', (req, res) => {
  const tweet = data.tweets[req.params.tweetId];

  console.log(tweet, req.params.tweetId, data.tweets);

  return simulateProblems(res, { tweet: denormalizeTweet(tweet), replies: [] });
});

/**
 * Post a new tweet
 */
router.post('/api/tweet', (req, res) => {
  const newTweetId = Math.random() * 10 ** 18;

  const newTweet = {
    id: newTweetId,
    authorHandle: CURRENT_USER_HANDLE,
    timestamp: new Date().toISOString(),
    likedBy: [],
    retweetedBy: [],
    status: req.body.status,
    media: [],
  };

  data.tweets[newTweetId] = newTweet;

  return simulateProblems(res, { tweet: newTweet });
});

router.put('/api/tweet/:tweetId/like', (req, res) => {
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
    tweet.likedBy.push(CURRENT_USER_HANDLE);
  } else {
    tweet.likedBy = data.tweets[req.params.tweetId].likedBy.filter(
      handle => handle !== CURRENT_USER_HANDLE
    );
  }

  return res.json({ success: true });
});

// NOTE: this is super not-dry, but a good abstraction escapes me.
// Probably not ideal, but also not as bad as a leaky abstraction.
router.put('/api/tweet/:tweetId/retweet', (req, res) => {
  const { retweet } = req.body;

  const tweet = data.tweets[req.params.tweetId];

  if (!tweet) {
    res.sendStatus(404);
    return;
  }

  if (typeof retweet !== 'boolean') {
    res.status(400).json({
      error: 'Please specify whether to "retweet" or "unretweet" this tweet.',
    });
    return;
  }

  // Disallow "repeat" requests (eg trying to like an already-liked tweet).
  const currentlyRetweeted = tweet.retweetedBy.includes(CURRENT_USER_HANDLE);

  if (retweet === currentlyRetweeted) {
    res.status(409).json({
      error:
        'You are not allowed to like an already-liked tweet, or unlike an already-unliked tweet.',
    });
    return;
  }

  if (retweet) {
    tweet.retweetedBy.push(CURRENT_USER_HANDLE);
  } else {
    tweet.retweetedBy = tweet.retweetedBy.filter(
      handle => handle !== CURRENT_USER_HANDLE
    );
  }

  return res.json({ success: true });
});

module.exports = router;
