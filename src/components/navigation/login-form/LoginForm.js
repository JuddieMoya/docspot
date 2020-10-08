import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "../../../redux/actions/auth";
import { Loader } from "../../loader";
import "./LoginForm.css";
import { Link } from "react-router-dom";

export const LoginForm = ({ login }) => {
  const { loading, error } = useSelector((state) => ({
    loading: state.auth.loading,
    error: state.auth.error,
  }));

  const dispatch = useDispatch();

  const [state, setState] = useState({
    username: "",
    password: "",
  });
  

  const handleLogin = (event) => {
    event.preventDefault();
    dispatch(actions.login(state));
    
  };

  const handleChange = (event) => {
    const inputName = event.target.name;
    const inputValue = event.target.value;
    setState((prevState) => ({ ...prevState, [inputName]: inputValue }));
  };

  return (
    <React.Fragment>
      <form id="login-form" onSubmit={handleLogin}>
        <label htmlFor="username" style={{fontWeight:'bold', marginTop:'5px'}}>Username</label>
        <input
          type="text"
          name="username"
          value={state.username}
          autoFocus
          required
          onChange={handleChange}
        />
        <label htmlFor="password" style={{fontWeight:'bold', marginTop:'5px'}}>Password</label>
        <input
          type="password"
          name="password"
          value={state.password}
          required
          onChange={handleChange}
        />
        <button style= {{backgroundColor:'white',color:'Black',marginTop:"5px"}} type="submit" disabled={loading}>
          Login
        </button>
      </form>
      {loading && <Loader />}
      {error && <p style={{ color: "red" }}>{error.message}</p>}
      <Link to="/signup"><button style= {{backgroundColor:'white',color:'black',marginTop:"5px"}}>Sign Up</button></Link>
    </React.Fragment>
  );
};