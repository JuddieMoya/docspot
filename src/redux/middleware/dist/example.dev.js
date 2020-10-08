"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

/*
  🚨1 point EXTRA CREDIT 🚨
  Create a middleware that does somethign interesting, use your imagination.
  DO NOT USE ANY OF THE MIDDLEWARE LOCATED IN THE HELP LINK =]
  Don't forget to add it to the applyMiddleware function in ../configureStore.js
  eg: applyMiddleware(thunk, exampleMiddleware)
  https://redux.js.org/advanced/middleware
*/
var exampleMiddleware = function exampleMiddleware(store) {
  return function (next) {
    return function (action) {
      return next(action);
    };
  };
};

var _default = exampleMiddleware;
exports["default"] = _default;