import React from "react";
import { MenuContainer } from "../components";
import { GetUsernameContainer } from "../components/";
import { ProfilePicLoaderContainer } from "../components/";
import Api from '../utils/api';

export const ProfileScreen = () => {
  async function deleteUser() {
    // call the delete user endpoint
    // and await its response
    await Api.deleteUser(window.location.pathname.split('/')[2]);

    //after getting response, navigate back to homescreen;
    // since user doesn't exist anymore the browser will be logged out
    window.location.pathname = '/';
  }

  return (<>
    <MenuContainer />
    <h2>Profile</h2>
    <GetUsernameContainer />
    <button type="button" className="btn btn-primary"
    onClick={deleteUser}>
      Delete User
    </button>
    <ProfilePicLoaderContainer />
  </>)
  };
