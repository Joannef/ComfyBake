import { getDefaultNormalizer } from "@testing-library/dom";
import React, {useState, useEffect} from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import database from '../firebase';
import "./OrderCon.css";

const Email = "1231231asdad@gmail.com"; //should be authenticated by logged-in user dummy user fir now

function OrderBlock(props) {
    const img = props.val().img;
    const description = props.val().description;
    const qty = props.val().qty;
    const avail = props.val().avail;
    const price = props.val().price;
    const date = props.val().date;
    const id = props.val().id;
    const addy = props.val().addy;
    const pay_plan = props.val().pay_plan;
    const status = props.val().status;

    return (
    <div>
      <z class="purchase-date"> Purchased on {date} </z>
      <div class="rectangle"/>
      <b class="qty"/>
      <c class="status"/>
      <div class="img">{img}</div>
      <div class="description">{description}</div>
      <div class="qty">{qty}</div>
      <div class="avail">{avail}</div>
      <div class="price">{price}</div>
      <div class="order-details">
                <g class="ID"> {id} </g>
                <p class="total"> Total</p>
                <j class="price">{price}</j>
                <div class="detail-btn">
                    <Link to={{ pathname: "/orders/order-details", state: {
                                                                        id: id,
                                                                        addy: addy,
                                                                        status: status,
                                                                        plan: pay_plan,
                                                                        price: price}
                            }}> 
                            See Order Details
                    </Link>
                </div>
            </div>
    </div>
    );
  }

export default function OrderCon() {
    const [orderList, setList] = React.useState([]);
    /////ahhh why wont this work
    const orders = firebase.database().ref(`/Users:${Email}/Orders`);
    orders.on('value', function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
    var childData = childSnapshot.val();
    orderList.concat({childData});
    setList(orderList);
    });
});
    return(
        <section>
            <div class="right_button">
                <Link to="/orders/cart">View Cart</Link>
            </div>
            <h class="top-left">Order Ready To Checkout?</h>
            <div>
                {orderList != 0 ? (
                    <div>
                        <div class="O-block">
                            {orderList.map(orderList => 
                                <div key={orderList.key}> 
                                    <OrderBlock orderList={orderList}/> 
                                </div>)} 
                        </div>
                    </div>
                    ):(
                    <div>
                        <h class="none">Unfourtunately, your cart is empty. Please make a selection first!</h>
                    </div>
                )} 
            </div>
        </section>
    )
};