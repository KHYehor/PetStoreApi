/* eslint-disable require-atomic-updates */
'use strict';

const passport = require('./passport');

const checkAuth = async (ctx, next) => {
  try {
    if (ctx.url === '/user/login') {
      return passport.authenticate(
        'local',
        {
          successRedirect: '/',
          failureRedirect: '/',
        },
        (err, user) => {
          if (err) return next(err);
          if (user) {
            ctx.login(ctx.request.body);
            ctx.status = 200;
            return;
          }
          ctx.status = 400;
        },
      )(ctx);
    }
    if (ctx.url === '/user/logout') {
      await ctx.logout();
      ctx.session = null;
      ctx.status = 200;
      return;
    }
    if (ctx.url === '/user' && ctx.method === 'POST') return next();
    if (ctx.isAuthenticated()) return next();
    ctx.status = 401;
  } catch (error) {
    console.error(error);
  }
};

module.exports = { checkAuth, passport };
