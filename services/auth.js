const jwt = require('jsonwebtoken');
const { secret } = require('../config');

const getTokenForUser = userObject => {
  // creating a JWT and returning it.
  return jwt.sign(userObject, secret, { expiresIn: '1h' });
};

const requireAuth = () => {
  // TODO: fill this in for the token validation on GET /USERS
};

module.exports = {
  getTokenForUser,
  requireAuth
};
