import React, {useState, useEffect} from "react";
import database from '../firebase';
import firebase from '../firebase';
import './Cart.css';
import { addToCart } from './Cart'
import {account} from './Login'
import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from "react-dom";
import Show_cart from "./displayCart";

const db = database.firestore();
const storage = database.storage();
const user = "mohammad@gmail";
const realtimeDB = firebase.database();


class Display extends React.Component{
    //state array
    state = {
        arr: null,
    }

    //---------------- this function brings all the data from firestore -------------------//
    componentDidMount(){
        db.collectionGroup('food')
            .get()
            .then( snapShot => {
                //array to store single item
                const arr = []
                //takes a data and pushes it into the array
                snapShot.forEach( doc => {
                    const data = doc.data()
                    arr.push(data)
                })
                //makes an array of all the item and saves it in the state, null array above
                this.setState({arr: arr})
                
            })
            .catch(error => console.log(error))
    }
    //-------------------------collecting data from firestore ----------------------------//
    

    handleClick =(arr) =>{
        this.props.addToCart(arr);
        // const ref = db.collection("users").doc(user).collection('Cart').doc();
        const ref = db.collection("users").doc(user).collection('Cart').doc()
        var myID = ref.id;
        ref.set({
            name: arr.Foodname,
            price: arr.Price,
            image: arr.ImageUrl,
            quantity: 1,
            max_Qty: arr.Quantity,
            checkout: false,
            seller: arr.SellerID,
            body: arr.Body,
            id: myID,
            total: arr.Price,
        })
        .then(() => {
            console.log("Document successfully written!");
        })
        .catch((error) => {
            console.error("Error writing document: ", error);
        });
        

    }
    
 

    render(){
    
        return(
            <div className='item'>
                <h1> home </h1>
                {
                    //if data exists then print each data from the array
                    this.state.arr &&
                    this.state.arr.map( arr => {
                        return(
                            <div className="img-wrap">
                                <img src={arr.ImageUrl } alt={arr.Foodname}/>
                                <p>{arr.Foodname}</p>
                                <p>{arr.Qty}</p>
                                <p>${arr.Price}</p>
                                <button onClick={()=>{ this.handleClick(arr)} }>Add to cart</button>
                            </div>
                        )
                    })
                }
                <br/><br/> 
            </div>
        )
    }
}
export default Display;

