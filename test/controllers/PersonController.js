'use strict';

module.exports.createFromBody = function (ctx) {
  ctx.body = ctx.request.body;
};