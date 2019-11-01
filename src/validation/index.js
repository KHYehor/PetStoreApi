'use strict';

const { checkUsers, checkUserName } = require('./user');
const { checkId, checkArrayString } = require('./general');
const { checkPetCreate, checkPetUpdate } = require('./pet');
const { checkOrder } = require('./order');

module.exports = {
  checkId,
  checkArrayString,
  checkPetCreate,
  checkOrder,
  checkUsers,
  checkUserName,
  checkPetUpdate,
};
