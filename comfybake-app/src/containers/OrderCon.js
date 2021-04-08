import { getDefaultNormalizer, queryByTestId } from "@testing-library/dom";
import React, {useState, useEffect} from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import database from '../firebase';
import "./OrderCon.css";

const Email = "joannefung120@gmail.com"; //should be authenticated by logged-in user dummy user fir now

function OrderBlock(xqty,ximg,xdes,xavail,xprice,xdate,xID,xaddy) {
    let qty = xqty
    let avail = xavail
    let price = xprice
    let date = xdate
    let ID = xID
    let addy = xaddy
    let img = ximg
    let des = xdes;
    return (
    <div>
      <p class="purchase-date"> Purchased on {date} </p>
      {/*<div class="rectangle"/>*/}
      <div class="qty"> {qty}</div>
      <div class="status"> Complete</div>
      {/* I have to make a function to display the images correctly
      <div class="img">{img}</div>
      */}
      {/* I have to make a function to display the images correctly
      <div class="description">{description}</div>*/}
      <div class="qty">{qty}</div>
      <div class="avail">{avail}</div>
      <div class="price">{price}</div>
      <div class="order-details">
                <p class="ID"> {ID} </p>
                <p class="total"> Total</p>
                <p class="price">{price}</p>
                <div class="detail-btn">
                    <Link to={{ pathname: "/orders/order-details", state: {
                                                                        id: ID,
                                                                        addy: addy,
                                                                        complete: "True",
                                                                        plan: "how do you intend to pay",
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
    const [orderList, setOrderList] = useState([]);
    const [orderQty, setOrderQty] = useState([]);
    const [orderImg, setImgList] = useState([]);
    const [orderD, setDList] = useState([]);
    const [orderAvail, setAvailList] = useState([]);
    const [orderPrice, setOrderPrice] = useState([]);
    const [orderDate, setOrderDate] = useState([]);
    const [orderID, setOrderID] = useState([]);
    const [orderAddy, setOrderAddy] = useState([]);
    const orders = database.firestore().collection(`/users/${Email}/orders`).where('complete', '==', true).get().then(
    (querySnapshot => {
        setOrderQty(querySnapshot.docs.map(doc=> doc.get("qty")))
        setAvailList(querySnapshot.docs.map(doc=> doc.get("avail")))
        setOrderPrice(querySnapshot.docs.map(doc=> doc.get("qty")))
        setOrderID(querySnapshot.docs.map(doc=> doc.id))
        setOrderDate(querySnapshot.docs.map(doc=> doc.get("date")))
        //setImgList(querySnapshot.docs.map(doc=>doc.get("img"))).map(doc=>orderImg.concat(doc))
        //setDList(querySnapshot.docs.map(doc=>doc.get("description"))).map(doc=>orderD.concat(doc))
        setOrderAddy(querySnapshot.docs.map(doc=> doc.get("addy")))
        setOrderList(querySnapshot.docs.map(doc=> doc.data()))
        //do css for the page
        //FINITIO
    }));
    return(
        <section>
            <div class="right_button">
                <Link to="/orders/cart">View Cart</Link>
                <p className="top-left">Ready To Checkout?</p>
                <div>
                {orderList.length > 0 ? (
                    <div class="order-tower">
                        {orderList.forEach((o) => 
                            <OrderBlock o={{xqty:`${orderQty}`, ximg:`${orderImg}`, xdes:`${orderD}`, 
                                            xavail:`${orderAvail}`, xprice:`${orderPrice}`, 
                                            xdate:`${orderDate}`, xID:`${orderID}`, xaddy:`${orderAddy}`}}
                            />
                        )}
                    </div>
                    ):(
                    <div>
                        <p class="none">Unfourtunately, your cart is empty. Please make a selection on the homepage first!</p>
                    </div>
                )}
                </div>
            </div>
        </section>
    )
};