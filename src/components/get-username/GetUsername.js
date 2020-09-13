import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "../../redux/actions/get-username";
// import defaultImage from '../get-users/img/broken.png'
// import "./GetUsername.css";
const PHOTO_URL = username => `https://kwitter-api.herokuapp.com${username}`
export const GetUsername = () => {
    const state = useSelector((state) => state)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(actions.fetchUsernameAction());
        console.log('dispatch username action in component')
    }, []);
    console.log(state)
    return(
        
        <>
        {state.getUsername.currentUser&&(
        <div>
        <h1>{state.auth.username}</h1>
        <img
        alt='profile pic'
        src = {PHOTO_URL(state.getUsername.currentUser.user.pictureLocation)}
        />
        </div>
        )}
        
        
        </>
    )
}