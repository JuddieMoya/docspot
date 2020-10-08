"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.authReducer = void 0;

var _actions = require("../actions");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// INITIAL STATE
var INITIAL_STATE = {
  isAuthenticated: "",
  username: "",
  loading: false,
  error: ""
};

var authReducer = function authReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _objectSpread({}, INITIAL_STATE);
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actions.LOGIN:
      return _objectSpread({}, INITIAL_STATE, {
        loading: true
      });

    case _actions.LOGIN_SUCCESS:
      var _action$payload = action.payload,
          username = _action$payload.username,
          token = _action$payload.token;
      return _objectSpread({}, INITIAL_STATE, {
        isAuthenticated: token,
        username: username,
        loading: false
      });

    case _actions.LOGIN_FAILURE:
      return _objectSpread({}, INITIAL_STATE, {
        error: action.payload,
        loading: false
      });

    case _actions.LOGOUT:
      return _objectSpread({}, INITIAL_STATE);

    default:
      return state;
  }
};

exports.authReducer = authReducer;