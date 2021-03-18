import React, {useState} from "react";
import database from '../firebase';
import BorderWrapper from 'react-border-wrapper'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./OrderCon.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ViewCart from "./ViewCart";

const db = database.firestore();
const userCollection = db.collection("users");

export default function OrderCon() {
        return(
            <div className="OrderCon text-center">
                <Link to="/orders/cart">View Cart</Link>
            </div>
        )
};