import { getDefaultNormalizer, queryByTestId } from "@testing-library/dom";
import React, {useState, useEffect} from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import database from '../firebase';
import "./OrderCon.css";
import Home from './Home';

//const Email = "user2@gmail.com"; //should be authenticated by logged-in user dummy user fir now

export default function OrderCon(props) {
    const {AccountID} = props;
    const [orderID, setOrderID] = useState([]);
    const [orderImg, setImgList] = useState([]);
    const [orderQty, setOrderQty] = useState([]);
    const [orderDate, setDateList] = useState([]);
    const [orderD, setDList] = useState([]);
    const [orderPrice, setPriceList] = useState([]);
    const [jumpback, setjumpback] = useState(false);
    React.useEffect(() => {
    const orders = database.firestore().collection(`/users/${AccountID}/orders`).get().then(
        //const orders = database.firestore().collection(`/users/${Email}/orders`).get().then(
    (querySnapshot => {
        setOrderID(querySnapshot.docs.map(doc=> doc.id))
        setImgList(querySnapshot.docs.map(doc=>doc.get("image")))
        setOrderQty(querySnapshot.docs.map(doc=>doc.get("qty")))
        //setDateList(querySnapshot.docs.map(doc=> doc.get("order_Date")))
        setDList(querySnapshot.docs.map(doc=>doc.get("descriptions")))
        setPriceList(querySnapshot.docs.map(doc=>doc.get("price")))
    }));
}, [])

    function OrderBlock(props) {
        return (
            <div class="item-tower">
                <p class="right">Total: {props.xprice*props.xqty}</p>
                <p class="left-bold"> Order #: {props.xID}</p>
                <div class="item">
                    <img class="left" src= {props.ximg}/>
                    <p class="left"> {props.xdes} </p>
                    <p class="right"> Purchased on {props.xdate} </p>
                    <p class="right"> Quantity: {props.xqty}</p>
                    <p class="right">Price: {props.xprice}</p>
                </div>
        </div>
            
        );
    }

    const handleJumpback =() =>{
        setjumpback(true);
    }

    return(
        <div>
        {jumpback? (
            <>
            <Home 
                AccountID = {AccountID}
            />
            </>
        ):(
           <>
            <section>
            <div class="order-page">
                <button onClick={handleJumpback}> Home</button>
                <p class="check-out">Order History</p>
                {orderID.length > 0 ? (
                    <div class="order-tower">
                        {orderID.map((id,index) => (
                            <OrderBlock    xqty={orderQty[index]}   xID={orderID[index]}
                                           xdate={orderDate[index]} xprice={orderPrice[index]} 
                                           xdes={orderD[index]}     ximg={orderImg[index]}/>
                        ))}

                    </div>
                ):(
                    <div>
                        <p class="none">Unfourtunately, you have no order history. Please make a selection add an item to your cart and select the checkout option</p>
                    </div>
                )}
            </div>
            </section>
           </> 
        )} 
        </div>
    )
};
