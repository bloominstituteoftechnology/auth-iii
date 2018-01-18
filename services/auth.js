const jwt = require('jsonwebtoken');
const { secret } = require('../config');

const getTokenForUser = userObject => {
  const token = jwt.sign(userObject, secret, { expiresIn: '1h' });
  console.log(token);
};

const validateToken = _ => {};

module.exports = {
  getTokenForUser,
  validateToken
};
