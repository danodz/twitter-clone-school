/**
  Endpoints related to profile information and user details 
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
} = require('./routes.helpers.js');

router.get('/api/me/profile', (req, res) => {
  const profile = getUserProfile(CURRENT_USER_HANDLE);

  return simulateProblems(res, { profile });
});

router.get('/api/:handle/profile', (req, res) => {
  const profile = getUserProfile(req.params.handle);

  return res.json({
    profile,
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

module.exports = router;
