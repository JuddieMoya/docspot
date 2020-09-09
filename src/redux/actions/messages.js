// TODO: implement
import api from "../../utils/api";

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
