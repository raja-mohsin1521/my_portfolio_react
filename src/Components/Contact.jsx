import React from "react";
import styled from "styled-components";
import { Container, Row, Col ,FloatingLabel,Form ,InputGroup  } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
function Contact() {
  return (
    <Message id="contact">

<Container fluid >
<Row className="pt-5 px-3 mx-2 pb-4 heading">
          <Col>
            <h1 className="display-6 ">Contact Us</h1>
          </Col>
        </Row>

</Container>


        <Container>

    


      <Row>
        <Col>
         
        <InputGroup className="mb-3">
        <InputGroup.Text  className='label' id="basic-addon1">First Name</InputGroup.Text>
        <Form.Control
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
          className="inp"
        />
      </InputGroup>

      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Enter Email"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          className="inp"
        />
        <InputGroup.Text className='label' id="basic-addon2">@example.com</InputGroup.Text>
      </InputGroup>

  
      <InputGroup className="mb-3">
        <InputGroup.Text className='label' id="basic-addon3">
        Phone
        </InputGroup.Text>
        <Form.Control placeholder="Enter Contact Number" className="inp" id="basic-url" aria-describedby="basic-addon3" />
      </InputGroup>

      

      <InputGroup>
        <InputGroup.Text style={{ height: '50px' }} className='label'>Message</InputGroup.Text>
        <Form.Control className="inp" as="textarea" aria-label="With textarea" style={{ height: '300px' ,borderRadius:'0px 10px 10px 10px' }} placeholder="Write message Here" />
      </InputGroup>
          
        </Col>
      </Row>
      </Container>
    </Message>
  );
}
const Message = styled.div`
.label{
    background-color: #070a11;
    color: white;
}
input{
    color: black;
}
.inp{
    background-color: transparent;
}
.inp::placeholder{
    color: #929292;
}
`;
export default Contact;
