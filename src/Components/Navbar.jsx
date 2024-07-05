import React from 'react'
import {Container,Row,Col,Image} from 'react-bootstrap'
import styled from 'styled-components'
import { FaGithubAlt } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoReorderThree } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa6";
import 'bootstrap/dist/css/bootstrap.min.css';
function Navbar() {
  return (
    <>
    <Header>
      <Container fluid>
        <Row className='mx-2'>
     <Col xs={7} md={4} lg={3} className='mt-4 text-center text-sm-start'>
     <Image src="Imgs/logo (1).png"  alt="Logo" fluid /> <br className='d-sm-none' /><span className=''>Mohsin Munir</span></Col>
     <Col  md={5} className='d-md-block d-none mt-4'>
     <Row className='justify-content-space-around'>
        <Col sm={4}  className='mt-2'><a href="">Projects</a></Col>
        <Col sm={4} className='mt-2'><a href="">Technologies</a></Col>
        <Col sm={4} className='mt-2'><a href="">About Me</a></Col>
     </Row>

     </Col>
     <Col xs={5} md={3}  lg={4} className='mt-4'>
     <Row className='text-end'>
        <Col>
        <Row className='text-end'>
            <Col className='d-md-none mt-3 mt-sm-0 text-end' sm={5}>
            <button><IoReorderThree/></button>
            </Col>
            <Col md={12} sm={7} className='text-start text-md-end'>
            <span className='d-sm-block d-none'><a href="https://github.com/raja-mohsin1521" target='_blank'><FaGithubAlt /></a><a className='mx-3' href="https://www.linkedin.com/in/mohsin-munir-b29099262/" target='_blank'><FaLinkedin /></a><a href="https://www.instagram.com/raja_mohsin1521/" target='_blank'><FaInstagram /></a> </span>
            </Col>
        </Row>
  
        </Col>
     </Row>

     </Col>
        </Row>
      
      </Container>
      </Header>
    </>
  )
}
const Header=styled.div`
    span{
        font-size: 130%;
        font-weight: 500;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        color: white;
        margin-left: 10px;
       
    }
    a{
        color: white;
        text-decoration: none;
    }
    button{
        border: none;
        color: white;
        background-color: #0b101a;
        padding:5px 10px;
        margin-top: 3px;
        transition: all 0.3s;
    }
    button:hover{
        color: #7e0202;
        background-color: #020305;
    }
`

export default Navbar
