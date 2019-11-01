'use strict';

const mongoose = require('mongoose');
const { mongoConfig } = require('../configs');

const petModel = require('./pet');
const storeModel = require('./store');
const userModel = require('./user');
const inventoryModel = require('./inventory');

mongoose.connect(process.env.MONGODB_URI + process.env.DB, mongoConfig);

module.exports = {
  petModel,
  storeModel,
  userModel,
  inventoryModel,
};
