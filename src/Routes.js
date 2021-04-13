import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import NotFound from "./containers/NotFound";
import Sellers from "./containers/SellersPage";
import Login from "./containers/Login";
import Signup from "./containers/Signup";
import OrderCon from "./containers/OrderCon";
import Cart from "./containers/Cart";
import OrderDetail from "./containers/OrderDetails";

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
        <Cart />
      </Route>

      <Route exact path="/orders/order-details">
        <OrderDetail />
      </Route>

      <Route exact path="/seller">
        <Sellers />
      </Route>

      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
}