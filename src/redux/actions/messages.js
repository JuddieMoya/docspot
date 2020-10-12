// TODO: implement
import api from "../../utils/api";

export const GET_MESSAGE_LIST_LOAD = 'GET_MESSAGE_LIST_LOAD'
export const GET_MESSAGE_LIST_FAIL = 'GET_MESSAGE_LIST_FAIL'
export const GET_MESSAGE_LIST = 'GET_MESSAGE_LIST'
export const MESSAGES = "MESSAGES";
export const MESSAGES_SUCCESS = "MESSAGES_SUCCESS";
export const MESSAGES_FAILURE = "MESSAGES_FAILURE";

export const getMessages = () => async (dispatch, getState) => {
  try {
    dispatch({ type: MESSAGES });
    const payload = await api.getMessages();
    // ℹ️ℹ️This is how you woud debug the response to a requestℹ️ℹ️
    // console.log({ result })
    dispatch({ type: MESSAGES_SUCCESS, payload });
  } catch (err) {
    dispatch({
      type: MESSAGES_FAILURE,
      payload: err.message,
    });
  }
};

export const getMessageList = (msgParams) => async (dispatch, getState) => {
  try {
    dispatch({ type: GET_MESSAGE_LIST_LOAD})
    const payload = await api.getMessageList(msgParams);
    dispatch({ type: GET_MESSAGE_LIST, payload });
  } catch (err) {
    dispatch({
      type:GET_MESSAGE_LIST_FAIL,
      payload: err.message,
    });
  }
};
