import { combineReducers } from "redux";
import { authReducer } from "./auth";
import { messagesReducer } from "./messages";
import { userReducer } from "./user";
import getUsername from './getUsername'
export default combineReducers({
  auth: authReducer,
  messages: messagesReducer,
  user: userReducer,
  getUsername
});
