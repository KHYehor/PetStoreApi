'use strict';

const { checkId, checkArrayString } = require('./general');

const checkPetCreate = ({ category, name, photoUrls, tags, status }) => {
  const isCategory = typeof category === 'string';
  const isName = typeof name === 'string';
  const isStatus =
    status === 'available' || status === 'pending' || status === 'sold';
  const isTags = checkArrayString(tags);
  const isPhotoUrls = checkArrayString(photoUrls);
  if (isCategory && isName && isStatus && isTags && isPhotoUrls) return true;
  return false;
};

const checkPetUpdate = ({ id, name, status }) => {
  const isId = checkId(id);
  const isName = typeof name === 'string';
  const isStatus =
    status === 'available' || status === 'pending' || status === 'sold';
  if (isId && isName && isStatus) return true;
  return false;
};

module.exports = { checkPetCreate, checkPetUpdate };
