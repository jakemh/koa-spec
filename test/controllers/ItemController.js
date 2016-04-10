'use strict';

module.exports.getByQueryId = function (ctx) {
  ctx.body = {
    id : ctx.query.id
  };
};

module.exports.getByFormDataId = function (ctx) {
  ctx.body = {
    id : ctx.request.body.id
  };
};

module.exports.getByPathId = function (ctx) {
  ctx.body = {
    id : ctx.params.id
  };
};

module.exports.getByPathABC = function (ctx) {
  ctx.body = {
    a : ctx.params.a,
    b : ctx.params.b,
    c : ctx.params.c
  };
};