'use strict';

const { model, Schema } = require('mongoose');
const { ObjectId } = Schema.Types;

const tagModel = require('./tag');
const categoryModel = require('./category');

const petSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: ObjectId,
    required: false,
    ref: 'Category',
  },
  photoUrls: [
    {
      type: String,
      required: false,
    },
  ],
  status: {
    type: String,
    required: false,
    enum: ['available', 'pending', 'sold'],
  },
  tags: [
    {
      type: ObjectId,
      required: false,
      ref: 'Tag',
    },
  ],
});

petSchema.statics.createPet = async pet => {
  const updatedPet = pet;
  updatedPet.tags = await tagModel.findOrCreate(pet.tags);
  updatedPet.category = await categoryModel.findOrCreate(pet.category);
  return await this.model('Pet').create(updatedPet);
};

const petModel = model('Pet', petSchema);

module.exports = petModel;
