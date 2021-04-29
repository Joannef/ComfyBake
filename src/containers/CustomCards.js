import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import 'bootstrap/dist/css/bootstrap.min.css';
import database from '../firebase';
import { getDefaultNormalizer } from '@testing-library/dom';

function CustomCards(props) {
    //{title, imageURL, body, price, ingredients}
    //change
    const [titles, setTitles] = useState(props.title)
    const [titleValue, setTitleValue] = useState("Sample Title")
    
    const [imageURL, setImageURL] = useState(props.imageURL)
    
    const [body, setBody] = useState(props.body)
    const [bodyValue, setBodyValue] = useState("Sample Body")
    
    const [price, setPrice] = useState('$' + props.price)
    const [priceValue, setPriceValue] = useState("Sample Price")
    
    const [ingredients, setIngredients] = useState(props.ingredients)
    const [ingredientsValue, setIngredientsValue] = useState("Sample Ingredients")

    const [showInput, setInputState] = useState(false)

    const [ID, setID] = useState(props.ID)

    const [image, setImage] = useState(null);
    const storage = database.storage();
    const id = ID; //later: id = props.id
    const FoodCollection = database.firestore().collection("FoodCollection");
    const db = database.firestore();


    function save(event) {
        event.preventDefault();
        //upload image to firebase
        const uploadTask = storage.ref(id+"/"+ image.name).put(image);
        var imageURL_ = "";
        //read image_url from firebase
        uploadTask.on(
            "state_changed",
            snapshot =>{},
            error=>{
                alert(error);
            },
            ()=>{
                storage.ref(id).child(image.name).getDownloadURL()
                .then(url=>{
                    //setImageURL(url);
                    imageURL_ = url;
                    //alert(url);
                    //alert(imageURL);
                    //alert(imageURL_);
                })
            }
        )
        
        
        setTimeout(() => {
            //alert(imageURL_); 
            FoodCollection.doc(id).collection("food").doc(titleValue).set({
                Foodname: titleValue,
                ImageUrl: imageURL_,
                Body: bodyValue,
                Price: priceValue,
                Ingredients: ingredientsValue,
                SellerID: id
            }).then(()=>{
                console.log("Information have been sent");
                //alert("Information have been sent");
            }).catch((err)=>{
                alert(err.message);
            });   

            setTitles(titleValue)
            //setImage(imageURLValue)
            //alert(imageURL_);
            setImageURL(imageURL_)
            setBody(bodyValue)
            setPrice("$ "+priceValue)
            setIngredients(ingredientsValue)

            setInputState(false)
        }, 2000);

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

    function updateImageURLValue (event){
        event.preventDefault();
        if (event.target.files[0]){
            setImage(event.target.files[0]);
        }
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
        db.collection("FoodCollection").doc(id).collection("food").doc(titles).delete();
        alert("Refresh to complete Delete")
    }

    if(showInput) {
        return (
            <Card>
                <input onChange={updateTitleValue} placeholder="Edit Title"></input>
                <input type="file" onChange={updateImageURLValue} placeholder="Edit Image"></input>
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
                            <small className="text-muted"> Contains: {ingredients} </small>

                            <br></br>
                            <button onClick = {edit}>Edit</button>
                            

                        </Card.Footer> 
                    
                </Card> 

        );
    }

}

export default CustomCards