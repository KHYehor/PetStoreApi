'use strict';

const { model, Schema } = require('mongoose');

const tagSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
});

tagSchema.statics.findOrCreate = async tags => {
  const foundtags = [];
  for await (const tag of tags) {
    let found = await this.model('Tag').findOne({ name: tag }, { _id: 1 });
    if (!found) found = await this.create({ name: tag });
    foundtags.push(found._id);
  }
  return foundtags;
};

const tagModel = model('Tag', tagSchema);

module.exports = tagModel;
