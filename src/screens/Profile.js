import React from "react";
import { MenuContainer } from "../components";
import { GetUsernameContainer } from "../components/";
import { ProfilePicLoaderContainer } from "../components/";
import {Link} from 'react-router-dom'
import {Card, Nav} from 'react-bootstrap'

export const ProfileScreen = () => (
  <div style={{backgroundImage: 'linear-gradient(to bottom, #00adf0 0%, #1883b5 100%)'}}>
    <MenuContainer />
    <h1 style = {{color:'white', textAlign:'center'}}>Profile Homepage</h1>
    <GetUsernameContainer />
    <ProfilePicLoaderContainer />
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
