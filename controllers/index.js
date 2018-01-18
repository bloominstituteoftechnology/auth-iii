const User = require('../models/user');
const { requireAuth, getTokenForUser } = require('../services/auth');

const createUser = (req, res) => {
  const { username, password } = req.body;
  const user = new User({ username, password });
  user.save((err, user) => {
    if (err) return res.send(err);
    res.json({
      success: 'User saved',
      user
    });
  });
};

const getUsers = (req, res) => {
  // TODO: Protect this route from being able to be accessed without a JWT;
  User.find({}, (err, users) => {
    if (err) return res.send(err);
    res.send(users);
  });
};

const login = (req, res) => {
  const { username, password } = req.body;
  User.findOne({ username }, (err, user) => {
    if (err) {
      res.status(500).json({ error: 'Invalid Username/Password' });
      return;
    }
    if (user === null) {
      res.status(422).json({ error: 'No user with that username in our DB' });
      return;
    }
    user.checkPassword(password, (nonMatch, hashMatch) => {
      if (nonMatch !== null) {
        res.status(422).json({ error: 'passwords dont match' });
        return;
      }
      if (hashMatch) {
        const token = getTokenForUser({ username: user.username });
        res.json({ token });
      }
    });
  });
};

module.exports = {
  createUser,
  getUsers,
  login
};
