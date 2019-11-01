'use strict';

module.exports = pet => ({
  getById: async ({ query }) => {
    const foundPet = await pet.find(query);
    return {
      body: foundPet,
      status: 200,
    };
  },
  putById: async ({ query, body }) => {
    const updatedPet = await pet.update(query, body);
    return {
      body: updatedPet,
      status: 200,
    };
  },
  deleteById: async ({ query }) => {
    const deleted = await pet.delete(query);
    return {
      body: deleted,
      status: 200,
    };
  },
  postUploadImage: async ({ query, body }) => {
    const added = await pet.uploadImage(query, body);
    return {
      body: added,
      status: 200,
    };
  },
  postAddPet: async ({ body }) => {
    const created = await pet.create(body);
    return {
      body: created,
      status: 201,
    };
  },
  putUpdatePet: async () => {},
  getByStatus: async ({ query }) => {
    const found = await pet.find(query);
    return {
      body: found,
      status: 200,
    };
  },
});
