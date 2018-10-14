var mongoose = require('mongoose');
const bcrypt = require('bcrypt');

var UserSchema = new mongoose.Schema({
  username: {type: String, required: true, trim: true, unique: true},
  password: {type: String, required: true, trim: true},
  firstName: {type: String, required: true},
  lastName: {type: String, requried: true},
  birthday: Date,
});

// encrypt password before save
UserSchema.pre('save', function(next) {
  const user = this;
  // don't rehash if it's an old user
  if(!user.isModified || !user.isNew) { 
    next();
  } else {
    bcrypt.hash(user.password, Number(process.env.SALTING_ROUND), function(err, hash) {
      if (err) {
        console.log('Error hashing password for user', user.username);
        next(err);
      } else {
        user.password = hash;
        next();
      }
    });
  }
});

module.exports = mongoose.model('User', UserSchema);
