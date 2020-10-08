"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.actions = exports.FETCH_USERS_FAILURE = exports.FETCH_USERS_SUCCESS = exports.FETCH_USERS_REQUEST = void 0;

var _api = _interopRequireDefault(require("../../utils/api"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST';
exports.FETCH_USERS_REQUEST = FETCH_USERS_REQUEST;
var FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
exports.FETCH_USERS_SUCCESS = FETCH_USERS_SUCCESS;
var FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE';
exports.FETCH_USERS_FAILURE = FETCH_USERS_FAILURE;

var fetchUsersAction = function fetchUsersAction() {
  return function _callee(dispatch, getState) {
    var payload;
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            dispatch({
              type: FETCH_USERS_REQUEST
            });
            _context.next = 4;
            return regeneratorRuntime.awrap(_api["default"].fetchUsers());

          case 4:
            payload = _context.sent;
            dispatch({
              type: FETCH_USERS_SUCCESS,
              payload: payload
            });
            _context.next = 11;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](0);
            dispatch({
              type: FETCH_USERS_FAILURE,
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

var actions = {
  fetchUsersAction: fetchUsersAction
};
exports.actions = actions;