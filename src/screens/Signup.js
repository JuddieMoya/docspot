import React, { useState } from "react";
import { Link } from "react-router-dom";
import Api from "../utils/api";

export const Signup = () => {
  const [username, setUsername] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault(e);
    try {
      const result = await Api.createUser({ username, displayName, password });

      // response good, redirect to the main page
      if (result.statusCode === 200) {
        // set window.location.pathname to the default path ('/')
        window.location.pathname = "/";
      }
    } catch (e) {
      setErrorMessage("Failed to create user.");

      console.log(errorMessage);
    }
  };
  return (
    <>
      <h1>Signup</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="username">Username:</label>
        <br />
        <input
          type="text"
          id="username"
          onChange={(e) => setUsername(e.target.value)}
        ></input>
        <br />
        <label htmlFor="display">Display Name:</label>
        <br />
        <input
          type="text"
          id="display"
          onChange={(e) => setDisplayName(e.target.value)}
        ></input>
        <br />
        <label htmlFor="password">Password:</label>
        <br />
        <input
          type="password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button type="submit">Submit</button>
        {errorMessage}
        <Link to="/">Back to Login</Link>
      </form>
    </>
  );
};
