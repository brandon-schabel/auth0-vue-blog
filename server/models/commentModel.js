const mongoose = require('mongoose');

const commentSchema = mongoose.Schema({
  content: { type: String, rquired: true },
  username: { type: String, required: true },
  postId: String,
  createdAt: Date,
})

const Comment = mongoose.model('Comment', commentSchema)

module.exports = Comment;
