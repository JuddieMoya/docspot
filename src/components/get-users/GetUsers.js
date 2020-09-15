import React, { useEffect } from "react";
import {Card, ListGroup, ListGroupItem} from "react-bootstrap"
import { useSelector, useDispatch } from "react-redux";
import { actions } from "../../redux/actions/get-users";
import { Loader } from "../loader";
import "./GetUsers.css";
import defaultImage from "./img/broken.png";

const PHOTO_URL = (username) => `https://kwitter-api.herokuapp.com${username}`;
export const GetUsers = () => {
  const state = useSelector((state) => state.users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.fetchUsersAction());
  }, []);

  // console.log(state.users);
  return (
    <Card className = "userList"style={{ width: '50rem' }} style={{backgroundImage: 'linear-gradient(to bottom, #00adf0 0%, #1883b5 100%)'}}>

        {state.users.map((user) => {
          let userImage = defaultImage;
          if (user.pictureLocation !== null) {
            userImage = PHOTO_URL(user.pictureLocation);
          }
          return (
            <ListGroup>
            <p>
              <ListGroupItem className='username'><Card.Title>{user.username}</Card.Title></ListGroupItem>
              {/* {user} */}
              <ListGroupItem className='userimg'><img alt="Profile" src={userImage} /></ListGroupItem>
            </p>
            </ListGroup>
          );
        })}
      {state.loading && <Loader />}
      {state.error && <p style={{ color: "red" }}>{state.error.message}</p>}
    </Card>
  );
};