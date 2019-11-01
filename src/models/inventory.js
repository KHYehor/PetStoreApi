'use strict';

const { model, Schema } = require('mongoose');

const inventorySchema = new Schema({
  item: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
});

const inventoryModel = model('Iventory', inventorySchema);

module.exports = inventoryModel;
