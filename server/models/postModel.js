const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
  title: { type: String, required: true, unique: true },
  content: { type: String, rquired: true },
  username: String,
  created_at: Date,
  updated_at: Date,
})

const Post = mongoose.model('Post', postSchema)

module.exports = Post;