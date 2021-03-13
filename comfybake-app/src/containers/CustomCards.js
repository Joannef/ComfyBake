import React from 'react'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import 'bootstrap/dist/css/bootstrap.min.css';

function CustomCards({title, imageURL, body, price, ingredients}) {
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
                        <small className="text-muted"> Contains: {ingredients}</small>
                        
                    </Card.Footer> 
                
            </Card> 

    );

}

export default CustomCards