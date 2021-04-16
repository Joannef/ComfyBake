import { getDefaultNormalizer, queryByTestId } from "@testing-library/dom";
import React, {useState, useEffect} from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import database from '../firebase';
import "./OrderCon.css";

const Email = "joannefung120@gmail.com"; //should be authenticated by logged-in user dummy user fir now

export default function OrderCon() {
    const [orderQty, setOrderQty] = useState([]);
    const [orderImg, setImgList] = useState([]);
    const [orderD, setDList] = useState([]);
    const [orderPrice, setOrderPrice] = useState([]);
    const [orderDate, setOrderDate] = useState([]);
    const [orderID, setOrderID] = useState([]);
    const [orderAddy, setOrderAddy] = useState([]);
    const orders = database.firestore().collection(`/users/${Email}/orders`).where('complete', '==', true).get().then(
    (querySnapshot => {
        setOrderQty(querySnapshot.docs.map(doc=> doc.get("qty")))
        setOrderPrice(querySnapshot.docs.map(doc=> doc.get("price")))
        setOrderID(querySnapshot.docs.map(doc=> doc.id))
        setOrderDate(querySnapshot.docs.map(doc=> doc.get("date")))
        //setImgList(querySnapshot.docs.map(doc=>doc.get("img"))).map(doc=>orderImg.concat(doc))
        //setDList(querySnapshot.docs.map(doc=>doc.get("description"))).map(doc=>orderD.concat(doc))
        setOrderAddy(querySnapshot.docs.map(doc=> doc.get("addy")))
        //do css for the page
        //FINITIO
    }));

    function OrderBlock(props) {
        let qty = props.xqty;
        let price = props.xprice;
        let date = props.xdate;
        let ID = props.xID;
        let addy = props.xaddy;
        let img = props.ximg;
        let des = props.xdes;
        return (
        <div class="order">
            <p class="text"> Purchased on {date} </p>
            <p class="text"> Quantity: {qty}</p>
            <p class="text"> Order Status: Completed</p>
            {/* I have to make a function to display the images correctly
            <div class="img">{img}</div>
            */}
            {/* I have to make a function to display the images correctly
            <div class="description">{description}</div>*/}
            <p class="text">Price: {price}</p>
            <div class="order-details">
                        <p class="text"> Order #: {ID} </p>
                        <p class="bold">Total: {price}</p>
                        <div class="detail-btn">
                           {/*} <Link to={{ pathname: "/orders/order-details", state: {
                                                                                id: ID,
                                                                                addy: addy,
                                                                                complete: "True",
                                                                                plan: "how do you intend to pay",
                                                                                price: price}
                                    }}> 
                                    See Order Details
                                </Link>*/}
                        </div>
                    </div>
        </div>
        );
      }
    
    return(
        <section>
            <div class="order-page">
                <Link class="cart-link" to="/orders/cart">View Cart</Link>
                <p class="check-out">Ready To Checkout?</p>
                <div class="feedback">
                    {orderQty.length != 0 ? (
                    <div class="order-tower">
                        {orderQty.map(o => {
                            return <OrderBlock  xqty={orderQty}   xID={orderID} xaddy={orderAddy} 
                                                xdate={orderDate} xprice={orderPrice} 
                                                xdes={orderD}     ximg={orderImg}/>
                        })}
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