import React, {useEffect} from "react"
import { useSelector, useDispatch } from "react-redux"
import {Form, Button} from "react-bootstrap"
import {actions} from "../../redux/actions/post-messages"
import {Loader} from "../loader"
// import "./GetMessages.css"

export const PostMessages = () => { 
    const state=useSelector((state ) =>state.messages)
    const dispatch= useDispatch()
    // useEffect(()=> {
    //     // dispatch(actions.fetchMessagesAction())
    // },[])
    const handlePost= (event) => {
        event.preventDefault() 
        console.log("messagesposted")
    }

    return (
        <React.Fragment>
            
          <Button onClick={handlePost}>Hello</Button>
          
        </React.Fragment>
    ) 
}
