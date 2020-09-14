
import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "../../redux/actions/auth";
import "./Menu.css";
import {Card, Nav} from 'react-bootstrap'

export const Menu = () => {
  const isAuthenticated = useSelector((state) => !!state.auth.isAuthenticated);
  const dispatch = useDispatch();
  const logout = () => dispatch(actions.logout());
  return (
    <Card id="menu">
      <button className='kwitter-button' style={{
        textAlign: 'center',
        fontSize:'25px',
        width:'50px',
        height:'50px',
        backgroundColor: 'white',
      }}><Link  style={{color: 'rgb(13, 162, 223)'}} to="/">K</Link></button>
      <Card.Title id= 'menu-title'
      style={{fontSize: '45px',
              textAlign: 'center'
               
      }}>
        Kwitter</Card.Title>
      <div id="menu-links">
        {isAuthenticated ? (
          <Nav>
<button style={{backgroundColor: 'grey', margin:'5px'}}><Link style={{color: 'white'}}to="/messagefeed">Messages</Link></button>
<button style={{backgroundColor: 'grey', margin:'5px'}}><Link style={{color: 'white'}}to="/RecentlylikesImages<"> Trending</Link></button>
<button style={{backgroundColor: 'grey', margin:'5px'}}><Link style={{color: 'white'}}to="/getusers">Get Users</Link></button>
<button style={{backgroundColor: 'grey', margin:'5px'}}><Link style={{color: 'white'}}to="/" onClick={logout}>Logout</Link></button>
          </Nav>
        ) : null}
      </div>
    </Card>
  );
};

