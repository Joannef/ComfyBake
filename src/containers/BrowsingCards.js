import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import database from '../firebase';

function BrowsingCards(props) {

    //no edit state function, don't want to change data here
    const [title] = useState(props.title)
    const [imageURL] = useState(props.imageURL)
    const [body] = useState(props.body)
    const [price] = useState(props.price)
    const [ingredients] = useState(props.ingredients)

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
                        <button>Add to Cart</button>
                        <br></br>
                        <small className="text-muted"> Contains: {ingredients} </small>

                    </Card.Footer> 

            </Card>
    );
}

export default BrowsingCards