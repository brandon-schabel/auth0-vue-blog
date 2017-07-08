const postSchema = mongoose.Schema({
    title: String,
    content: String,
    username: String,
})

const Post = mongoose.model('Post', postSchema);