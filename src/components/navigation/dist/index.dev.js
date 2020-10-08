"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Messages = _interopRequireDefault(require("../../screens/Messages"));

var _Navigation = require("./Navigation");

Object.keys(_Navigation).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Navigation[key];
    }
  });
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }