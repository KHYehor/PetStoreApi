'use strict';

const { checkPetCreate, checkPetUpdate } = require('../validation');

module.exports = ({ petModel: pet }) => ({
  create: async body => {
    if (!checkPetCreate(body)) throw new Error('Invalid input data');
    return await pet.createPet(body);
  },
  update: async ({ id }, { name, status }) => {
    if (!checkPetUpdate({ id, name, status })) {
      throw new Error('Invalid input data');
    }
    return await pet.findOneAndUpdate({ _id: id }, { name, status });
  },
  find: async ({ status, id }) => {
    if (status) return await pet.find({ status });
    return await pet.findById({ _id: id });
  },
  delete: async ({ id }) => {
    const deleted = await pet.findByIdAndRemove({ _id: id });
    return deleted;
  },
  uploadImage: async ({ id }, { url }) => {
    const image = await pet.findOneAndUpdate(id, { $push: { photoUrls: url } });
    return image;
  },
});
