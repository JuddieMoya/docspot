import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "../../redux/actions/get-username";
// ****Maybe this**** // import { actions } from "../../redux/actions/auth";
import { Loader } from "../loader";
import defaultImage from '../get-users/img/broken.png'
// import "./GetUsername.css";
const PHOTO_URL = username => `https://kwitter-api.herokuapp.com${username}`
export const GetUsername = () => {
    // is this right state.users.username
// *****this Maybe **** // 
const isAuthenticated = useSelector((state) => !!state.auth.isAuthenticated)
    const state = useSelector((state) => state.users)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(actions.fetchUsernameAction());
    }, []);
    // console.log(state)
    
    // 1.)If event.target.value from login from = username display name and photo
    // 2.) is Authenticated?

    
    return(
        <React.Fragment>
            {isAuthenticated ?(
                <>
            {state.users.map(user => {
                    let userImage= defaultImage
                    if(user.pictureLocation!==null){
                        userImage= PHOTO_URL(user.pictureLocation)
                    }
                    return (
                    <p>
                        {user.username}
                        {/* {user} */}
                        <img
                            alt="Profile"
                            src={userImage}
                        />
                    </p>)})}
                    </>
          ) : null}
        </React.Fragment>
    )
}