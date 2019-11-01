'use strict';

module.exports = store => ({
  getInventory: async () => {
    const inventrory = await store.find();
    return {
      body: inventrory,
      status: 200,
    };
  },
  getOrder: async ({ query }) => {
    const found = await store.find(query);
    return {
      body: found,
      status: 200,
    };
  },
  delOrder: async ({ query }) => {
    const deleted = await store.delete(query);
    return {
      body: deleted,
      status: 200,
    };
  },
  postOrder: async ({ body }) => {
    const created = await store.create(body);
    return {
      body: created,
      status: 200,
    };
  },
});
