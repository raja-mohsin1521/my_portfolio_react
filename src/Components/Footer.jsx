import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
function Footer() {
  return (
    <Ftr>
        <hr />
      <Container>
        <Row className="text-center mt-2">
            <Col>
            <p >&copy;	 All Rights protected by <a href="">Mohsin Munir</a></p>
            </Col>
        </Row>
      </Container>
    </Ftr>
  )
}
const Ftr=styled.div`
background-color:#0b111d ;
    p{
        font-size: small;
    }
    a{
        
        color: white;
    }
`
export default Footer
