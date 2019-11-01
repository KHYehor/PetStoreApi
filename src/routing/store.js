'use strict';

module.exports = ({ router, store }) => {
  router.get('/store/inventory', store.getInventory);
  router.get('/store/order', store.getOrder);
  router.delete('/store/order', store.delOrder);
  router.post('/store/order', store.postOrder);
  return router;
};
