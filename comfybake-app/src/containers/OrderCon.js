import { getDefaultNormalizer } from "@testing-library/dom";
import React, {useState, useEffect} from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import database from '../firebase';
import "./OrderCon.css";

const Email = "1231231asdad@gmail.com"; //should be authenticated by logged-in user dummy user fir now
const [orderList, setList] = React.useState([]);

function OrderBlock(props) {
    const img = props.img;
    const description = props.description;
    const qty = props.qty;
    const avail = props.avail;
    const price = props.price;
    const date = props.date;
    const id = props.id;
    const addy = props.addy;
    const pay_plan = props.pay_plan;
    const status = props.status;

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
    var orders = database.ref(`/Users:${Email}/Orders`);
    orders.on('value', function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
    var childData = childSnapshot.val();
    orderList.concat({childData});
    setList(orderList);
    });
});
    return(
        <section>
            <h class="checkout">Ready To Checkout?</h>
            <div class="ordertower">
                {orderList.map(orderList => 
                    <div key={orderList.key}> 
                        <OrderBlock orderList={orderList}/> 
                    </div>)} 
            </div>
            <div class="right_button">
                <Link to="/orders/cart">View Cart</Link>
            </div>
            <div>
                {items ? (
                    <div>
                        <h class="top-left">Order Items:</h>
                        <h class="bottom-left">{items}</h>
                    </div>
                    ):(
                    <div>
                        <h class="top-left">Order Items: </h>
                        <h class="none">Your cart is empty. Please make a selection first!</h>
                    </div>
                )} 
            </div>
        </section>
    )
};