'use strict';

const CODES = {
  ROUTER                        : 1,
  ROUTE                         : 2,
  ROUTE_NOT_IMPLEMENTED         : 3,
  VALIDATION_SOURCE_SOURCE   : 100,
  VALIDATION_SOURCE_REQUIRED : 101,
  VALIDATION_SOURCE_TYPE     : 102,
  VALIDATION_SOURCE_FORMAT   : 103
};

function BaseError(message, code) {
  const error = Error.call(this, message);
  this.name = this.constructor.name;
  this.code = code;
  this.message = error.message;
  this.stack = error.stack;
}

BaseError.prototype = Object.create(Error.prototype);
BaseError.prototype.constructor = BaseError;

function RouterError(message) {
  BaseError.call(this, `${message}`, CODES.ROUTER);
}

RouterError.prototype = Object.create(BaseError.prototype);
RouterError.prototype.constructor = RouterError;

function RouteError(method, route, message) {
  BaseError.call(this, `[${method.toUpperCase()} ${route}] ${message}`, CODES.ROUTE);
  this.method = method;
  this.route = route;
}

RouteError.prototype = Object.create(BaseError.prototype);
RouteError.prototype.constructor = RouteError;

function RouteNotImplementedError(method, route) {
  BaseError.call(this, `[${method.toUpperCase()} ${route}] Route not implemented.`, CODES.ROUTE_NOT_IMPLEMENTED);
  this.method = method;
  this.route = route;
}

RouteNotImplementedError.prototype = Object.create(BaseError.prototype);
RouteNotImplementedError.prototype.constructor = RouteNotImplementedError;


function ResponseNotDefinedError(method, route, message) {
  BaseError.call(this, `[${method.toUpperCase()} ${route}] ${message}`, CODES.ROUTE);
  this.method = method;
  this.route = route;
}

ResponseNotDefinedError.prototype = Object.create(BaseError.prototype);
ResponseNotDefinedError.prototype.constructor = ResponseNotDefinedError;


function ParameterValidationError(parameterDefinition, parameterValue, cause) {
  BaseError.call(this, cause.message, cause.code);
  this.parameterDefinition = parameterDefinition;
  this.parameterValue = parameterValue;
  this.cause = cause;
}

ParameterValidationError.prototype = Object.create(BaseError.prototype);
ParameterValidationError.prototype.constructor = ParameterValidationError;



function ValidationError(message, code, name, type, format, value) {
  BaseError.call(this, message, code);
  this.name = name;
  this.type = type;
  this.format = format;
  this.value = value;
}

ValidationError.prototype = Object.create(BaseError.prototype);
ValidationError.prototype.constructor = ValidationError;


function SourceValidationError(name, type, format, value, message) {
  ValidationError.call(this, `Name: '${name}'. ${message}`, CODES.VALIDATION_SOURCE_SOURCE, value);
}

SourceValidationError.prototype = Object.create(ValidationError.prototype);
SourceValidationError.prototype.constructor = SourceValidationError;

function RequiredValidationError(name, type, format, value, message) {
  ValidationError.call(this, `Name: '${name}'. Value is required.`, CODES.VALIDATION_SOURCE_REQUIRED, value);
}

RequiredValidationError.prototype = Object.create(ValidationError.prototype);
RequiredValidationError.prototype.constructor = RequiredValidationError;

function TypeValidationError(name, type, format, value, message) {
  ValidationError.call(this, `Name: '${name}'. Expected type '${type}'. Value: '${value}'. ${message}`, CODES.VALIDATION_SOURCE_TYPE, value);
}

TypeValidationError.prototype = Object.create(ValidationError.prototype);
TypeValidationError.prototype.constructor = TypeValidationError;

function FormatValidationError(name, type, format, value, message) {
  ValidationError.call(this, `Name: '${name}'. Type: '${type}(${format})'. Value: '${value}'. ${message}`, CODES.VALIDATION_SOURCE_FORMAT, value);
}

FormatValidationError.prototype = Object.create(ValidationError.prototype);
FormatValidationError.prototype.constructor = FormatValidationError;


module.exports.CODES = CODES;
module.exports.RouterError = RouterError;
module.exports.RouteError = RouteError;
module.exports.ResponseNotDefinedError = ResponseNotDefinedError;
module.exports.RouteNotImplementedError = RouteNotImplementedError;
module.exports.ParameterValidationError = ParameterValidationError;
module.exports.SourceValidationError = SourceValidationError;
module.exports.ValidationError = ValidationError;
module.exports.RequiredValidationError = RequiredValidationError;
module.exports.TypeValidationError = TypeValidationError;
module.exports.FormatValidationError = FormatValidationError;