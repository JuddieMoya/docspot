import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "../../redux/actions/auth";
import "./Menu.css";

export const Menu = () => {
  const isAuthenticated = useSelector((state) => !!state.auth.isAuthenticated);
  const dispatch = useDispatch();
  const logout = () => dispatch(actions.logout());
  return (
    <div id="menu">
      <h1>Kwitter</h1>
      <div id="menu-links">
        {isAuthenticated ? (
          <>
           <Link to="/getusers">Get Users</Link>
            <Link to="/messagefeed">Message Feed</Link>
            <Link to="/" onClick={logout}>
              Logout
            </Link>
          </>
        ) : null}
      </div>
    </div>
  );
};
