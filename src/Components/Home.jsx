import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import styled from "styled-components";
import { FaGithubAlt, FaLinkedin, FaInstagram } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
function Home() {
  return <>
  <Main>
  <Container fluid >
    <Row className="text-center text-md-start my-3">
        <Col md={8} lg={7} className="mainpara px-5 ">
        <h1 className="mt-5 mt-md-0" ><span className="display-6 ">I'm</span> <br className="d-md-none" /> <span className="display-2"> Mohsin Munir</span> </h1>
        <h3 className="display-6">Frontend Web Developer</h3>
        <p className="lead d-md-block d-none pc">Passionate about crafting engaging web experiences that combine creativity with functionality. I specialize in building responsive and user-friendly interfaces, leveraging the latest technologies to deliver seamless digital solutions. With a keen eye for detail and a commitment to quality, I strive to create web applications that not only meet but exceed expectations. Let's innovate together and bring your ideas to life!</p>
        <p className="lead d-md-none ">Creating engaging, responsive web experiences with a focus on quality and leveraging the latest technologies.</p>
        </Col>
        <Col md={4} lg={5} className="d-none d-md-block">
        <Image src="Imgs/drawing.png" fluid />
        </Col>
    </Row>
  </Container>
  </Main>
  </>;
 
}
const Main=styled.div`
 @media (max-width:767px){
    .mainpara{
        background: url("Imgs/drawing.png");
        background-position: center;
        background-attachment: fixed;
        background-repeat: no-repeat;
    }
   
 }

.pc{
    width: 88%;
}
    .display-6{
        color: white;
        font-weight: 400;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        
    }
    .display-2{
        color: red;
        font-weight: 500;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        
    }
    p{
        
        color: #d8d4d4;
      
    }
    .mainpara{
        margin: auto;
    }
`
export default Home;
