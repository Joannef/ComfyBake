import React, { useState, useEffect } from 'react';
import database from '../firebase';
import './C.css';
import Products from './product';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Display from './displayGrid';

const PAGE_PRODUCTS = 'products';

const db = database.firestore();
const storage = database.storage();

const PAGE_CART = 'cart'
const senderEmail = "cbakeTeam@gmail.com"
const templateId = "template_j303hv9"
const Email = "franciscor343@gmail.com"
const FirstName = "franciscor343@gmail.com"
const LastName = "franciscor343@gmail.com"



function Cart(){
    const [cart, setCart] = useState([]);
    const [page, setPage] = useState ('products');



    const addToCart = (product) => {
        setCart([...cart, {...product}]);
    };

    const navigateTo = (nextPage) => {
        setPage(nextPage);
    };

    const removeFromCart = (productToRemove) => {
        setCart(cart.filter((product) => product !== productToRemove))
    }

    const handleSumbit = (e) =>{
        sendFeedback({
            templateId,
            senderEmail,
            receiverEmail:Email,
            FirstName,
            LastName,
          })
        e.preventDefault();
        //here we should probably change the status of the order so that the cart empties
        // and all of the information goes from the cart to the order history page
    }
    const sendFeedback = ({
        templateId,
        senderEmail,
        receiverEmail,
        FirstName,
        LastName,
      }) => {
        window.emailjs
          .send(
            "default_service",
            templateId,
            {
              senderEmail,
              receiverEmail,
              FirstName,
              LastName,
            },
          )
          .then(res => {
            if (res.status === 200) {
              //setFormSubmitSuccessful(true)
            }
          })
          // Handle errors here however you like
          .catch(err => console.error("Failed to send feedback. Error: ", err))
      }


// render everything that has been added to the cart
    const renderCart = () => (
        <div className='back_home_btn'>
            <button onClick={() => navigateTo(PAGE_PRODUCTS)}> Back to home </button>
            
            <h2 className="cart-title">This is your cart</h2>
            <div className="products">
                {cart.map((product) => (
                <div className="product" >
                    
                    <img src={product.ImageUrl}/>
                    <h3>{product.Foodname}</h3>
                    <h4>${product.Price}</h4>
                    
                    <button onClick={() => removeFromCart(product)}> Remove </button>
                
                </div>
            ))}
            </div>
            <br/> <br/> <br/>
            <button className="checkoutBtn" onclick={handleSumbit}>Checkout</button>
        </div>
    );

    return(
        <div className="cart">
        {/* <Link onClick={() => navigateTo(PAGE_CART)} className="cart-link" to="/orders/cart">View Cart 🛒 ({cart.length})</Link> */}
        <br/><br/><br/><br/>
        <header>
            {/* <button onClick={() => navigateTo(PAGE_CART)}>Cart holder ({cart.length})</button> */}
            <Link onClick={() => navigateTo(PAGE_CART)} className="cart-link" to="/orders/cart">View Cart 🛒 ({cart.length})</Link>
            {/* <button onClick={() => navigateTo(PAGE_CART)}> Go to Cart ({cart.length})</button> */}
            <br/><br/><br/><br/>
        </header>
        {/* {page === PAGE_PRODUCTS && <Products addToCart={addToCart}/>} */}
        {page === PAGE_PRODUCTS && <Display addToCart={addToCart}/>}
        {page === PAGE_CART && renderCart()}
        
        </div>
    )
};

export default Cart;
