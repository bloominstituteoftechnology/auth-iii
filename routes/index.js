const { createUser, getUsers, login } = require('../controllers');
module.exports = server => {
  server.post('/api/login', login);
  server
    .route('/api/users')
    .post(createUser)
    .get(getUsers);
};
