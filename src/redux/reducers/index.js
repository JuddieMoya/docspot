import { combineReducers } from "redux";
import { authReducer } from "./auth";
import { messagesReducer } from "./messages";
import users from "./users";
export default combineReducers({
  auth: authReducer,
  messages: messagesReducer,
  users,
});
