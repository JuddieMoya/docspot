import React, { useEffect } from "react";
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

  console.log(state.users);
  return (
    <React.Fragment>
      <div>
        {state.users.map((user) => {
          let userImage = defaultImage;
          if (user.pictureLocation !== null) {
            userImage = PHOTO_URL(user.pictureLocation);
          }
          return (
            <p>
              {user.username}
              {/* {user} */}
              <img alt="Profile" src={userImage} />
            </p>
          );
        })}
      </div>

      {state.loading && <Loader />}
      {state.error && <p style={{ color: "red" }}>{state.error.message}</p>}
    </React.Fragment>
  );
};
