import React, { useState, useEffect } from 'react'
import './C.css';
import db from "../firebase"
import Display from "./displayGrid";
//import App from './consume';




const Product = ({ addToCart }) => {
    const [products] = useState([
        {
            name: "cookies",
            cost: '$2.99',
            image: "https://www.tasteofhome.com/wp-content/uploads/2018/02/Gluten-Free-Peanut-Butter-Kiss-Cookies_exps46220_CW143039D09_11__14b_RMS-1.jpg"
    
        },
        {
            name: "Cake",
            cost: '$12.99',
            image: "https://dominosugar.com/emshare/views/modules/asset/downloads/originals/2020/09/74014/MuffinsTipsShippingBakedGoods.jpg/MuffinsTipsShippingBakedGoods.jpg"
        },
        

    ]);



    return (
        <div>
            {/* <h1>Product</h1> */}
            {/* <Display/> */}
            <div className="products">
                {products.map((product, index) => (
                <div className="product" key={index}>
                    <img src={product.image}/>
                    <h3>{product.name}</h3>
                    <h4>{product.cost}</h4>
                    <button onClick={() => addToCart(product)}> Add to cart</button>
                    <br/>
                </div>
            ))}
            </div>
        </div>
    )
}

export default Product