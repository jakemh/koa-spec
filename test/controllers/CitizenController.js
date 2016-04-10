'use strict';

module.exports.getByQuerySSN = function (ctx) {
  ctx.body = {
    ssn : ctx.query.ssn
  };
};

module.exports.getByDateOfBirth = function (ctx) {
  ctx.body = {
    date_of_birth : ctx.query.date_of_birth
  };
};