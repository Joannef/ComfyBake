import { getDefaultNormalizer } from "@testing-library/dom";
import React, {useState, useEffect} from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import database from '../firebase';
import "./OrderCon.css";

const Email = "1231231asdad@gmail.com"; //should be authenticated by logged-in user dummy user fir now

function OrderBlock(props) {
    /*const img = props.val().img;
    const description = props.val().description;
    const qty = props.val().qty;
    const avail = props.val().avail;
    const price = props.val().price;
    const date = props.val().date;
    const id = props.val().id;
    const addy = props.val().addy;
    const pay_plan = props.val().pay_plan;
    const status = props.val().status;*/
    //dummy values for the time being
    const img = "evr"
    const description = "eqr"
    const qty = "eqr"
    const avail = "eqr"
    const price = "eqr"
    const date = "eqr"
    const id = "eqr"
    const addy = "eqr"
    const pay_plan = "eqr"
    const status = "eqr"

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
//
export default function OrderCon() {
    const [orderList, setOrderList] = useState([]);
    const orders = database.firestore().collection("users").get().then(//.doc(`${Email}`).collection("Orders").where('status', '==', 'complete');
    (querySnapshot => (
        setOrderList(querySnapshot.docs.map(doc=> doc.data()))
    )));

    return(
        <section>
            <div class="right_button">
                <Link to="/orders/cart">View Cart</Link>
            </div>
            <h class="top-left">Ready To Checkout?</h>
            <div>
                {orderList.length > 0 ? (
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