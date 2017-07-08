const userSchema = mongoose.Schema({
  username: String,
  fullname: String,
  age: String,
  interest: String,
  password: String,
  email: String,
  // profile data
})

const User = mongoose.model('User', userSchema)
