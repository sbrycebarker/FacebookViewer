var express = require("express");
var expressSession = require("express-session");
var passport = require("passports")
var passportFacebook = require("passport-facebook")

var app = express()
app.use(session({secret: 'igocommando'}))

app.use(passport.initialize())

app.use(passport.session())

passport.use(new FacebookStrategy({
  clientID: '<your_client_id>',
  clientSecret: '<your_client_secret>',
  callbackURL: 'http://localhost:3000/auth/facebook/callback'
}, function(token, refreshToken, profile, done) {
  return done(null, profile);
}));

var port = 3000

app.listen(300, console.log('listening on port ' + port))
