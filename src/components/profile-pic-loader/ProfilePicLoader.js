import React , { useEffect, useState} from 'react'
import { useSelector, useDispatch } from "react-redux";
// import { actions } from "../../redux/actions/profile-pic-loader";
// local state here store img in state

export const ProfilePicLoader= ()=> {
 const [profilePic, setProfilePic] = useState()
const fileSelectHandler = event =>{
    setProfilePic({profilePic:event.target.files})
}
const fileUploadHandler = event =>{
    console.log(profilePic);
}
   return( <>
    <div>
    <input type='file' onChange={fileSelectHandler}/> 
    <button 
    onClick={fileUploadHandler}
    >Upload</button>
    </div>
    
    </>)
}