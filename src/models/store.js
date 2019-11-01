'use strict';

const { model, Schema, Types } = require('mongoose');
const { ObjectId } = Types;

const petModel = require('./pet');

const orderSchema = new Schema({
  petId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Pet',
  },
  quantity: {
    type: Number,
    required: false,
  },
  shipDate: {
    type: String,
    required: false,
  },
  status: {
    type: String,
    required: false,
    enum: ['placed', 'approved', 'delivered'],
  },
  complete: {
    type: Boolean,
    required: false,
  },
});

orderSchema.statics.createOrder = async pet => {
  const checkPet = await petModel.findOne({ _id: new ObjectId(pet.petId) });
  if (checkPet) return await this.model('Store').create(pet);
  throw new Error('Not found pet with PetId');
};

const storeModel = model('Store', orderSchema);

module.exports = storeModel;
