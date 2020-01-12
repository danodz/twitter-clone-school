/**
  Endpoints related to feeds (ordered sets of tweets) 
*/
const lodash = require('lodash');
const router = require('express').Router();

const data = require('../data');

const {
  CURRENT_USER_HANDLE,
  getUser,
  getUserProfile,
  getTweetsFromUser,
  simulateProblems,
  denormalizeTweet,
} = require('./routes.helpers.js');

router.get('/api/:handle/home-feed', (req, res) => {
  const handle =
    req.params.handle === 'me' ? CURRENT_USER_HANDLE : req.params.handle;
  const currentUser = data.users[handle];

  const relevantTweets = Object.values(data.tweets)
    .filter(
      tweet =>
        currentUser.followingIds.includes(tweet.authorHandle) ||
        tweet.authorHandle === handle
    )
    .map(denormalizeTweet);

  const sortedTweetIds = lodash
    .sortBy(relevantTweets, 'timestamp')
    .reverse()
    .map(tweet => tweet.id);

  const tweetsById = relevantTweets.reduce((acc, tweet) => {
    acc[tweet.id] = tweet;
    return acc;
  }, {});

  return simulateProblems(res, {
    tweetsById,
    tweetIds: sortedTweetIds,
  });
});

router.get('/api/:handle/feed', (req, res) => {
  const handle =
    req.params.handle === 'me' ? CURRENT_USER_HANDLE : req.params.handle;

  const tweets = getTweetsFromUser(handle);

  const sortedTweetIds = lodash
    .sortBy(tweets, 'timestamp')
    .reverse()
    .map(tweet => tweet.id);

  const tweetsById = tweets.reduce((acc, tweet) => {
    acc[tweet.id] = tweet;
    return acc;
  }, {});

  return res.json({
    tweetsById,
    tweetIds: sortedTweetIds,
  });
});

module.exports = router;
