'use strict';

module.exports = ({ router, pet }) => {
  router.get('/pet/', pet.getById);
  router.put('/pet/', pet.putById);
  router.delete('/pet/', pet.deleteById);
  router.post('/pet/uploadImage', pet.postUploadImage);
  router.post('/pet', pet.postAddPet);
  router.put('/pet', pet.putUpdatePet);
  router.get('/pet/findByStatus', pet.getByStatus);
  return router;
};
