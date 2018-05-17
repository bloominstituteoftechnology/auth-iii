const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const findOrCreate = require('mongoose-find-or-create')

const UserSchema = mongoose.Schema({
  username: {
    type: String,
    unique: true,
    lowercase: true,
    required: true,
  },
  password: {
    type: String
  },
  githubId: String,
  sessionId: String
});

UserSchema.plugin(findOrCreate)

UserSchema.pre('save', function (next) {
  if (this.isNew && this.password) {
    bcrypt.hash(this.password, 11, (err, hash) => {
      if (err) return next(err);

      this.password = hash;
      next();
    });
  } else {
    next();
  }  
});

UserSchema.methods.checkPassword = function(passwordGuess, cb) {
  // example using callback instead of promises
  bcrypt.compare(passwordGuess, this.password, (err, isMatch) => {
    if (err) return cb(err);

    cb(null, isMatch);
  });
};

module.exports = mongoose.model('User', UserSchema);
