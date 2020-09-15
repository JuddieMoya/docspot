import React, { useEffect, useState } from 'react'
import {useDispatch } from "react-redux";
import { actions } from "../../redux/actions/profile-pic-loader";
// local state here store img in state

export const ProfilePicLoader = () => {
    const [profilePic, setProfilePic] = useState()
    const dispatch = useDispatch()
    const fileSelectHandler = event => {
        setProfilePic({ picture: event.target.files[0] })
    }
    const fileUploadHandler = event => {
        event.preventDefault()
        console.log(profilePic);
        // test
        const formData = new FormData()
        formData.append('picture', profilePic.picture)
        dispatch(actions.uploadPictureAction(formData))
    }
    return (<>

        <div>
        <form onSubmit={fileUploadHandler}>
            <input type='file' name='picture' onChange={fileSelectHandler} />
            <button
            type='submit'
            // disabled={loading}
                // onClick={fileUploadHandler}
            >Upload</button>
        </form>
        </div>

    </>)
}