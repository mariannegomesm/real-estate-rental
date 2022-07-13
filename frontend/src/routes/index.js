import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Register from "../pages/Register";

const Routes = () => {
  return (
    <Router>
        <Switch>
            <Route exact path="/" component={Register} />
        </Switch>
    </Router>
  );
};

export default Routes;