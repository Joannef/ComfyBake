import React, {useState, useEffect} from "react";
import database from '../firebase';
import firebase from '../firebase'
import './Cart.css';

const db = database.firestore();
const storage = database.storage();
const user = "mohammad@gmail";
const userName = "Moh"


class Show_cart extends React.Component{
    //state array
    state = {
        arr: null,
        count: 0,
    }
    
    //---------------- this function brings all the data from firestore -------------------//
    componentDidMount(){
        db.collectionGroup('Cart').get().then( snapShot => {
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


    handleRemove =(arr) => {
        
        db.collection("users").doc(user).collection('Cart').doc(arr.id).delete().then(() => {

            console.log("Document successfully deleted!");
        }).catch((error) => {
            console.error("Error removing document: ", error);
        }); 

    }
    
    increment = (arr) => {
        const ref = db.collection("users").doc(user).collection('Cart').doc(arr.id)
        
        if (arr.quantity == arr.max_Qty) {
            alert("Maximum quantity")
        } else {
            arr.quantity = arr.quantity + 1;
            ref.update({"quantity": arr.quantity})
            ref.update({"total": (arr.price * arr.quantity)})
        }
    }
    decrement = (arr) => {
        const ref = db.collection("users").doc(user).collection('Cart').doc(arr.id)
        if (arr.quantity <= 1) {
            console.log("Stops when the quantity is 1")
        } 
        else {
            arr.quantity = arr.quantity - 1;
            ref.update({"quantity": arr.quantity})
            ref.update({"total": (arr.price * arr.quantity)})
        }

    }
    handleCheckout = (e) => {
        e.preventDefault();
        const ref = db.collection("users").doc(user).collection('Cart')
        
        ref.where("checkout", "==", false)
            .get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    const ref = db.collection("users").doc(user).collection('orders').doc()
                    ref.set({
                        name: userName,
                        order_Date: new Date(),
                        checkout: true,
                        order_number: ref.id,
                        image: doc.data().image,
                        descriptions: doc.data().body,
                        price: doc.data().price,
                        qty: doc.data().quantity,
                        total: doc.data().total,
                    })
                    db.collection("users").doc(user).collection('Cart').doc(doc.data().id).delete().then(() => {
                        console.log("Document successfully checked out!");
                    }).catch((error) => {
                        console.error("Error checking out ", error);
                    });
                });
            })
            .catch((error) => {
                console.log("Error getting documents: ", error);
            });

    }
 

    render(){
    
        return(
            <div className="displayCart">
                {
                    //if data exists then print each data from the array
                    this.state.arr &&
                    this.state.arr.map( arr => {
                        return(
                            <div>
                                <tbody id="tableProducts">
                                    <table className="table">
                                        <th><img src={arr.image}/></th>
                                        <h3>{arr.name}</h3>
                                        <p>{arr.body}</p>
                                        <p>${arr.price}</p>
                                        <p>
                                            <p>Quantity: {arr.quantity}</p>
                                        </p>
                                        <button onClick={()=>{ this.decrement(arr)}}> - </button>
                                            <label>
                                                Quantity
                                            </label>
                                        <button onClick={()=>{ this.increment(arr)}}> + </button>
                                        <p>Seller: {arr.seller}</p>
                                        <p>Total: ${arr.total}</p>
                                        <button onClick={()=>{ this.handleRemove(arr)}}>Remove</button> 
                                        <br/><br/>

                                        {/* <button onClick={()=>{ this.handleCheckout(arr)}}>Checkout</button> */}

                                        
                                    </table>
                                    
                                </tbody>
                            </div>
                        )
                        

                    })
                }
                <button 
                    className="checkout"
                    onClick={this.handleCheckout}>Checkout
                </button>
                <br/><br/> 
            </div>
        )
    }
}
export default Show_cart;
