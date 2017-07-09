const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  username: { type: String, required: true, unique: true },
  fullname: String,
  age: String,
  interest: String,
  password: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  created_at: Date,
  updated_at: Date,
  // profile data
})

const User = mongoose.model('User', userSchema)

module.exports = User;
