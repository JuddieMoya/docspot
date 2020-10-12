import { MESSAGES, MESSAGES_SUCCESS, MESSAGES_FAILURE, POST_MESSAGE}  from "../actions";


const INITIALSTATE = {
  messages: [],
  loading: false,
  error: "",
};

export const messagesReducer = (state = INITIALSTATE, action) => {
  switch (action.type) {
    case MESSAGES:
      return {
        ...INITIALSTATE,
        loading: true, // To tell the user the data is coming in and we are waiting for the data.
      };
    case MESSAGES_SUCCESS: // this  only happens when you get the data succesfully.
      return {
        ...INITIALSTATE,
        messages: action.payload, // the  payload  is the  data that action sends to the reducer.
        loading: false,
      };

    case MESSAGES_FAILURE: // this  only happens when the  message is unsuccesfully.
      return {
        ...INITIALSTATE,
        error: action.payload, // the  payload  is the  data that action sends to the reducer.
        loading: false,
      };
      case POST_MESSAGE:
      return{
        ...INITIALSTATE,
        messages: [action.payload, ...state.messages]
      }
    default:
      return state;
  }
};
