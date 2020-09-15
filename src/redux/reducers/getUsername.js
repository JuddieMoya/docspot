 // TODO: implement
import {FETCH_USERNAME_REQUEST, FETCH_USERNAME_SUCCESS,FETCH_USERNAME_FAILURE
} from "../actions";
  
  const intialState = {
    loading: false,
    error: "",
    currentUser: null,
}
const getUsernameReducer = (state = intialState, action) => {
    switch (action.type) {
 case FETCH_USERNAME_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_USERNAME_SUCCESS:
      return {
        ...state,
        loading: false,
        currentUser: action.payload,
        error: "",
      };
    case FETCH_USERNAME_FAILURE:
      return {
        ...state,
        loading: false,
        currentUser: [],
        error: action.payload,
      };
      default:
        return state;
    }
  };
  export default getUsernameReducer;