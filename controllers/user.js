const { User } = require('../models');
const requireAuth = require('../services/passport').requireAuth;
const getTokenForUser = require('../services/token');

const createUser = (req, res) => {
  const { username, password } = req.body;
  const user = new User({ username, password });
  user.save((err, user) => {
    if (err) return res.send(err);
    res.send({
      token: getTokenForUser(user)
    });
  });
};

const getUsers = (req, res) => {
  User.find({}, (err, users) => {
    if (err) return res.send(err);
    res.send(users);
  });
};

module.exports = app => {
  app.post('/users', createUser);
  app.get('/users', requireAuth, getUsers);
};
