import React from "react";
import {actions} from '../redux/actions/get-users'
// import Getusers from "../components/get-users/Getusers";

export const GetUsersScreen = () => (
  <>
    <h2>List</h2>
    <h3>{actions.payload}</h3>

  </>
);