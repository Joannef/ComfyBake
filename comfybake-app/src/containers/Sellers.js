import React, {useState} from 'react';
import eggTart from './portuguese-egg-custard-tarts.jpg';
import "./sellerPage.css"

import CustomCards from './CustomCards'

import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import 'bootstrap/dist/css/bootstrap.min.css';
import database from '../firebase';

function Sellers() {
    
    const [cards, setCards] = useState([{
        title: "",
        imageURL: "",
        body: "",
        price: "",
        ingredients: ""
    }]);

    //const { cards } = this.state;

    function addCardClickEvent () {
        const cards_ = [
            ...cards, 
            {} // This is required to add card into cards as it is where the new card goes i.e. 2x {} results in 2 cards created
        ]; // This will create a new array from the old one with a new additional value
        setCards({ cards })
    }

    return ( 
        <div class = "center">
            <h1>Sindy's Home Kitchen</h1>
            <h5>Recommendations</h5>

            <Container>

                <CardDeck>
                    
                    {/* <CustomCards 
                        
                        title = {this.state.titleLoad}
                        imageURL = {this.state.imageLoad}
                        body = {this.state.bodyLoad}
                        price = {this.state.priceLoad}
                        ingredients = {this.state.ingredientsLoad}

                    /> */}

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
                        <small className="text-muted">Coco | Milk | Rasberry </small>
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

                </CardDeck>

                <br></br>

                <h5>Full Menu</h5>

                <br></br>

                <CardDeck>
                    
                    <Card>
                        <Card.Img variant="top" src = {eggTart} alt = "Portugese Egg Tarts" />
                        <Card.Body>
                        <Card.Title>Portugese Egg Tarts</Card.Title>
                        <Card.Text>
                            Portuguese egg tart: its crisp, flaky crust holding a creamy custard 
                            center, blistered on top from the high heat of an oven.
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <p>$2.00</p>
                        <small className="text-muted">Eggs | Milk</small>
                        </Card.Footer>
                    </Card>

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
                <br></br>
                <br></br>
                <br></br>

                <CardDeck>

                    {cards.map((card, index) => //need to figure out what these parameters means
                    
                        <CustomCards 
                        
                            title= 'Edit Card'
                            imageURL='https://static01.nyt.com/images/2017/12/13/dining/15COOKING-CREME-BRULEE1/15COOKING-CREME-BRULEE1-articleLarge.jpg'
                            body='Edit this card by pressing on the Edit button below'
                            price="$99"
                            ingredients= "Milk"

                        />
                    
                    )}

                    <button onClick={addCardClickEvent}>Add Card</button>

                </CardDeck>

            </Container>

            <br></br>

        </div>
    );
}

export default Sellers