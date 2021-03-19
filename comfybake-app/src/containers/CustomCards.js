import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import 'bootstrap/dist/css/bootstrap.min.css';
import database from '../firebase';

function CustomCards(props) {
    //{title, imageURL, body, price, ingredients}

    const [titles, setTitles] = useState(props.title)
    const [titleValue, setTitleValue] = useState("Sample Title")
    
    const [imageURL, setImage] = useState(props.imageURL)
    const [imageURLValue, setimageURLValue] = useState("http://localhost:3000/static/media/portuguese-egg-custard-tarts.1c7f0846.jpg")
    
    const [body, setBody] = useState(props.body)
    const [bodyValue, setBodyValue] = useState("Sample Body")
    
    const [price, setPrice] = useState(props.price)
    const [priceValue, setPriceValue] = useState("Sample Price")
    
    const [ingredients, setIngredients] = useState(props.ingredients)
    const [ingredientsValue, setIngredientsValue] = useState("Sample Ingredients")

    const [showInput, setInputState] = useState(true)

    const db = database.firestore();
    const storage = database.storage();
    const id = "user3@gmail.com";
    const FoodCollection = db.collection("FoodCollection");

    function save () {

        //save data to firebase
        FoodCollection.doc(id).collection("food").doc(titleValue).set({
            Foodname: titleValue,
            Body: bodyValue,
            Price: priceValue,
            Ingredients: ingredientsValue,
        }).then(()=>{
            console.log("Information have been sent")
        }).catch((err)=>{
            alert(err.message);
        });

        setTitles(titleValue)
        setImage(imageURLValue)
        setBody(bodyValue)
        setPrice(priceValue)
        setIngredients(ingredientsValue)

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

    function updateImageURLValue (event) {
        setimageURLValue(event.target.value)
        console.log(imageURLValue)
    }

    function updateBodyValue (event) {
        setBodyValue(event.target.value)
    }

    function updatePriceValue (event) {
        setPriceValue(event.target.value)
    }

    function updateIngredientsValue (event) {
        setIngredientsValue(event.target.value)
    }

    function deleteCard () {
        //create a function that can delete card chosen card from {cards}
        return
    }



    if(showInput) {
        return (
            <Card>
                <input onChange={updateTitleValue} placeholder="Edit Title"></input>
                <input onChange={updateImageURLValue} placeholder="Edit Image"></input>
                <input onChange={updateBodyValue} placeholder="Edit Body"></input>
                <input onChange={updatePriceValue} placeholder="Edit Price"></input>
                <input onChange={updateIngredientsValue} placeholder="Edit Ingredients"></input>
                <button onClick={save}>Save</button>
                <button onClick={cancel}>Cancel</button>
                <button onClick={deleteCard}>Delete</button>
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