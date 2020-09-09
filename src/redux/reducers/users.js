// TODO: implement
import { FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE,FETCH_USERNAME_REQUEST,FETCH_USERNAME_SUCCESS,FETCH_USERNAME_FAILURE } from '../actions'

const intialState = {
    loading: false,
    users: [],
    error: '',
    currentUser: {}
}

const getUsersReducer = (state = intialState, action) => {
    switch (action.type) {
        case FETCH_USERS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_USERS_SUCCESS:
            return {
                ...state,
                loading: false,
                users: action.payload,
                error: ''
            }
        case FETCH_USERS_FAILURE:
            return {
                ...state,
                loading: false,
                users: [],
                error: action.payload
            }
        case FETCH_USERNAME_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case FETCH_USERNAME_SUCCESS:
            return {
                ...state,
                loading: false,
                currentUser: action.payload,
                error: ''
            }
        case FETCH_USERNAME_FAILURE:
            return {
                ...state,
                loading: false,
                currentUser: [],
                error: action.payload
            }
        default: return state
    }
}
export default getUsersReducer