import React, { useState } from 'react'
import Card from 'react-bootstrap/Card'
import 'bootstrap/dist/css/bootstrap.min.css';

function LoadCards(props) {
    const [titles] = useState(props.title)    
    const [imageURL] = useState(props.imageURL)
    const [body] = useState(props.body)
    const [price] = useState('$' + props.price)
    const [ingredients] = useState(props.ingredients)
    const [sellerID] = useState(props.SellerID)
    
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
                <button>Add to Cart</button>
                <button>{sellerID}</button>
                <br></br>
                <small className="text-muted"> Contains: {ingredients}</small>
                
            </Card.Footer>
        </Card>
    );

}

export default LoadCards