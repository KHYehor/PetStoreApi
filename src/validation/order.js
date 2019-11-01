'use strict';

const { checkId } = require('./general');

const checkOrder = ({ petId, quantity, shipDate, status, complete }) => {
  const isPetId = checkId(petId);
  const isComplete = typeof complete === 'boolean';
  const isQuantity = !isNaN(quantity);
  const isShipDate = !isNaN(Date.parse(shipDate));
  const isStatus =
    status === 'placed' || status === 'approved' || status === 'delivered';
  if (isPetId && isComplete && isQuantity && isShipDate && isStatus)
    return true;
  return false;
};

module.exports = { checkOrder };
