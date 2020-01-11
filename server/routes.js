const lodash = require('lodash');
const router = require('express').Router();

const data = require('./data');

const MAX_DELAY = 1000; // TODO: Change me back to 3000

// Our server is very lean and quick, given that it doens't actually connect
// to a database or deal with any sort of scale!
// We want to provide a more realistic experience, so we'll do 2 things for
// all responses:
// - Add an arbitrary delay of 0-2 seconds
// - Add a 5% chance of a 500 error
const simulateProblems = (res, data) => {
  const delay = Math.random() * MAX_DELAY;

  setTimeout(() => {
    const shouldError = Math.random() <= 0.05;

    if (shouldError) {
      res.sendStatus(500);
      return;
    }

    res.json(data);
  }, delay);
};

const getUser = handle => {
  return data.users[handle.toLowerCase()];
};
const getUserProfile = handle => {
  const user = getUser(handle);

  const mutableUser = { ...user };

  delete mutableUser.followingIds;
  delete mutableUser.followerIds;
  delete mutableUser.likeIds;

  mutableUser.numFollowing = user.followingIds.length;
  mutableUser.numFollowers = user.followerIds.length;
  mutableUser.numLikes = user.likeIds.length;

  return mutableUser;
};

const denormalizeTweet = tweet => {
  const tweetCopy = { ...tweet };

  delete tweetCopy.authorHandle;

  tweetCopy.author = getUserProfile(tweet.authorHandle);

  delete tweetCopy.likedBy;
  delete tweetCopy.retweetedBy;

  tweetCopy.isLiked = tweet.likedBy.includes(CURRENT_USER_HANDLE);
  tweetCopy.isRetweeted = tweet.retweetedBy.includes(CURRENT_USER_HANDLE);
  tweetCopy.numLikes = tweet.likedBy.length;
  tweetCopy.numRetweets = tweet.retweetedBy.length;

  return tweetCopy;
};

const getTweetsFromUser = userId => {
  return data.tweets
    .filter(tweet => tweet.authorHandle.toLowerCase() === userId.toLowerCase())
    .map(denormalizeTweet);
};

// HARDCODED CURRENT USER.
const CURRENT_USER_HANDLE = 'treasurymog';
// Normally, you'd log in and all that jazz. In this case, we're just going to
// provide you with a fixed person.
router.get('/api/me/profile', (req, res) => {
  const profile = getUserProfile(CURRENT_USER_HANDLE);

  return simulateProblems(res, { profile });
});
router.get('/api/me/feed', (req, res) => {
  const { followingIds } = data.users[CURRENT_USER_HANDLE];

  const relevantTweets = data.tweets
    .filter(tweet => followingIds.includes(tweet.authorHandle))
    .map(denormalizeTweet);

  return simulateProblems(res, {
    tweets: lodash.sortBy(relevantTweets, 'timestamp').reverse(),
  });
});

router.get('/api/:handle/profile', (req, res) => {
  const profile = getUserProfile(req.params.handle);

  return res.json({
    profile,
  });
});

router.get('/api/:handle/feed', (req, res) => {
  const tweets = getTweetsFromUser(req.params.handle);

  return res.json({
    tweets,
  });
});

router.get('/api/:handle/following', (req, res) => {
  const user = getUser(req.params.handle);
  const following = user.followingIds.map(getUserProfile);

  return res.json({ following });
});
router.get('/api/:handle/followers', (req, res) => {
  const user = getUser(req.params.handle);
  const followers = user.followerIds.map(getUserProfile);

  return res.json({ followers });
});
router.get('/api/:handle/likes', (req, res) => {
  const user = getUser(req.params.handle);
  const followers = user.followerIds.map(getUserProfile);

  return res.json({ followers });
});

/**
 * Get the specified tweet + any replies (soon)
 */
router.get('/api/tweet/:tweetId', (req, res) => {
  const tweet = data.tweets.find(t => t.id === req.params.tweetId);
  console.log(req.params, tweet);
  return res.json({ tweet: denormalizeTweet(tweet), replies: [] });
});

router.put('/api/tweets/:tweetId/like', (req, res) => {
  const { like } = req.body;
  const tweet = data.tweets.find(tweet => tweet.id === req.params.tweetId);

  if (!tweet) {
    res.sendStatus(404);
    return;
  }

  if (typeof like !== 'boolean') {
    res.status(400).json({
      error: 'Please specify whether to "like" or "unlike" this tweet.',
    });
  }

  // Disallow "repeat" requests (eg trying to like an already-liked tweet).
  const currentlyLiked = tweet.likedBy.includes(CURRENT_USER_HANDLE);

  if (like === currentlyLiked) {
    res.status(409).json({
      error:
        'You are not allowed to like an already-liked tweet, or unlike an already-unliked tweet.',
    });
  }

  if (like) {
    tweet.likedBy.push(CURRENT_USER_HANDLE);
  } else {
    tweet.likedBy = tweet.likedBy.filter(
      handle => handle !== CURRENT_USER_HANDLE
    );
  }

  return res.json({ success: true });
});

module.exports = router;
