import React from "react";
import { Route, Redirect } from "react-router-dom";

import {
  isAuthenticated,
  userLocal,
  isTokenExpired,
  logout
} from "../services/auth";

import Navigation from "../components/Navigation";

export default function RouteWrapper({
  component: Component,
  isPrivate = false,
  isAdmin = false,
  ...rest
}) {
  console.log("expired", isTokenExpired());

  if (!isAuthenticated() && isPrivate) {
    return <Redirect to="/signin" />;
  }

  if (isTokenExpired()) {
    logout();
    return <Redirect to="/signin" />;
  }

  if (isAuthenticated() && !isPrivate) {
    return <Redirect to="/" />;
  }
  // verifica se é admin
  if (isAuthenticated() && isPrivate && isAdmin && !userLocal().isAdmin) {
    return <Redirect to="/" />;
  }

  return (
    <>
      {isPrivate && <Navigation />}
      <Route {...rest} component={Component} />
    </>
  );
}
