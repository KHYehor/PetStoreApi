'use strict';

const { model, Schema } = require('mongoose');

const categorySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
});

categorySchema.statics.findOrCreate = async name => {
  let found = await this.model('Category').findOne({ name }, { _id: 1 });
  if (!found) found = await this.model('Category').create({ name });
  return found._id;
};

const categoryModel = model('Category', categorySchema);

module.exports = categoryModel;
