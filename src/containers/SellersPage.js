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

import Display from './Display';
import Home from "./Home";
import Nav from "react-bootstrap/Nav";
import { LinkContainer } from "react-router-bootstrap";
import Transfer from './Transfer';

function Sellers(props) {
    const {AccountID, SellerID} = props;
    const [jumpback, setjumpback] = useState(false);
    const [AccountMatch, setAccountMatch] = useState(AccountID==SellerID);
    const [jumpreflash, setjumpreflash] = useState (false);


    const [firestoreArray, setFirestoreArray] = useState([]);
    const db = database.firestore();
    const id = "user2@gmail.com";

    useEffect(() => {
        
        db.collection("FoodCollection").doc(AccountID).collection("food").get().then(querySnapshot => {
            const data = querySnapshot.docs.map(doc => doc.data());
            console.log(data);
            setFirestoreArray(data);
        })

    }, [])

    //jump even 
    const handleJumpback =() =>{
        setjumpback(true);
    }

    //reflash
    const handleReflash =()=>{
        setjumpback(true);
        setjumpreflash(true);
    }

    //logout
    const handleLogout = () =>{
        database.auth().signOut();
    }

    return (
        <div>
            {jumpback?(
                <>
                <div>
                    {jumpreflash?(
                        <>
                        <Transfer
                            AccountID = {AccountID}
                            SellerID = {SellerID}
                            reflash = {true}  
                        />
                        </>
                    ):(
                        <>
                        <Home
                            AccountID = {AccountID}
                        />
                        </>
                    )}
                </div>
                </>
            ):(
                <>
                <div>
                    {AccountMatch?(
                        <>
                        <div class = "center">
                        <h1>Sindy's Home Kitchen</h1>
                        <h5>Full Menu</h5>
                        <p>AccountID:{AccountID}</p>
                        <p>SellerID:{SellerID}</p>
                        <button onClick={handleJumpback}> Home</button>
                        <button onClick={handleReflash}> Reflash</button>
                        <LinkContainer to="/login">  
                            <Nav.Link>
                                <button onClick={handleLogout}>Logout</button><br/>
                            </Nav.Link>
                        </LinkContainer>
                    <br></br>

                    <Container>

                    <CardColumns>

                        {firestoreArray.map(each => 
                            <CustomCards key={each.Foodname}
                                                                
                                title= {each.Foodname}
                                imageURL= {each.ImageUrl}
                                body= {each.Body}
                                price= {each.Price}
                                ingredients= {each.Ingredients}

                            />

                        //</div>
                        )}

                    </CardColumns>

                    <br></br>
                    <h5>Add Menu Item</h5>

                    <CardDeck>
                    

                        <CustomCards 
                            ID = {AccountID}
                            title= 'Add New Item'
                            imageURL='https://static01.nyt.com/images/2017/12/13/dining/15COOKING-CREME-BRULEE1/15COOKING-CREME-BRULEE1-articleLarge.jpg'
                            body='Enter new menu item description here. After press save and refresh the page to see it appear on your menu.'
                            price="Enter new item price"
                            ingredients= "Enter new item ingredients"

                        />

                    </CardDeck>
                
                    </Container>
                    </div>
                    </>
                    ):(
                        <>
                        <div class = "center">
                            <br/>
                            <br/>
                            <p>AccountID:{AccountID}</p>
                            <p>SellerID:{SellerID}</p>
                            <p>AccountID is not match to seller id</p>
                            <button onClick={handleJumpback}> Display</button>
                            <br></br>
                            <br/>
                                <LinkContainer to="/login">  
                                    <Nav.Link>
                                        <button onClick={handleLogout}>Logout</button><br/>
                                    </Nav.Link>
                                </LinkContainer>
                            <br/>
                        </div>
                        </>
                    )}
                </div>
                </>
            )}
        </div>
    );

}

export default Sellers


