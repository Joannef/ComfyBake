import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import database from '../firebase';

function BrowsingCards(props) {

    //no edit state function, don't want to change data here
    const [title] = useState(props.title)
    const [imageURL] = useState(props.imageURL)
    const [body] = useState(props.body)
    const [price] = useState("$" + props.price)
    const [price_] = useState(props.price)
    const [ingredients] = useState(props.ingredients)
    const [quantity] = useState(props.quantity)
    const [sellerID] = useState(props.sellerID)
    const [accountID] = useState(props.accountID)

    const handleClick =() =>{
        const ref = database.firestore().collection("users").doc(accountID).collection('Cart').doc()
        ref.set({
            name: title,
            price: price_,
            image: imageURL,
            quantity: quantity,
            checkout: false,
            seller: sellerID,
            body: body,
            id: accountID,
            quantity: 1,
            total: price_,
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
                    
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                            {body}
                        </Card.Text>
                    
                    </Card.Body>

                    <Card.Footer>

                        <p>{price}</p>
                        <button onClick={handleClick}>Add to cart</button>
                        <br></br>
                        <small className="text-muted"> Contains: {ingredients} </small>
                        <br></br>
                        <small className="text-muted"> Quantity: {quantity}</small>
                    </Card.Footer> 

            </Card>
    );
}

export default BrowsingCards