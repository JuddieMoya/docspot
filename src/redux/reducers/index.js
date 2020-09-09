import { combineReducers } from "redux";
import { authReducer} from "./auth";
import users from "./users";

export default combineReducers({ auth: authReducer,users });
