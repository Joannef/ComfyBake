import React from "react";
import Button from 'react-bootstrap/Button';
import Col from "react-bootstrap/esm/Col";
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'

class MyForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = { foodname: "" };
  }
  mySubmitHandler = (event) => {
    event.preventDefault();
    alert("You are submitting "+ this.state.foodname);
  };
  myChangeHandler = (event) => {
    this.setState({ foodname: event.target.value });
    this.setState({ address: event.target.value });
  };
/*
  Form inline>
          <FormControl type="text" placeholder="Search" className=" mr-sm-2" />
          <Button type="submit">Submit</Button>
        </Form>
        */
  
  render() {
    return (
      <Form onSubmit={this.mySubmitHandler} >
      <Form.Row>
        <Col xs={0}></Col>
        <Col xs={2}>
          <FormControl type="text" placeholder="Food name" onChange= {this.myChangeHandler}/>
        </Col>
        <Button type="submit" >Submit</Button>
    
      </Form.Row>
      </Form>
    );
  }
}

export default MyForm;