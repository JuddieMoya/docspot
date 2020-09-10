import api from "../../utils/api"
export const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST'
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS'
export const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE'

const fetchUsersAction = () => async (dispatch, getState) => {
    try {
        dispatch({ type: FETCH_USERS_REQUEST });
        const payload = await api.fetchUsers();
        dispatch({ type: FETCH_USERS_SUCCESS, payload });
    } catch (err) {
        dispatch({
            type: FETCH_USERS_FAILURE,
            payload: err.message,
        });
    }
}

export const actions = {
    fetchUsersAction
}