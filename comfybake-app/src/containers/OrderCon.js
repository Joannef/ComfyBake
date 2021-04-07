import { getDefaultNormalizer } from "@testing-library/dom";
import React, {useState, useEffect} from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import database from '../firebase';
import "./OrderCon.css";

const Email = "joannefung120@gmail.com"; //should be authenticated by logged-in user dummy user fir now

function OrderBlock(order) {
    const img = order.image;
    const description = order.description;
    const qty = order.qty;
    const avail = order.avail;
    const price = order.price;
    const date = order.date;
    const id = order.date;
    const addy = order.date;
    const pay_plan = order.date;
    const complete = order.datel;

    return (
    <div>
      <p class="purchase-date"> Purchased on {date} </p>
      <div class="rectangle"/>
      <div class="qty"> {qty}</div>
      <div class="status"> {complete}</div>
      <div class="img">{img}</div>
      <div class="description">{description}</div>
      <div class="qty">{qty}</div>
      <div class="avail">{avail}</div>
      <div class="price">{price}</div>
      <div class="order-details">
                <p class="ID"> {id} </p>
                <p class="total"> Total</p>
                <p class="price">{price}</p>
                <div class="detail-btn">
                    <Link to={{ pathname: "/orders/order-details", state: {
                                                                        id: id,
                                                                        addy: addy,
                                                                        complete: complete,
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
//
export default function OrderCon() {
    const [orderList, setOrderList] = useState([]);
    const orders = database.firestore().collection(`/users/${Email}/orders`).where('complete', '==', true).get().then(
    (querySnapshot => (
        setOrderList(querySnapshot.docs)
        //do css for the page
        //FINITIO
    )));
    return(
        <section>
            <div class="right_button">
                <Link to="/orders/cart">View Cart</Link>
            </div>
            <p class="top-left">Ready To Checkout?</p>
            <div>
                {orderList.length > 0 ? (
                    <div class="order-tower">
                        {orderList.map((order) => (
                            <OrderBlock order={order.data()}/>
                        ))}
                    </div>
                    ):(
                    <div>
                        <p class="none">Unfourtunately, your cart is empty. Please make a selection on the homepage first!</p>
                    </div>
                )} 
            </div>
        </section>
    )
};