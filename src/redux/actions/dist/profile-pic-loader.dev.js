"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.actions = exports.UPLOAD_PICTURE_FAILURE = exports.UPLOAD_PICTURE_SUCCESS = exports.UPLOAD_PICTURE_REQUEST = void 0;

var _api = _interopRequireDefault(require("../../utils/api"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var UPLOAD_PICTURE_REQUEST = 'UPLOAD_PICTURE_REQUEST';
exports.UPLOAD_PICTURE_REQUEST = UPLOAD_PICTURE_REQUEST;
var UPLOAD_PICTURE_SUCCESS = 'UPLOAD_PICTURE_SUCCESS';
exports.UPLOAD_PICTURE_SUCCESS = UPLOAD_PICTURE_SUCCESS;
var UPLOAD_PICTURE_FAILURE = 'UPLOAD_PICTURE_FAILURE';
exports.UPLOAD_PICTURE_FAILURE = UPLOAD_PICTURE_FAILURE;

var uploadPictureAction = function uploadPictureAction(picture) {
  return function _callee(dispatch, getState) {
    var username, payload;
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.log(picture);
            _context.prev = 1;
            dispatch({
              type: UPLOAD_PICTURE_REQUEST
            });
            username = getState().auth.username;
            _context.next = 6;
            return regeneratorRuntime.awrap(_api["default"].uploadProfilePic(username, picture));

          case 6:
            payload = _context.sent;
            dispatch({
              type: UPLOAD_PICTURE_SUCCESS,
              payload: payload
            });
            _context.next = 13;
            break;

          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](1);
            dispatch({
              type: UPLOAD_PICTURE_FAILURE,
              payload: _context.t0.message
            });

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[1, 10]]);
  };
};

var actions = {
  uploadPictureAction: uploadPictureAction
};
exports.actions = actions;