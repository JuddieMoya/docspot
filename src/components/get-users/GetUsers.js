import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "../../redux/actions/get-users";
import { Loader } from "../loader";
import "./GetUsers.css";
const PHOTO_URL = username => `https://kwitter-api.herokuapp.com${username}`
export const GetUsers = () => {
    const state = useSelector((state) => state.users)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(actions.fetchUsersAction());
    }, []);

    console.log(state.users)
    return (
        <React.Fragment>
            <div>
                {state.users.map(user => (
                    <p>
                        {user.username}
                        {/* {user} */}
                        <img
                            alt="Profile"
                            src={PHOTO_URL(user.pictureLocation)}
                        />
                    </p>))}
            </div>

            {state.loading && <Loader />}
            {state.error && <p style={{ color: "red" }}>{state.error.message}</p>}
        </React.Fragment>
    );
};
