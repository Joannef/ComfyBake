//imrc snippet
import React, {useEffect, useState} from 'react';
import "./sellerPage.css"

//import CustomCard from './CustomCard'
import CustomCards from './CustomCards'

import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
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

                <CardDeck>

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

                            />

                        //</div>
                    )}

                </CardDeck>

                <br></br>

                <CardDeck>

                    <Card>
                        <Card.Img variant="top" src = "https://images.kitchenstories.io/recipeImages/RP10_30_08_MoltenChocoladeCupcakeWithRaspberryFilling_TitlePictureNEW/RP10_30_08_MoltenChocoladeCupcakeWithRaspberryFilling_TitlePictureNEW-medium-landscape-150.jpg" />
                        <Card.Body>
                        <Card.Title>Raspberry Molten Chocolate Lava Cakes</Card.Title>
                        <Card.Text>
                            Its crisp, flaky crust holding a creamy custard 
                            center, blistered on top from the high heat of an oven.
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <p>$3.00</p>
                        <small className="text-muted">Cocoa | Milk | Rasberry </small>
                        </Card.Footer>
                    </Card>

                    <Card>
                        <Card.Img variant="top" src = "https://cdn.loveandlemons.com/wp-content/uploads/2020/03/baking-recipes-1.jpg" />
                        <Card.Body>
                        <Card.Title>Homemade Brownies</Card.Title>
                        <Card.Text>
                        These brownies will put all other brownie recipes to shame. They have a crave-worthy fudgy texture and a rich dark chocolate flavor.
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <p>$1.50</p>
                        <small className="text-muted">Cocoa | Egg | Vanilla </small>
                        </Card.Footer>
                    </Card>

                    <Card>
                        <Card.Img variant="top" src = "https://static01.nyt.com/images/2017/12/13/dining/15COOKING-CREME-BRULEE1/15COOKING-CREME-BRULEE1-articleLarge.jpg" />
                        <Card.Body>
                        <Card.Title>Crème brûlée</Card.Title>
                        <Card.Text>
                        Crème brûlée, a dessert consisting of a rich custard base topped with a layer of hardened caramelized sugar.
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <p>$3.25</p>
                        <small className="text-muted">Egg | Milk | Vanilla </small>
                        </Card.Footer>
                    </Card>

                </CardDeck>

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