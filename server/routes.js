const lodash = require("lodash");
const router = require("express").Router();

const data = require("./data");

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
      res.send(500);
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

  return tweetCopy;
};

const getTweetsFromUser = userId => {
  return data.tweets
    .filter(tweet => tweet.authorHandle.toLowerCase() === userId.toLowerCase())
    .map(denormalizeTweet);
};

// HARDCODED CURRENT USER.
const CURRENT_USER_HANDLE = "treasurymog";
// Normally, you'd log in and all that jazz. In this case, we're just going to
// provide you with a fixed person.
router.get("/me/profile", (req, res) => {
  const profile = getUserProfile(CURRENT_USER_HANDLE);

  return simulateProblems(res, { profile });
});
router.get("/me/feed", (req, res) => {
  const { followingIds } = data.users[CURRENT_USER_HANDLE];

  const relevantTweets = data.tweets
    .filter(tweet => followingIds.includes(tweet.authorHandle))
    .map(denormalizeTweet);

  return simulateProblems(res, {
    tweets: lodash.sortBy(relevantTweets, "timestamp").reverse()
  });
});

router.get("/:handle/profile", (req, res) => {
  const profile = getUserProfile(req.params.handle);

  return res.json({
    profile
  });
});

router.get("/:handle/tweets", (req, res) => {
  const tweets = getTweetsFromUser(req.params.handle);

  return res.json({
    tweets
  });
});

router.get("/:handle/following", (req, res) => {
  const user = getUser(req.params.handle);
  const following = user.followingIds.map(getUserProfile);

  return { following };
});
router.get("/:handle/followers", (req, res) => {
  const user = getUser(req.params.handle);
  const followers = user.followerIds.map(getUserProfile);

  return { followers };
});
router.get("/:handle/likes", (req, res) => {
  const user = getUser(req.params.handle);
  const followers = user.followerIds.map(getUserProfile);

  return { followers };
});

module.exports = router;
