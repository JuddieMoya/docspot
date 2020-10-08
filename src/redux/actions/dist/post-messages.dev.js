"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.actions = exports.POST_MESSAGE = void 0;

var _api = _interopRequireDefault(require("../../utils/api"));

var _messages = require("./messages");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var POST_MESSAGE = 'POST_MESSAGE'; // export const POST_MESSAGE_SUCCESS = 'POST_MESSAGE_SUCCESS'
// export const POST_MESSAGE_FAILURE = 'POST_MESSAGE_FAILURE'

exports.POST_MESSAGE = POST_MESSAGE;

var postMessageAction = function postMessageAction(text) {
  return function _callee(dispatch, getState) {
    var payload;
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return regeneratorRuntime.awrap(_api["default"].postMessages(text));

          case 3:
            payload = _context.sent;
            _context.next = 6;
            return regeneratorRuntime.awrap(dispatch({
              type: POST_MESSAGE,
              payload: payload
            }));

          case 6:
            dispatch((0, _messages.getMessages)());
            _context.next = 11;
            break;

          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](0);

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[0, 9]]);
  };
};

var actions = {
  postMessageAction: postMessageAction
};
exports.actions = actions;