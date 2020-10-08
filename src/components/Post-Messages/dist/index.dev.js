"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _PostMessages = require("./PostMessages");

Object.keys(_PostMessages).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _PostMessages[key];
    }
  });
});