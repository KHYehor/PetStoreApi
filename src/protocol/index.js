/* eslint-disable require-atomic-updates */
'use strict';

const rest = controller => async ctx => {
  const request = {
    body: ctx.request.body,
    query: ctx.request.query,
    params: ctx.request.params,
    method: ctx.request.method,
  };
  try {
    const result = await controller(request);
    ctx.status = result.status;
    ctx.body = JSON.stringify(result.body);
  } catch (error) {
    ctx.body = { error: error.message, stack: error.stack };
  }
};

module.exports = controllers => {
  const obj = {};
  Object.keys(controllers).forEach(
    item => (obj[item] = rest(controllers[item])),
  );
  return obj;
};
