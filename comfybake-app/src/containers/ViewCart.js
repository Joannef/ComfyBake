import React, {useState} from "react";
import database from '../firebase';
import Nav from "react-bootstrap/Nav";
import { LinkContainer } from "react-router-bootstrap";
import BorderWrapper from 'react-border-wrapper'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./ViewCart.css";

const db = database.firestore();
const userCollection = db.collection("users");

export default function ViewCart() {
    return (
        <div className="ViewCart text-center">
          <h3>A cart or something</h3>
        </div>
    );
}