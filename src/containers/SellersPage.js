//imrc snippet
import React, {useEffect, useState} from 'react';
import "./SellerPage.css"
import CustomCards from './CustomCards'

import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import CardColumns from 'react-bootstrap/CardColumns'
import 'bootstrap/dist/css/bootstrap.min.css';
import database from '../firebase';

function Sellers() {

    const [firestoreArray, setFirestoreArray] = useState([]);

    const db = database.firestore();
    const id = "user2@gmail.com";

    useEffect(() => {
        
        db.collection("FoodCollection").doc(id).collection("food").get().then(querySnapshot => {
            const data = querySnapshot.docs.map(doc => doc.data());
            console.log(data);
            setFirestoreArray(data);
        })

    }, [])

    return (
        <div class = "center">
            <h1>Sindy's Home Kitchen</h1>
            <h5>Full Menu</h5>

            <br></br>

            <Container>

                <CardColumns>

                    {firestoreArray.map(each => 
                        // console.log(each.Foodname, each.Ingredients, each.Price)
                        //<div key={each.Foodname}>
                            /* <h1 style={{top: "100px"}}>{each.Foodname}</h1>
                            <h3>{each.Ingredients}</h3>
                            <p>{each.Price}</p> */
                        

                            <CustomCards key={each.Foodname}
                                                                
                                title= {each.Foodname}
                                imageURL= {each.ImageUrl}
                                body= {each.Body}
                                price= {each.Price}
                                ingredients= {each.Ingredients}
                                //id = {id} pass this to CustomCards

                            />

                        //</div>
                    )}

                </CardColumns>

                <br></br>
                <h5>Add Menu Item</h5>

                <CardDeck>
                    

                    <CustomCards 
                    
                        title= 'Add New Item'
                        imageURL='https://static01.nyt.com/images/2017/12/13/dining/15COOKING-CREME-BRULEE1/15COOKING-CREME-BRULEE1-articleLarge.jpg'
                        body='Enter new menu item description here. After press save and refresh the page to see it appear on your menu.'
                        price="Enter new item price"
                        ingredients= "Enter new item ingredients"

                    />

                </CardDeck>
                
            </Container>
        </div>
    );

}

export default Sellers