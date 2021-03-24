import React from "react";
import Routes from "./Routes";
import { LinkContainer } from "react-router-bootstrap";
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Container>
      <Navbar fixed="top" bg="light" variant="light">
        <LinkContainer to="/">
          <Navbar.Brand>ComfyBake</Navbar.Brand>
        </LinkContainer>
        <Navbar.Collapse className="justify-content-center">
          <Nav activeKey={window.location.pathname}>
            <LinkContainer to="/">
              <Nav.Link >Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/signup">
              <Nav.Link>Signup</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/login">
              <Nav.Link>Login</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/orders">
              <Nav.Link>Orders</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/seller">
              <Nav.Link>Sellers</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
        <Form inline>
          <FormControl type="text" placeholder="Search" className=" mr-sm-2" />
          <Button type="submit">Submit</Button>
        </Form>
      </Navbar>
      <Routes />
    </Container>
  );
}

export default App;