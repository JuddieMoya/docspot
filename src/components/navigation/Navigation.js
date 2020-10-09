
import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import {
  TitleScreen,
  HomeScreen,
  ProfileScreen,
  NotFoundScreen,
  Signup,GetUsersScreen,
} from "../../screens";
import Messages from '../../screens/Messages';
import Message from '../../screens/Message';
import { ConnectedRoute } from "../connected-route/ConnectedRoute";
import { LoginForm } from "./login-form/LoginForm";

export const Navigation = () => (
  
  <>
  
  <BrowserRouter>
    <Switch>
    <ConnectedRoute
        exact
        path="/"
        component={TitleScreen}
      />
      <ConnectedRoute
        exact
        path="/login"
        redirectIfAuthenticated
        component={LoginForm}
      />
      
      <ConnectedRoute
        exact
        path="/"
        redirectIfAuthenticated
        component={HomeScreen}
      />
      <ConnectedRoute
        exact
        isProtected
        path="/profiles/:username"
        component={ProfileScreen}
      />
      <ConnectedRoute
        exact
        isProtected
        path="/messagefeed"
        component={Messages}
      />
      <ConnectedRoute
        exact
        isProtected
        path="/msg/:id"
        component={Message}
      />
      <ConnectedRoute
        exact
        path="/SignIn"
        component={Signup}
      />
       <ConnectedRoute 
        exact
        isProtected
        path="/getusers"
        component={GetUsersScreen}/>
      <ConnectedRoute path="*" component={NotFoundScreen} />
    </Switch>
  </BrowserRouter>
 
  </>
);

