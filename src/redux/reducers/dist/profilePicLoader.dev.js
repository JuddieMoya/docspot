"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _actions = require("../actions");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var intialState = {
  loading: false,
  pictureLocation: null,
  error: ''
};

var profilePicReducer = function profilePicReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : intialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actions.UPLOAD_PICTURE_REQUEST:
      return _objectSpread({}, state, {
        loading: true
      });

    case _actions.UPLOAD_PICTURE_SUCCESS:
      return _objectSpread({}, state, {
        loading: false,
        // not sure what to put here  should it be event.targte.value
        pictureLocation: action.payload,
        // HERE WHAT TO DO?
        error: ""
      });

    case _actions.UPLOAD_PICTURE_FAILURE:
      return _objectSpread({}, state, {
        loading: false,
        pictureLocation: null,
        error: action.payload
      });

    default:
      return state;
  }
};

var _default = profilePicReducer;
exports["default"] = _default;