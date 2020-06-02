import React from "react";
import { Link } from "react-router-dom";

const NotFound = ({ location }) => (
  <>
    <p>Page not found for {location.pathname}</p>
    <Link to="/">Go Home</Link>
  </>
);

export const NotFoundScreen = NotFound;
