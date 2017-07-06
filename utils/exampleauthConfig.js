// rename this file to authConfig.js

var authConfig = {};

authConfig = {
    CLIENT_ID: "abcdefghijklmnopqrstuvwxyz",
    CLIENT_DOMAIN: "yourappexample.auth0.com",
    REDIRECT: 'http://localhost:8080/callback', // just an example callback
    SCOPE: 'openid', // Get this from auth0
    AUDIENCE: 'https://yourappexample.auth0.com/userinfo'
}


module.exports = config;