const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');

const UserSchema = mongoose.Schema({
  username: {
    type: String,
    unique: true,
    lowercase: true,
    required: true
  },
  password: {
    type: String,
    required: true,
  },
});

UserSchema.pre('save', function(next) {
  // generate the salt
  bcrypt.genSalt(10, (err, salt) => {
    if (err) return next(err);
    // hash password
    bcrypt.hash(this.password, salt, null, (err, hash) => {
      if (err) return next(err);
      this.password = hash;
      next();
    });
  });
});

UserSchema.methods.checkPassword = function(potentialPassword, cb) {
  bcrypt.compare(potentialPassword, this.password, (err, isMatch) => {
    if (err) return cb(err);
    cb(null, isMatch);
  });
};

module.exports = UserSchema;
