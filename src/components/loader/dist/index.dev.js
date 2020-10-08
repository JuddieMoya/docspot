"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Loader = require("./Loader");

Object.keys(_Loader).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Loader[key];
    }
  });
});