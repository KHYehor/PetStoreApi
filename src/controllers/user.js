'use strict';

module.exports = user => ({
  postCreate: async ({ body }) => {
    const created = await user.create(body);
    return {
      body: created,
      status: 201,
    };
  },
  getByUser: async ({ query }) => {
    const found = await user.find(query);
    return {
      body: found,
      status: 200,
    };
  },
  putUpdate: async ({ query, body }) => {
    const updated = await user.update(query, body);
    return {
      body: updated,
      status: 200,
    };
  },
  delUser: async ({ query }) => {
    const deleted = await user.delete(query);
    return {
      body: deleted,
      status: 200,
    };
  },
});
