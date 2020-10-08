"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.actions = exports.LOGOUT = exports.LOGIN_FAILURE = exports.LOGIN_SUCCESS = exports.LOGIN = void 0;

var _api = _interopRequireDefault(require("../../utils/api"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// AUTH CONSTANTS
var LOGIN = "AUTH/LOGIN";
exports.LOGIN = LOGIN;
var LOGIN_SUCCESS = "AUTH/LOGIN_SUCCESS";
exports.LOGIN_SUCCESS = LOGIN_SUCCESS;
var LOGIN_FAILURE = "AUTH/LOGIN_FAILURE";
exports.LOGIN_FAILURE = LOGIN_FAILURE;
var LOGOUT = "AUTH/LOGOUT";
/*
 AUTH ACTIONS (this is a thunk....)
 THUNKS: --> https://github.com/reduxjs/redux-thunk#whats-a-thunk
 If you need access to your store you may call getState()
*/

exports.LOGOUT = LOGOUT;

var login = function login(credentials) {
  return function _callee(dispatch, getState) {
    var payload;
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            dispatch({
              type: LOGIN
            });
            _context.next = 4;
            return regeneratorRuntime.awrap(_api["default"].login(credentials));

          case 4:
            payload = _context.sent;
            // ℹ️ℹ️This is how you woud debug the response to a requestℹ️ℹ️
            // console.log({ result })
            dispatch({
              type: LOGIN_SUCCESS,
              payload: payload
            });
            _context.next = 11;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](0);
            dispatch({
              type: LOGIN_FAILURE,
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

var logout = function logout() {
  return function _callee2(dispatch, getState) {
    return regeneratorRuntime.async(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return regeneratorRuntime.awrap(_api["default"].logout());

          case 3:
            _context2.prev = 3;

            /**
             * Let the reducer know that we are logged out
             */
            dispatch({
              type: LOGOUT
            });
            return _context2.finish(3);

          case 6:
          case "end":
            return _context2.stop();
        }
      }
    }, null, null, [[0,, 3, 6]]);
  };
}; // END AUTH ACTIONS


var actions = {
  login: login,
  logout: logout
};
exports.actions = actions;