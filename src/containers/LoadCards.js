import React, { useState } from 'react'
import Card from 'react-bootstrap/Card'
import 'bootstrap/dist/css/bootstrap.min.css';
import database from '../firebase';

function LoadCards(props) {
    const [titles] = useState(props.title)    
    const [imageURL] = useState(props.imageURL)
    const [body] = useState(props.body)
    const [price] = useState('$' + props.price)
    const [ingredients] = useState(props.ingredients)
    const [sellerID] = useState(props.sellerID)
    const [accountID] = useState(props.accountID)
    
    const jump=()=>{
        //database.firestore().collection("users").doc("user2@gmail.com").update({
        database.firestore().collection("users").doc(accountID).update({
            jump: true,
            sellerID: sellerID
        })
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
                <button>Add to Cart</button>
                <button onClick={jump}>Store</button>
                <br></br>
                <small className="text-muted"> Contains: {ingredients}</small>
                
            </Card.Footer>
        </Card>
    );

}

export default LoadCards