import React, { useState } from 'react'
import Card from 'react-bootstrap/Card'
import 'bootstrap/dist/css/bootstrap.min.css';
import database from '../firebase';
import { addToCart } from './Cart'

function LoadCards(props) {
    const [titles] = useState(props.title)    
    const [imageURL] = useState(props.imageURL)
    const [body] = useState(props.body)
    const [price] = useState('$' + props.price)
    const [ingredients] = useState(props.ingredients)
    const [sellerID] = useState(props.sellerID)
    const [accountID] = useState(props.accountID)
    const [quantity] = useState(props.quantity)

    //const [total] = useState (props.price * quantity)

    const jump=()=>{
        //database.firestore().collection("users").doc("user2@gmail.com").update({
        database.firestore().collection("users").doc(accountID).update({
            jump: true,
            sellerID: sellerID
        })
    }


    const handleClick =() =>{
        const ref = database.firestore().collection("users").doc(accountID).collection('Cart').doc()
        ref.set({
            name: titles,
            price: price,
            image: imageURL,
            quantity: quantity,
            checkout: false,
            seller: sellerID,
            body: body,
            id: accountID,
            quantity: 1,
            total: price,
        })
        .then(() => {
            console.log("Document successfully written!");
        })
        .catch((error) => {
            console.error("Error writing document: ", error);
        });

        var num=0
        database.firestore().collection("users").doc(accountID).onSnapshot((doc) =>{
            num = doc.data().shoppingcart
        })
        setTimeout(() => {
            //update 
            num += 1
            database.firestore().collection("users").doc(accountID).update({
                "shoppingcart": num
            })
        }, 100);
    }

    return (
        <Card>
            <Card.Img variant="top" src = {imageURL} />
            
            <Card.Body>
            
                <Card.Title>{titles}</Card.Title>
                <Card.Text>
                    {body}
                </Card.Text>
            
            </Card.Body>

            <Card.Footer>

                <p>{price}</p>
                <p>accountID:{accountID}</p>
                <p>sellerID:{sellerID}</p>
                <button onClick={handleClick}>Add to cart</button>
                <button onClick={jump}>Store</button>
                <br></br>
                <small className="text-muted"> Contains: {ingredients}</small>
                <br></br>
                <small className="text-muted"> Quantity: {quantity}</small>
            </Card.Footer>
        </Card>
    );

}

export default LoadCards