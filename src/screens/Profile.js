<<<<<<< HEAD
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
=======
import React from "react";
import { MenuContainer } from "../components";
import { GetUsernameContainer } from "../components/";
import {Link} from 'react-router-dom'
import {Card, Nav} from 'react-bootstrap'

export const ProfileScreen = () => (
  <div style={{backgroundImage: 'linear-gradient(to bottom, #00adf0 0%, #1883b5 100%)'}}>
    <MenuContainer />
    <h1 style = {{color:'white', textAlign:'center'}}>Profile Homepage</h1>
    <GetUsernameContainer />
    <h2 style={{ textAlign:'center', color:'white'}}>About</h2>
    <p style={{height:'100vh', color:'white'}}> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
  <Card.Footer style={{display:'flex', justifyContent:'center'}}>
  <Nav>
<button style={{backgroundColor: 'grey', margin:'5px'}}><Link style={{color: 'white'}}to="/messagefeed">Messages</Link></button>
<button style={{backgroundColor: 'grey', margin:'5px'}}><Link style={{color: 'white'}}to="/RecentlylikesImages<"> Trending</Link></button>
<button style={{backgroundColor: 'grey', margin:'5px'}}><Link style={{color: 'white'}}to="/getusers">Get Users</Link></button>
          </Nav>
  </Card.Footer>
  </div>
);
>>>>>>> 5e58fb929942b7d526c49df4b58d1eaa7439d43e
