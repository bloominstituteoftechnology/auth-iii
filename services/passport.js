const passport = require('passport');
const User = require('../models').User;
const config = require('../config');
const JwtStrategy = require('passport-jwt').Strategy;
const { ExtractJwt } = require('passport-jwt');
const LocalStrategy = require('passport-local');

const localOptions = {
  usernameField: 'username'
};

const localLogin = new LocalStrategy(
  localOptions,
  (username, password, done) => {
    User.findOne({ username }, (err, user) => {
      if (err) return done(err);
      if (!user) return done(null, false);
      user.checkPassword(password, (err, isMatch) => {
        if (err) return done(err);
        if (!isMatch) return done(null, false);
        return done(null, user);
      });
    });
  }
);

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: config.secret
};

const jwtLogin = new JwtStrategy(jwtOptions, (payload, done) => {
  User.findById(payload.sub, (err, user) => {
    if (err) return done(err, false);
    if (user) return done(null, user);
    done(null, false);
  });
});

passport.use(jwtLogin);
passport.use(localLogin);

module.exports = {
  requireAuth: passport.authenticate('jwt', { session: false }),
  requireSignIn: passport.authenticate('local', { session: false })
};
