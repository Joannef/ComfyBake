import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import NotFound from "./containers/NotFound";
import Login from "./containers/Login";
import Signup from "./containers/Signup";
import SellersPage from "./containers/sellersPage.jsx";
import Sellers from "./containers/SellersPage.js"
import OrderCon from "./containers/OrderCon";
import ViewCart from "./containers/ViewCart";

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

      <Route exact path="/orders">
        <OrderCon />
      </Route>

      <Route exact path="/orders/cart">
        <ViewCart />
      </Route>
      
      <Route path="/seller" exact component={() => <SellersPage/>} />

      <Route exact path="/sellerFunctional">
        <Sellers />
      </Route>

      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
}