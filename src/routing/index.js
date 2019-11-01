'use strict';

const Router = require('koa-router');
const router = new Router();
const rest = require('../protocol');

const {
  petControllers,
  userControllers,
  storeControllers,
} = require('../controllers');

const pet = rest(petControllers);
const user = rest(userControllers);
const store = rest(storeControllers);
// Adding routes to entities
require('./pet')({ router, pet });
require('./user')({ router, user });
require('./store')({ router, store });

module.exports = router;
