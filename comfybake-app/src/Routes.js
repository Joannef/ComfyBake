import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import NotFound from "./containers/NotFound";
import Login from "./containers/Login";
import Signup from "./containers/Signup";
import SellersPage from "./containers/sellersPage";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
    </Route>
      
      <Route exact path="/login">
        <Login />
      </Route>

      <Route exact path="/signup">
        <Signup />
      </Route>
      
      <Route path="/seller" exact component={() => <SellersPage />} />

      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
}