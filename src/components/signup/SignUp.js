import React, {useEffect, useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "./signup.css"
import {Card, Nav} from 'react-bootstrap'
import API from "../../utils/api"
import {user} from "../../redux/actions/user";
import app from "../../firebase/firebase";

export const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPass] = useState("");
  
    const [loggedInUser, setUser] = useState(null);

  
    useEffect(() => {
        const authListener = app.auth().onAuthStateChanged(function (user) {
        setUser(user);
        if (user) {
            console.log(user);
        } else {  
            console.log("User Logged Out");
        }
        });
        return () => {
        authListener();
        };
    }, []);

    const registerUser = () => {
        app
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .catch(function (error) {
            // Handle Errors here.
            alert(error);
            // ...
        });
    };

    const login = () => {
        app
        .auth()
        .signInWithEmailAndPassword(email, password)
        .catch(function (error) {
            alert(error);
        });
    };

    return (
        <div className="App">
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPass(e.target.value)}
            />
            {loggedInUser ? (
                <button onClick={() => app.auth().signOut()}>Logout</button>
            ) : (
                <div>
                <button onClick={login}>Sign In</button>
                <button onClick={registerUser}>Register</button>
                </div>
            )}
            {loggedInUser ? "Your Logged in!": ""}
        </div>
    );
}