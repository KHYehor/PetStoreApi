'use strict';

const LocalStrategy = require('passport-local').Strategy;
const { userService } = require('../services');
const { find: checkUser } = userService;
const { compareUser } = require('../tools/crypto');

const Local = new LocalStrategy((username, password, done) => {
  checkUser({ username })
    .then(user => {
      if (!user) return done(null, false);
      compareUser(password, user.password)
        .then(isEqual => {
          if (isEqual) return done(null, user);
          return done(null, false);
        })
        .catch(console.error);
    })
    .catch(console.error);
});

module.exports = { Local };
