const { User } = require('../models');
const { requireAuth, getTokenForUser } = require('../services/auth');

const createUser = (req, res) => {
  const { username, password } = req.body;
  const user = new User({ username, password });
  user.save((err, user) => {
    if (err) return res.send(err);
    res.send({
      success: 'User saved',
      user
    });
  });
};

const getUsers = (req, res) => {
  User.find({}, (err, users) => {
    if (err) return res.send(err);
    res.send(users);
  });
};

module.exports = {
  createUser,
  getUser
};
