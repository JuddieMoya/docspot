"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ConnectedRoute = require("./ConnectedRoute");

Object.keys(_ConnectedRoute).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _ConnectedRoute[key];
    }
  });
});