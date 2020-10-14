import {
    ADD_USER,
    ADD_USER_FAIL,
    ADD_USER_LOAD
} from "../actions"

const INITIAL_STATE = {
    username: "",
    displayname: "",
    loading: false
}

export const userReducer = (state = { ...INITIAL_STATE }, action) => {
    switch (action.type) {
        case ADD_USER_LOAD:
          console.log("add user loading reducer")
          return {
            ...INITIAL_STATE,
            loading: true,
          };
        
        case ADD_USER:
          console.log("add user success")
          const { username, displayname } = action.payload.user;
          return {
            ...INITIAL_STATE,
            username,
            displayname,
            loading: false,
          };
            
        case ADD_USER_FAIL:
          console.log("add user fail")
          return {
            ...INITIAL_STATE,
            error: action.payload,
            loading: false,
          };
    
        default:
          return state;
    }
};