/* eslint-disable require-atomic-updates */
'use strict';

const bcrypt = require('bcrypt');

module.exports = {
  hashUserArray: async data =>
    await Promise.all(
      data.map(async el => {
        el.password = await bcrypt.hash(el.password, process.env.SALT);
        return el;
      }),
    ),
  compareUser: async (clientUser, dbUser) =>
    await bcrypt.compare(clientUser, dbUser),
  hashUser: async password => await bcrypt.hash(password, process.env.SALT),
};
