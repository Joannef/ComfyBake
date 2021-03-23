import React, {useState} from "react";
import database from '../firebase';
import BorderWrapper from 'react-border-wrapper'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./OrderCon.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./ViewCart";

//const db = database.firestore();
//const userCollection = db.collection("users");
//const [orderArray, setOrderArray] = useState(false);
const fakeURL1 = "";
const fakeURL2 = "";
const fakeURL3 = "";

export default function OrderCon() {
    var orderArray = [fakeURL1, fakeURL2, fakeURL3]; //somehow creates an array of the picture url data for a users cart
    return(
        <section>
            <h1 className="checkout">Ready To Checkout?</h1>
            <div className="right_button">
                <Link to="/orders/cart">View Cart</Link>
            </div>
            
        </section>
    )
};