import React, { Component } from 'react';
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import 'bootstrap/dist/css/bootstrap.min.css';

//Not currently using because I don't know how to pass in parameters like in the JS file

class CustomCard extends Component {

    constructor(props) {
        super(props);
    }
    
    render() {     
        return ( 
            
            <Card>
                <Card.Img variant="top" src = "" />
                
                <Card.Body>
                
                    <Card.Title>Sample Title</Card.Title>
                    <Card.Text>
                        Sample baked good description
                    </Card.Text>
                
                </Card.Body>

                <Card.Footer>

                    <p>Sample Price</p>
                    <small className="text-muted"> Contains: Sample Ingredients</small>
                    
                </Card.Footer> 
            
            </Card> 
        );
    }
}

export default CustomCard;