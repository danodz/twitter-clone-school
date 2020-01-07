const router = require('express').Router();

const data = require('./data');

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

const getTweetsForUser = userId => {
  return data.tweets
    .filter(tweet => tweet.authorHandle.toLowerCase() === userId.toLowerCase())
    .map(tweet => {
      const tweetCopy = { ...tweet };

      delete tweetCopy.authorHandle;

      tweetCopy.author = getUserProfile(tweet.authorHandle);

      return tweetCopy;
    });
};

router.get('/:handle/profile', (req, res) => {
  const profile = getUserProfile(req.params.handle);

  return res.json({
    profile,
  });
});

router.get('/:handle/tweets', (req, res) => {
  const tweets = getTweetsForUser(req.params.handle);

  return res.json({
    tweets,
  });
});

router.get('/:handle/following', (req, res) => {
  const user = getUser(req.params.handle);
  const following = user.followingIds.map(getUserProfile);

  return { following };
});
router.get('/:handle/followers', (req, res) => {
  const user = getUser(req.params.handle);
  const followers = user.followerIds.map(getUserProfile);

  return { followers };
});
router.get('/:handle/likes', (req, res) => {
  const user = getUser(req.params.handle);
  const followers = user.followerIds.map(getUserProfile);

  return { followers };
});

module.exports = router;
