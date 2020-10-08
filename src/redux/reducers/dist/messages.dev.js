"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.messagesReducer = void 0;

var _actions = require("../actions");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var INITIALSTATE = {
  messages: [],
  loading: false,
  error: ""
};

var messagesReducer = function messagesReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIALSTATE;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actions.MESSAGES:
      return _objectSpread({}, INITIALSTATE, {
        loading: true // To tell the user the data is coming in and we are waiting for the data.

      });

    case _actions.MESSAGES_SUCCESS:
      // this  only happens when you get the data succesfully.
      return _objectSpread({}, INITIALSTATE, {
        messages: action.payload,
        // the  payload  is the  data that action sends to the reducer.
        loading: false
      });

    case _actions.MESSAGES_FAILURE:
      // this  only happens when the  message is unsuccesfully.
      return _objectSpread({}, INITIALSTATE, {
        error: action.payload,
        // the  payload  is the  data that action sends to the reducer.
        loading: false
      });

    case _actions.POST_MESSAGE:
      return _objectSpread({}, INITIALSTATE, {
        messages: [action.payload].concat(_toConsumableArray(state.messages))
      });

    default:
      return state;
  }
};

exports.messagesReducer = messagesReducer;