// rename to config.js
let config = {}

config = {
  dburl: 'mongodb://dbusername:dbpassword@ds111111.mlab.com:11111/dbname', // url to mongodb, I use mlabs for my development database
  jwksUri: 'https://example.auth0.com/.well-known/jwks.json', // obtain the rest of the info from auth0
  audience: 'example-auth',
  issuer: 'https://example.auth0.com/',
}

module.exports = config
