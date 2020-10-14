import api from '../../utils/api';
import {actions} from './auth'
export const ADD_USER_LOAD = 'ADD_USER_LOAD'
export const ADD_USER_FAIL = 'ADD_USER_FAIL'
export const ADD_USER = 'ADD_USER'

export const user = credentials => async (dispatch, getState) => {
    console.log("user action", credentials)
    try {
      dispatch({ type: ADD_USER_LOAD });
      const payload = await api.createUser(credentials);
  
      dispatch({ type: ADD_USER, payload });
    } catch (err) {
      dispatch({
        type: ADD_USER_FAIL,
        payload: err.message,
      });
    }
};