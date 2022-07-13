import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import SelectAccess from "../pages/SelectAccess";

const Routes = () => {
  return (
    <Router>
        <Switch>
            <Route exact path="/" component={SelectAccess} />
        </Switch>
    </Router>
  );
};

export default Routes;