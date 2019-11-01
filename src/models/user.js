'use strict';

const { model, Schema } = require('mongoose');

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: false,
  },
  lastName: {
    type: String,
    requried: false,
  },
  email: {
    type: String,
    required: false,
  },
  password: {
    type: String,
    required: false,
  },
  phone: {
    type: String,
    required: false,
  },
  userStatus: {
    type: String,
    required: false,
  },
});

const userModel = model('User', userSchema);

module.exports = userModel;
