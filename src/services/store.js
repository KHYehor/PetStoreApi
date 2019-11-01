'use strict';

module.exports = ({ storeModel: store, inventory }) => ({
  find: async ({ id }) => {
    if (!id) return await inventory.find();
    return await store.findById({ _id: id });
  },
  delete: async ({ id }) => await store.findByIdAndRemove({ _id: id }),
  create: async order => {
    const created = await store.createOrder(order);
    return created;
  },
});
