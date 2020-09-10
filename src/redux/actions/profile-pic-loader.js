import api from "../../utils/api"
export const UPLOAD_PICTURE_REQUEST = 'UPLOAD_PICTURE_REQUEST'
export const UPLOAD_PICTURE_SUCCESS = 'UPLOAD_PICTURE_SUCCESS'
export const UPLOAD_PICTURE_FAILURE = 'UPLOAD_PICTURE_FAILURE'

const uploadPictureAction = () => async (dispatch, getState) => {
    try {
        dispatch({ type: UPLOAD_PICTURE_REQUEST });
        const payload = await api.uploadProfilePic();
        dispatch({ type: UPLOAD_PICTURE_SUCCESS, payload });
    } catch (err) {
        dispatch({
            type: UPLOAD_PICTURE_FAILURE,
            payload: err.message,
        });
    }
}

export const actions = {
    uploadPictureAction
}