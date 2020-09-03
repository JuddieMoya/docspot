import { combineReducers } from "redux";
import { authReducer } from "./auth";
import { messagesReducer } from "./messages";

export default combineReducers({
  auth: authReducer,
  messsages: messagesReducer,
});
