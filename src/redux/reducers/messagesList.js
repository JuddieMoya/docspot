import {
    GET_MESSAGE_LIST,
    GET_MESSAGE_LIST_LOAD,
    GET_MESSAGE_LIST_FAIL
} from '../actions'

const INITIAL_STATE = {
    loading: false,
    error: "",
    messages: [],
    count: 0
};

export const getMessageListReducer = (state = { ...INITIAL_STATE }, action) => {
    switch (action.type) {
        case GET_MESSAGE_LIST_LOAD:
            return{
              ...INITIAL_STATE,
              loading: true,
            }

        case GET_MESSAGE_LIST:
            const {messages, count} = action.payload
            return {
                ...INITIAL_STATE,
                loading: false,
                messages: messages,
                count: count,
            };

        case GET_MESSAGE_LIST_FAIL:
            return {
                ...INITIAL_STATE,
                error: action.payload,
                loading: false,
            };
        
        default:
        return state;
    }
};