'use strict';

const { Types } = require('mongoose');
const { ObjectId } = Types;

const checkId = id => ObjectId.isValid(id);

const checkArrayString = arr =>
  !arr.map(item => typeof item === 'string').includes(false);

module.exports = { checkId, checkArrayString };
