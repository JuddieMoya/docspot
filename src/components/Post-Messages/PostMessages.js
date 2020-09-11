import React, {useEffect, useState} from "react"

import { useSelector, useDispatch } from "react-redux"
import {Form, Button} from "react-bootstrap"
import {actions} from "../../redux/actions/post-messages"
import {Loader} from "../loader"
// import "./GetMessages.css"


export const PostMessages = () => { 
    const [text, setText] = useState(" ");
    const state=useSelector((state ) =>state.messages)
    const dispatch= useDispatch()
    // useEffect(()=> {
    //     // dispatch(actions.fetchMessagesAction())
    // },[])
    const handlePost= (event) => {
        event.preventDefault() 
        dispatch(actions.postMessageAction(text))
        // console.log(text)
    }


    const handleChange = (event) => {
        event.preventDefault()
        const inputValue = event.target.value;
        setText(inputValue)
      }

    return (
        <React.Fragment>
            <Form onSubmit = {handlePost}>
            <input  type="submit" value="Post Message" />
    <Form.Label>Create a message</Form.Label>
    <Form.Control onChange ={handleChange} as="textarea" rows="3" />
  
  </Form>
            
  {/* <Button >Post Message</Button> */}
          
        </React.Fragment>
    ) 
}
