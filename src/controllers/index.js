'use strict';

const makePet = require('./pet');
const makeStore = require('./store');
const makeUser = require('./user');
const { petService, storeService, userService } = require('../services');

const petControllers = makePet(petService);
const storeControllers = makeStore(storeService);
const userControllers = makeUser(userService);

module.exports = { petControllers, storeControllers, userControllers };
