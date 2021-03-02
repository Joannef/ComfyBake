// import logo from './logo.svg';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Container>
      <Navbar fixed="top" bg="light" variant="light">
        <Navbar.Brand href="#home">ComfyBake</Navbar.Brand>
        <Navbar.Collapse className="justify-content-center">
          <Nav defaultActiveKey="/home">
            <Nav.Item>
              <Nav.Link href="#home">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#owners">Owners</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#sellers">Sellers</Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
        <Form inline>
          <FormControl type="text" placeholder="Search" className=" mr-sm-2" />
          <Button type="submit">Submit</Button>
        </Form>
      </Navbar>
      <br></br><br></br><br></br><br></br>
      <CardDeck>
        <Card>
          <Card.Img variant="top" src="https://www.tasteofhome.com/wp-content/uploads/2018/02/Gluten-Free-Peanut-Butter-Kiss-Cookies_exps46220_CW143039D09_11__14b_RMS-1.jpg" />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural lead-in to
              additional content. This content is a little bit longer.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src="https://dominosugar.com/emshare/views/modules/asset/downloads/originals/2020/09/74014/MuffinsTipsShippingBakedGoods.jpg/MuffinsTipsShippingBakedGoods.jpg" />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This card has supporting text below as a natural lead-in to additional
              content.{' '}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src="https://www.seriouseats.com/images/20100414-ph-macarons.jpg" />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural lead-in to
              additional content. This card has even longer content than the first to
              show that equal height action.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
      </CardDeck>
    </Container>
  );
}

export default App;
