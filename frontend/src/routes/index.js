import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import SelectAccess from "../pages/SelectAccess";
import RegisterUser from "../pages/RegisterUser";
import AddressUser from "../pages/AddressUser";
import SuccessSigning from "../pages/SuccessSigning";
import Login from "../pages/Login";

const Routes = () => {
  return (
    <Router>
        <Switch>
            <Route exact path="/" component={SelectAccess} />
            <Route exact path="/register-user" component={RegisterUser} />
            <Route exact path="/address-user" component={AddressUser} />
            <Route exact path="/success-signing" component={SuccessSigning} />
            <Route exact path="/login" component={Login} />
        </Switch>
    </Router>
  );
};

export default Routes;