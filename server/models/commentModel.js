var commentSchema = mongoose.Schema({
    title: String,
    content: String,
    username: String,
    postId: String
});

var Comment = mongoose.model('Comment', commentSchema);