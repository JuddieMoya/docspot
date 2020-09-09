<<<<<<< HEAD
import { combineReducers } from "redux";
import { authReducer} from "./auth";
import users from "./users";

export default combineReducers({ auth: authReducer,users });
=======
import { combineReducers } from "redux";
import { authReducer } from "./auth";
import { messagesReducer } from "./messages";

export default combineReducers({
  auth: authReducer,
  messages: messagesReducer,
});
>>>>>>> ellyBranchmessages
