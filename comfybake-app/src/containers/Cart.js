import React, { useState } from 'react';
import db from '../firebase'
import './C.css';
import Products from './product';


const PAGE_PRODUCTS = 'products';
const PAGE_CART = 'cart'

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



    const renderCart = () => (
        <div>
            <button onClick={() => navigateTo(PAGE_PRODUCTS)}> Back to home </button>
            <h2 className="cart-title">This is your cart</h2>
            <div className="products">
                {cart.map((product, index) => (
                <div className="product" key={index}>
                <img src={product.image}/>
                    <h3>{product.name}</h3>
                    <h4>{product.cost}</h4>
                    <button onClick={() => removeFromCart(product)}> Remove </button>
                </div>
            ))}
            </div>
        </div>
    );

    return(
        <div className="cart">
        <header>
            <button onClick={() => navigateTo(PAGE_CART)}> Go to Cart ({cart.length})</button>
        </header>
        
        {page === PAGE_PRODUCTS && <Products addToCart={addToCart}/>}
        {page === PAGE_CART && renderCart()}
        </div>
    )
};

export default Cart;