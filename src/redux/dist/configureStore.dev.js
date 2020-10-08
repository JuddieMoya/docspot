"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = configureStore;

var _redux = require("redux");

var _reduxPersist = require("redux-persist");

var _storage = _interopRequireDefault(require("redux-persist/lib/storage"));

var _reduxThunk = _interopRequireDefault(require("redux-thunk"));

var _reducers = _interopRequireDefault(require("./reducers"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var persistConfig = {
  key: "root",
  storage: _storage["default"]
};
var persistedReducer = (0, _reduxPersist.persistReducer)(persistConfig, _reducers["default"]);

function configureStore(preloadedState) {
  var store = (0, _redux.createStore)(persistedReducer, (0, _redux.applyMiddleware)(_reduxThunk["default"]));
  var persistor = (0, _reduxPersist.persistStore)(store);
  return {
    store: store,
    persistor: persistor
  };
}