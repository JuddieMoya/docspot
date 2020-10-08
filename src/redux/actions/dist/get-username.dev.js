"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.actions = exports.FETCH_USERNAME_FAILURE = exports.FETCH_USERNAME_SUCCESS = exports.FETCH_USERNAME_REQUEST = void 0;

var _api = _interopRequireDefault(require("../../utils/api"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var FETCH_USERNAME_REQUEST = 'FETCH_USERNAME_REQUEST';
exports.FETCH_USERNAME_REQUEST = FETCH_USERNAME_REQUEST;
var FETCH_USERNAME_SUCCESS = 'FETCH_USERNAME_SUCCESS';
exports.FETCH_USERNAME_SUCCESS = FETCH_USERNAME_SUCCESS;
var FETCH_USERNAME_FAILURE = 'FETCH_USERNAME_FAILURE';
exports.FETCH_USERNAME_FAILURE = FETCH_USERNAME_FAILURE;

var fetchUsernameAction = function fetchUsernameAction() {
  return function _callee(dispatch, getState) {
    var username, payload;
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            dispatch({
              type: FETCH_USERNAME_REQUEST
            });
            console.log('attempt');
            username = getState().auth.username;
            _context.next = 6;
            return regeneratorRuntime.awrap(_api["default"].fetchCurrentUser(username));

          case 6:
            payload = _context.sent;
            dispatch({
              type: FETCH_USERNAME_SUCCESS,
              payload: payload
            });
            console.log('success');
            _context.next = 15;
            break;

          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](0);
            dispatch({
              type: FETCH_USERNAME_FAILURE,
              payload: _context.t0.message
            });
            console.log('fail');

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[0, 11]]);
  };
};

var actions = {
  fetchUsernameAction: fetchUsernameAction
};
exports.actions = actions;