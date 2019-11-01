'use strict';

module.exports = ({ router, user }) => {
  router.post('/user', user.postCreate);
  router.get('/user/', user.getByUser);
  router.put('/user/', user.putUpdate);
  router.delete('/user/', user.delUser);
  return router;
};
