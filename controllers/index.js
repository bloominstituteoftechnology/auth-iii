module.exports = app => {
  require('./auth')(app);
  require('./user')(app);
};
