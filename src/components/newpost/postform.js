import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createMessage } from "../../redux/actions/messages";
import { Loader } from "../loader";
import "./postform.css";
import { Link } from "react-router-dom";
import {connect} from "react-redux";
 

const PostForm = (props) => {
  const { loading, error } = useSelector((state) => ({
    loading: state.auth.loading,
    error: state.auth.error,
  }));

  const dispatch = useDispatch();

  let [state, setState] = useState("");
  

  const handlePost = (event) => {
    event.preventDefault()
      if(state!== "") {
      props.createMessage({ text: state })
    setState("")
    
  };
  }
  const handleChange = (event) => {
    setState(event.target.value)
  };


  return (
    <React.Fragment>
      <form id="post-form" onSubmit={handlePost}>
       
      
        <input
         
          name="Update us"
          value={state}
          required
          onChange={handleChange} 
          placeholder="your message here"
        />
        <button type="submit" disabled={loading}>
          post
        </button>
      </form>
      {loading && <Loader />}
      {error && <p style={{ color: "red" }}>{error.message}</p>}
      
    </React.Fragment>
  );
  
};
const mapStateToProps = (state) => ({
  messages: state.message
});
const mapDispatchToProps = {
  createMessage
};
export  default connect(mapStateToProps,mapDispatchToProps)(PostForm);