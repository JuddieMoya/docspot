import api from "../../utils/api"
export const FETCH_USERNAME_REQUEST = 'FETCH_USERNAME_REQUEST'
export const FETCH_USERNAME_SUCCESS = 'FETCH_USERNAME_SUCCESS'
export const FETCH_USERNAME_FAILURE = 'FETCH_USERNAME_FAILURE'

const fetchUsernameAction = () => async (dispatch, getState) => {
    try {
        dispatch({ type: FETCH_USERNAME_REQUEST });
        const payload = await api.fetchUsername();
        dispatch({ type: FETCH_USERNAME_SUCCESS, payload });
    } catch (err) {
        dispatch({
            type: FETCH_USERNAME_FAILURE,
            payload: err.message,
        });
    }
}

export const actions = {
    fetchUsernameAction
}