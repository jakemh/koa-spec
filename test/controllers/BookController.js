'use strict';

module.exports.getByQueryISBN = function (ctx) {
  ctx.body = {
    id   : 1,
    isbn : ctx.query.isbn
  };
};

module.exports.createFromBody = function (ctx) {
  const body = ctx.request.body; // TODO Want ctx to be just "body" not "request.body" ?
  ctx.body = {
    id        : 1,
    isbn      : body.isbn,
    authors   : body.authors,
    publisher : body.publisher
  };
};

module.exports.createFromBodyArray = function (ctx) {
  const body = ctx.request.body; // TODO Want ctx to be just "body" not "request.body" ?
  ctx.body = [
    {
      id        : 1,
      isbn      : body[0].isbn,
      authors   : body[0].authors,
      publisher : body.publisher
    },
    {
      id        : 2,
      isbn      : body[1].isbn,
      authors   : body[1].authors,
      publisher : body.publisher
    }
  ];
};