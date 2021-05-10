import React, {useState, useEffect} from "react";
import testUtils from "react-dom/test-utils";
import database from '../firebase';
import firebase from '../firebase'
import './Cart.css';
import Home from "./Home";
import SellerPage from './SellersPage'; 

const db = database.firestore();
const storage = database.storage();
const user = "mohammad@gmail";
const userName = "Moh"

class Show_cart extends React.Component{
    //state array
    state = {
        arr: null,
        count: 0,
        home: false,
        jump: false,
    }
    //---------------- this function brings all the data from firestore -------------------//
    componentDidMount(){
        db.collection("users").doc(this.props.AccountID).collection('Cart').get().then(snapShot =>{
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
        
        db.collection("users").doc(this.props.AccountID).collection('Cart').doc(arr.id).delete().then(() => {
            //console.log("Document successfully deleted!");
            alert("successfully deleted!")
        }).catch((error) => {
            console.error("Error removing document: ", error);
        }); 

        var num=0
        database.firestore().collection("users").doc(this.props.AccountID).onSnapshot((doc) =>{
            num = doc.data().shoppingcart
        })
        setTimeout(() => {
            //update 
            num -= 1
            database.firestore().collection("users").doc(this.props.AccountID).update({
                "shoppingcart": num
            })
        }, 10);

    }
    
    increment = (arr) => {

        var maxquantity=0
        db.collection("FoodCollection").doc(arr.seller).collection('food').doc(arr.name).onSnapshot((doc) =>{
            maxquantity = doc.data().Quantity
        })

        setTimeout(() => {
            const ref = db.collection("users").doc(this.props.AccountID).collection('Cart').doc(arr.id)
            if (arr.quantity == maxquantity) {
                alert("Maximum quantity")
            } else {
                arr.quantity = arr.quantity + 1;
                ref.update({"quantity": arr.quantity})
                ref.update({"total": (arr.price * arr.quantity)})
            }
            }, 10);
    }

    decrement = (arr) => {
        const ref = db.collection("users").doc(this.props.AccountID).collection('Cart').doc(arr.id)

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
        
        db.collection("users").doc(this.props.AccountID).collection("Cart").get().then(querySnapshot =>{
            const data = querySnapshot.docs.map(doc=> doc.data());
            //alert (data.length)
            var maxquantity = new Array();
            var quantity =  new Array();
            var seller =  new Array();
            var name =  new Array();

            for (var i=0; i< data.length; i++){
                //new collection for successful  orders 
                const ref = db.collection("users").doc(this.props.AccountID).collection('orders').doc()
                            ref.set({
                                name: this.props.AccountID,
                                order_Date: new Date(),
                                checkout: true,
                                image: data[i].image,
                                descriptions: data[i].body,
                                price: data[i].price,
                                qty: data[i].quantity,
                                total: data[i].total,
                            })
                
                //delete the items from the shopping cart 
                db.collection("users").doc(this.props.AccountID).collection('Cart').doc(data[i].id).delete().then(() => {
                                console.log("Document successfully checked out!");
                            }).catch((error) => {
                                console.error("Error checking out ", error);
                            }); 
                
                //save data for  update the quantity to the seller store
                quantity.push(data[i].quantity)
                seller.push(data[i].seller)
                name.push(data[i].name)
                
                db.collection("FoodCollection").doc(data[i].seller).collection('food').doc(data[i].name).onSnapshot((doc) =>{
                    var maxquantity_ = doc.data().Quantity
                    maxquantity.push(maxquantity_)
                })
            }
            //update the quantity to the seller store
            setTimeout(() => {
                //update 
                for (var j=0; j<seller.length; j++){
                    quantity[j] = maxquantity[j] - quantity[j]
                    db.collection("FoodCollection").doc(seller[j]).collection('food').doc(name[j]).update({
                        "Quantity": quantity[j]
                    })
                }
            }, 1000);

            
            var num=0
            database.firestore().collection("users").doc(this.props.AccountID).onSnapshot((doc) =>{
                num = doc.data().shoppingcart
            })
            setTimeout(() => {
                //update 
                num -= data.length
                database.firestore().collection("users").doc(this.props.AccountID).update({
                    "shoppingcart": num
                })
            }, 2000);
        })
    }
    
    handlejump = () =>{
        if (this.props.state_ == "home"){
            this.setState(state => ({
                home: true
            }))
        }
        this.setState(state => ({
            jump: true
        }))

    } 

    render(){
    
        return(
            <div>
            {this.state.jump? (
                <div>
                {this.state.home? (
                    <>
                    <Home 
                        AccountID = {this.props.AccountID}
                    />
                    </>
                ):(
                    <>
                    <SellerPage
                        AccountID = {this.props.AccountID}
                        SellerID = {this.props.SellerID}
                    />
                    </>
                )}
                </div>
                
            ):(
                <>
                <br/>
                <button onClick={()=>{this.handlejump()}}>Back</button><br/><br/><br/>
                <div className="displayCart">
                {
                    //if data exists then print each data from the array
                    this.state.arr &&
                    this.state.arr.map( arr => {
                        if(arr.checkout == false){
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
                        
                        } // if state 
                    })
                }
                <button 
                    className="checkout"
                    onClick={this.handleCheckout}>Checkout
                </button>
                <br/><br/> 
                </div>
                
                </>
            )}
            </div>
        )
    }
}
export default Show_cart;
