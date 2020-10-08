"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _redux = require("redux");

var _auth = require("./auth");

var _messages = require("./messages");

var _users = _interopRequireDefault(require("./users"));

var _getUsername = _interopRequireDefault(require("./getUsername"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = (0, _redux.combineReducers)({
  auth: _auth.authReducer,
  messages: _messages.messagesReducer,
  users: _users["default"],
  getUsername: _getUsername["default"]
});

exports["default"] = _default;