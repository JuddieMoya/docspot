import api from "../../utils/api"
import { getMessages } from "./messages";
export const POST_MESSAGE = 'POST_MESSAGE'

// export const POST_MESSAGE_SUCCESS = 'POST_MESSAGE_SUCCESS'
// export const POST_MESSAGE_FAILURE = 'POST_MESSAGE_FAILURE'

const postMessageAction = (text) => async (dispatch, getState) => {
    try {
        const payload = await api.postMessages(text);
        
        await dispatch({ type: POST_MESSAGE, payload });
        dispatch(getMessages()) 
    } catch (err) {
        // dispatch({
        //     type: POST_MESSAGE,
        //     payload: err.message,
        // });
    }
}

export const actions = {
    postMessageAction
}