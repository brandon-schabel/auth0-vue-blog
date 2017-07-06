var postSchema = mongoose.Schema({
    title: String,
    content: String,
    username: String,
});

var Post = mongoose.model('Post', postSchema);