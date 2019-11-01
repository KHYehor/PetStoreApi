'use strict';

const passport = require('koa-passport');
const { Local } = require('./strategies');
const { compareUser } = require('../tools/crypto');
const { userService } = require('../services');
const { find: checkUser } = userService;

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser(({ username, password }, done) => {
  checkUser({ username }).then(foundUser => {
    if (!foundUser) return done(null, false);
    compareUser(password, foundUser.password)
      .then(isEqual => {
        if (isEqual) return done(null, foundUser);
        return done(null, false);
      })
      .catch(console.error);
  });
});

passport.use(Local);

module.exports = passport;
