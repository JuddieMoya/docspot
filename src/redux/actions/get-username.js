import api from "../../utils/api"
export const FETCH_USERNAME_REQUEST = 'FETCH_USERNAME_REQUEST'
export const FETCH_USERNAME_SUCCESS = 'FETCH_USERNAME_SUCCESS'
export const FETCH_USERNAME_FAILURE = 'FETCH_USERNAME_FAILURE'

const fetchUsernameAction = () => async (dispatch, getState) => {
    try {
        dispatch({ type: FETCH_USERNAME_REQUEST });
        console.log('attempt');
        const username = getState().auth.username
        const payload = await api.fetchCurrentUser(username);
        dispatch({ type: FETCH_USERNAME_SUCCESS, payload });
        console.log('success')
    } catch (err) {
        dispatch({
            type: FETCH_USERNAME_FAILURE,
            payload: err.message,
        });
        console.log('fail')
    }
}

export const actions = {
    fetchUsernameAction
}