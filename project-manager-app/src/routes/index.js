import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";

import Route from "./Route";
import Task from "../pages/Task";
import SignIn from "../pages/Auth/SignIn";
import SignUp from "../pages/Auth/SignUp";
import NewTask from "../pages/NewTask";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/task" component={NewTask} isPrivate />
        <Route exact path="/" component={Task} isPrivate />
        <Route exact path="/signup" component={SignUp} isPrivate />
      </Switch>
    </BrowserRouter>
  );
}
