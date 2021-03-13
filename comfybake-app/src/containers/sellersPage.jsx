//imrc snippet
import React, {Component} from 'react';
import eggTart from './portuguese-egg-custard-tarts.jpg';
import "./sellerPage.css"

//import CustomCard from './CustomCard'
import CustomCards from './CustomCards'

import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import 'bootstrap/dist/css/bootstrap.min.css';

//cc snippet
class SellersPage extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            cards: [
                {
                    title: "",
                    imageURL: "",
                    body: "",
                    price: "",
                    ingredients: ""
                }
            ]
        };

        // this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
    }

    clickEvent = () => {
        const cards = [
            ...this.state.cards, 
            {
                title: 'Cookies',
                price: "$3"
            }
        ];
        this.setState({ cards })
    }

    // handleChange(event) {
    //     this.setState({value: event.target.value});
    //     this.setState({title: event.target.value})
    // }
    
    // handleSubmit(event) {
    //     alert('A name was submitted: ' + this.state.value);
    //     event.preventDefault();
    // }


    render() {

        const { cards } = this.state;
        
        function addCard() {
            
            alert("Created new card!")
        }


        return ( 
            <div class = "center">
                <h1>Sindy's Home Kitchen</h1>
                <h5>Recommendations</h5>

                <Container>

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
                    <button onClick= {addCard} >Add New Item</button>
                    <br></br>

                    <CardDeck>

                        {cards.map((card, index) =>
                        
                            <CustomCards 
                            
                                title= 'Sample Title'
                                imageURL='https://static01.nyt.com/images/2017/12/13/dining/15COOKING-CREME-BRULEE1/15COOKING-CREME-BRULEE1-articleLarge.jpg'
                                body='Test Body'
                                price="$99"
                                ingredients= "Milk"

                            />
                        
                        )}

                        <button onClick={this.clickEvent}>Add Card</button>

                    </CardDeck>

                </Container>

                <br></br>
                <h6>Add new item</h6>

                {/* <form onSubmit={this.handleSubmit}>
                        <label>Item Title:</label>
                        <input type="text" value={this.state.value} onChange={this.handleChange}/>
                        

                        <label>
                        ImageURL:
                        <input type="text" value={this.state.value} onChange={this.handleChange} />
                        </label>

                        <label>
                        Body:
                        <input type="text" value={this.state.value} onChange={this.handleChange} />
                        </label>

                        <label>
                        Price:
                        <input type="text" value={this.state.value} onChange={this.handleChange} />
                        </label>

                        <label>
                        Value:
                        <input type="text" value={this.state.value} onChange={this.handleChange} />
                        </label>

                        <input type="submit" value="Submit" />
                        <button>Submit</button>
                </form> */}  

            </div>
        );
    
    };
};

export default SellersPage;