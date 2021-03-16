import { Component } from "react"
import { CardDeck } from "react-bootstrap";
import { Card } from "react-bootstrap";

class CardComponent extends Component {
    state = {
        itemImg1: "http://cdn.shopify.com/s/files/1/0004/8132/9204/products/jelly-beans-bulk-assorted_1024x1024.jpg?v=1580924864",
        itemTitle1: "Jelley Beans",
        description1: "",
        price1: "$20",
        allergies1: "" + " | " + "",
        itemImg2: "",
        itemTitle2: "Item 2",
        description2: "",
        price2: "$10",
        allergies2: "",
        itemImg3: "",
        itemTitle3: "Item 3",
        description3: "",
        price3: "$30",
        allergies3: ""
    }

    render(){
        return (
            <CardDeck>
                <Card>
                    <Card.Img variant="top" src={this.state.itemImg1}></Card.Img>
                    <Card.Body>
                        <Card.Title>{this.state.itemTitle1}</Card.Title>
                        <Card.Text>
                            {this.state.description1}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <p>{this.state.price1}</p>
                        <small className="text-muted">{this.state.allergies1}</small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src={this.state.itemImg2}></Card.Img>
                    <Card.Body>
                        <Card.Title>{this.state.itemTitle2}</Card.Title>
                        <Card.Text>
                            {this.state.description2}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <p>{this.state.price2}</p>
                        <small className="text-muted">{this.state.allergies2}</small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src={this.state.itemImg3}></Card.Img>
                    <Card.Body>
                        <Card.Title>{this.state.itemTitle3}</Card.Title>
                        <Card.Text>
                            {this.state.description3}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <p>{this.state.price3}</p>
                        <small className="text-muted">{this.state.allergies3}</small>
                    </Card.Footer>
                </Card>
            </CardDeck>
        )
    }
};


export default CardComponent;