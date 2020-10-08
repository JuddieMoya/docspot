"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMessages = exports.MESSAGES_FAILURE = exports.MESSAGES_SUCCESS = exports.MESSAGES = void 0;

var _api = _interopRequireDefault(require("../../utils/api"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// TODO: implement
var MESSAGES = "MESSAGES";
exports.MESSAGES = MESSAGES;
var MESSAGES_SUCCESS = "MESSAGES_SUCCESS";
exports.MESSAGES_SUCCESS = MESSAGES_SUCCESS;
var MESSAGES_FAILURE = "MESSAGES_FAILURE";
exports.MESSAGES_FAILURE = MESSAGES_FAILURE;

var getMessages = function getMessages() {
  return function _callee(dispatch, getState) {
    var payload;
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            dispatch({
              type: MESSAGES
            });
            _context.next = 4;
            return regeneratorRuntime.awrap(_api["default"].getMessages());

          case 4:
            payload = _context.sent;
            // ℹ️ℹ️This is how you woud debug the response to a requestℹ️ℹ️
            // console.log({ result })
            dispatch({
              type: MESSAGES_SUCCESS,
              payload: payload
            });
            _context.next = 11;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](0);
            dispatch({
              type: MESSAGES_FAILURE,
              payload: _context.t0.message
            });

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[0, 8]]);
  };
};

exports.getMessages = getMessages;