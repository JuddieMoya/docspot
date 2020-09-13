import React from "react";
import {Link} from 'react-router-dom'
import { GetUsersContainer } from "../components/get-users";
import {Card} from "react-bootstrap"

export const GetUsersScreen = () => (
  <>
    <Card.Title 
    style={{textAlign: 'center',
            backgroundColor: "rgb(24, 131, 181)",
            color:'white'
    }}>
      100 Newest Users
      <br/>
      <button style={{backgroundColor: 'grey'}}><Link  style={{color: 'white'}} to="/">Back to Home</Link></button>
      </Card.Title>
    
    <GetUsersContainer />

  </>
);