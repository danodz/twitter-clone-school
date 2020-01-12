const lodash = require('lodash');
const router = require('express').Router();

const data = require('../data');

const {
  CURRENT_USER_HANDLE,
  getUserProfile,
  simulateProblems,
  denormalizeTweet,
} = require('./routes.helpers.js');

// Normally, you'd log in and all that jazz. In this case, we're just going to
// provide you with a fixed person.
router.get('/api/me/profile', (req, res) => {
  const profile = getUserProfile(CURRENT_USER_HANDLE);

  return simulateProblems(res, { profile });
});
router.get('/api/me/feed', (req, res) => {
  const { followingIds } = data.users[CURRENT_USER_HANDLE];

  const relevantTweets = Object.values(data.tweets)
    .filter(tweet => followingIds.includes(tweet.authorHandle))
    .map(denormalizeTweet);

  return simulateProblems(res, {
    tweets: lodash.sortBy(relevantTweets, 'timestamp').reverse(),
  });
});

/**
 * Get the specified tweet + any replies (soon)
 */
router.get('/api/tweet/:tweetId', (req, res) => {
  const tweet = Object.values(data.tweets).find(
    t => t.id === req.params.tweetId
  );

  return res.json({ tweet: denormalizeTweet(tweet), replies: [] });
});

module.exports = router;
