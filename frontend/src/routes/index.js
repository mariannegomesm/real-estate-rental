import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import SelectAccess from "../pages/SelectAccess";
import RegisterUser from "../pages/RegisterUser";

const Routes = () => {
  return (
    <Router>
        <Switch>
            <Route exact path="/" component={SelectAccess} />
            <Route exact path="/register-user" component={RegisterUser} />
        </Switch>
    </Router>
  );
};

export default Routes;