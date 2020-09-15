import {
  UPLOAD_PICTURE_REQUEST,
    UPLOAD_PICTURE_SUCCESS,
    UPLOAD_PICTURE_FAILURE,
  } from "../actions";
  
  const intialState = {
    loading: false,
    pictureLocation:null,
    error:''
  };
  
  const profilePicReducer = (state = intialState, action) => {
    switch (action.type) {
      case UPLOAD_PICTURE_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case UPLOAD_PICTURE_SUCCESS:
        return {
          ...state,
          loading: false,
          // not sure what to put here  should it be event.targte.value
          pictureLocation: action.payload,
          // HERE WHAT TO DO?
          error: ""
        };
      case UPLOAD_PICTURE_FAILURE:
        return {
          ...state,
          loading: false,
          pictureLocation:null ,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  export default profilePicReducer;
  