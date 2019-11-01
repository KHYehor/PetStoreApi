'use strict';

const makePet = require('./pet');
const makeStore = require('./store');
const makeUser = require('./user');

const {
  petModel,
  storeModel,
  userModel,
  inventoryModel,
} = require('../models');

const petService = makePet({ petModel });
const storeService = makeStore({ storeModel, inventoryModel });
const userService = makeUser({ userModel });

module.exports = { petService, storeService, userService };
