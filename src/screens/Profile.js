import React from "react";
import { MenuContainer } from "../components";
import { GetUsernameContainer } from "../components/";
import { ProfilePicLoaderContainer } from "../components/";

export const ProfileScreen = () => (
  <>
    <MenuContainer />
    <ProfilePicLoaderContainer />
    <h2>Profile</h2>
    <GetUsernameContainer />
  </>
);
