var userSchema = mongoose.Schema({
    username: String,
    fullname: String,
    age: String,
    interest: String,
    password: String,
    email: String
    //profile data
});

var User = mongoose.model('User', userSchema);