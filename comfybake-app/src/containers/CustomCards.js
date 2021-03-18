import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import 'bootstrap/dist/css/bootstrap.min.css';

function CustomCards(props) {
    //{title, imageURL, body, price, ingredients}

    const [titles, setTitles] = useState(props.title)
    const [titleValue, setTitleValue] = useState("")
    
    const [imageURL, setImage] = useState(props.imageURL)
    const [imageURLValue] = useState("")
    
    const [body, setBody] = useState(props.body)
    const [bodyValue] = useState("")
    
    const [price, setPrice] = useState(props.price)
    const [priceValue] = useState("")
    
    const [ingredients, setIngredients] = useState(props.ingredients)
    const [ingredientsValue] = useState("")

    const [showInput, setInputState] = useState(true)


    function save () {
        setTitles(titleValue)
        setInputState(false)
    }

    function edit () {
        setInputState(true)
    }

    function cancel () {
        setInputState(false)
    }

    function updateTitleValue (event) {
        setTitleValue(event.target.value)
        console.log(titleValue)
    }

    if(showInput) {
        return (
            <Card>
                <input onChange={updateTitleValue} placeholder="Edit Title"></input>
                <button onClick={save}>Save</button>
                <button onClick={cancel}>Cancel</button>
            </Card>
        );
    } else {
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
                            <br></br>
                            <small className="text-muted"> Contains: {ingredients}</small>

                            <br></br>
                            <button onClick = {edit}>Edit</button>

                        </Card.Footer> 
                    
                </Card> 

        );
    }

}

export default CustomCards