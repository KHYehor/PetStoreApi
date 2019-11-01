'use strict';

const RedisStore = require('koa-redis');

module.exports = {
  store: new RedisStore({
    url: process.env.REDIS_URL,
    key: process.env.REDIS_STORE_KEY,
  }),
  maxAge: process.env.maxAge,
};
