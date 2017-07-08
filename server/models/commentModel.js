const commentSchema = mongoose.Schema({
  title: String,
  content: String,
  username: String,
  postId: String
})

const Comment = mongoose.model('Comment', commentSchema)
