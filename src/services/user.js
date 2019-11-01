'use strict';

const { hashUser, hashUserArray } = require('../tools/crypto');
const { checkUsers, checkUserName } = require('../validation');

module.exports = ({ userModel: User }) => ({
  create: async users => {
    if (!checkUsers(users)) throw new Error('invalid input data');

    if (Array.isArray(users)) await hashUserArray(users);
    else await hashUser(users);

    const created = await User.create(users);
    return created;
  },
  find: async ({ username }) => await User.findOne({ username }),
  update: async ({ username }, body) => {
    if (!(checkUserName(username) && checkUsers(body))) {
      throw new Error('invalid input data');
    }
    const updated = await User.findOneAndUpdate({ username }, body);
    return updated;
  },
  delete: async ({ username }) => {
    const deleted = await User.deleteOne({ username });
    return deleted;
  },
});
