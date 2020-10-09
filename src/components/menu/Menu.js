
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
      <button className='DocSpot-Button' style={{
        textAlign: 'left',
        fontSize:'25px',
        width:'125px',
        height:'80px',
        backgroundColor: 'Black',
      }}><Link  style={{color: 'white'}} to="/">DocSpot</Link></button>
      <Card.Title id= 'menu-title'
      style={{fontSize: '45px',
              textAlign: 'left'
               
      }}>
        </Card.Title>
      <div id="menu-links">
        
          <Nav>
<Link style={{color: 'white', margin: '20px'}}to="/FindDoctor"> Find a Doctor</Link>
<hr/>
<Link style={{color: ' white ', margin: '20px'}}to="/FindHospital<">Find a Hospital</Link>
<Link style={{color: 'white', margin: '20px'}}to="/health ">Health A-Z</Link>

<Link style={{color: 'white', margin: '20px'}}to="/SignIn" >Signin</Link>

          </Nav>
    
      </div>
    </Card>
  );
};

