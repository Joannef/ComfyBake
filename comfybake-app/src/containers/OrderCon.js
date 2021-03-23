import { getDefaultNormalizer } from "@testing-library/dom";
import React, {useState, useEffect} from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import database from '../firebase';
import "./OrderCon.css";
//import BorderWrapper from 'react-border-wrapper'
//import 'bootstrap/dist/css/bootstrap.min.css';

const db = database.firestore();
const Email = "1231231asdad@gmail.com" //should be authenticated by logged-in user dummy user fir now

export default function OrderCon() {
    const [items,setItems]=useState([])
    const fetchItems = async()=>{
        const response = db.collection(Email).doc('Orders');
        const data = await response.get();
        setItems(data.docs);
    }
    useEffect(() => {
        fetchItems();
    }, [])
    return(
        <section>
            <h class="checkout">Ready To Checkout?</h>
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