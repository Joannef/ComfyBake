import React from "react";
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import eggTart from './portuguese-egg-custard-tarts.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import firebase from './firebase.js'
import "./Home.css";

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {sellersContent : []}
  }
  componentDidMount() {
    firebase.database().ref("sellers-Content").on("value", snapshot => {
      let sellerContent = [];
      snapshot.forEach(snap => {
        sellerContent.push(snap.val());
      });
      this.setState({sellersContent: sellerContent});
    });
  }
}

export default function Home() {
  return (
    <div className="Home">
      <div className="lander">
        <h1>ComfyBake</h1>
      </div>
      <div className="content">
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
            <Card.Img variant="top" src="https://dominosugar.com/emshare/views/modules/asset/downloads/originals/2020/09/74014/MuffinsTipsShippingBakedGoods.jpg/MuffinsTipsShippingBakedGoods.jpg" />
            <Card.Body>
              <Card.Title>Muffins</Card.Title>
              <Card.Text>
                Half-baked, delicious corn-meal, delicate crisp muffins
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <p>$1.50</p>
              <small className="text-muted">Eggs</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src="https://www.seriouseats.com/images/20100414-ph-macarons.jpg" />
            <Card.Body>
              <Card.Title>Macarons</Card.Title>
              <Card.Text>
                Butter-creamed filled cookie sandwich that transport 
                you to a cobbled street in Paris with one taste.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <p>$3.00</p>
              <small className="text-muted">Eggs | Almond | Milk</small>
            </Card.Footer>
          </Card>
          <Card>
            {this}
          </Card>
        </CardDeck>
      </div>
    </div>
  );
}