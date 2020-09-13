import { combineReducers } from "redux";
import { authReducer } from "./auth";
import { messagesReducer } from "./messages";
import users from "./users";
import getUsername from './getUsername'
export default combineReducers({
  auth: authReducer,
  messages: messagesReducer,
  users,
  getUsername
});
