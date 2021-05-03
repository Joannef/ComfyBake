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
    
    const [price, setPrice] = useState("$" + props.price)
    const [price_] = useState(props.price)
    const [priceValue, setPriceValue] = useState("Sample Price")
    
    const [ingredients, setIngredients] = useState(props.ingredients)
    const [ingredientsValue, setIngredientsValue] = useState("Sample Ingredients")

    const [quantity, setQuantity] = useState(props.quantity)
    const [quantityValue, setQuantityValue] = useState("Sample Quantity")

    const [showInput, setInputState] = useState(false)

    const [ID, setID] = useState(props.ID)

    const [image, setImage] = useState(null);
    const storage = database.storage();
    const id = ID;
    const FoodCollection = database.firestore().collection("FoodCollection")


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
                    imageURL_ = url;
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
                SellerID: id,
                Quantity: quantityValue
            }).then(()=>{
                console.log("Information have been sent");
                //alert("Information have been sent");
            }).catch((err)=>{
                alert(err.message);
            });   

            setTitles(titleValue)
            setImageURL(imageURL_)
            setBody(bodyValue)
            setPrice("$ "+priceValue)
            setIngredients(ingredientsValue)
            setQuantity(quantityValue)

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

    function updateQuantityValue (event) {
        setQuantityValue(event.target.value)
    }

    function deleteCard () {
        FoodCollection.doc(id).collection("food").doc(titles).delete();
        alert("Refresh to complete Delete")
    }

    const [sellerID] = useState(props.sellerID)
    const [accountID] = useState(props.accountID)

    const handleClick =() =>{
        const ref = database.firestore().collection("users").doc(accountID).collection('Cart').doc()
        var myID = ref.id;
        ref.set({
            name: titles,
            price: price_,
            image: imageURL,
            quantity: quantity,
            checkout: false,
            seller: sellerID,
            body: body,
            id: myID,
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


    if(showInput) {
        return (
            <Card>
                <input onChange={updateTitleValue} placeholder="Edit Title"></input>
                <input type="file" onChange={updateImageURLValue} placeholder="Edit Image"></input>
                <input onChange={updateBodyValue} placeholder="Edit Body"></input>
                <input onChange={updatePriceValue} placeholder="Edit Price"></input>
                <input onChange={updateIngredientsValue} placeholder="Edit Ingredients"></input>
                <input onChange={updateQuantityValue} placeholder="Edit Quantity"></input>
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
                            <button onClick={handleClick}>Add to cart</button>
                            <br></br>
                            <small className="text-muted"> Contains: {ingredients} </small>
                            <br></br>
                            <small className="text-muted"> Quantity: {quantity} </small>

                            <br></br>
                            <button onClick = {edit}>Edit</button>
                            

                        </Card.Footer> 
                    
                </Card> 

        );
    }

}

export default CustomCards