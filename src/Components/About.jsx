import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
const About = () => {

const flow=[{
  timespan:'2021-Present',
  title:'BsCs',
  disc:'loremaaaaaaaaaaaa ddddddddddddddddddddddd'

},{
  timespan:'2021-Present',
  title:'BsCs',
  disc:'loremaaaaaaaaaaaa ddddddddddddddddddddddd'

},{
  timespan:'2021-Present',
  title:'BsCs',
  disc:'loremaaaaaaaaaaaa ddddddddddddddddddddddd'

},{
  timespan:'2021-Present',
  title:'BsCs',
  disc:'loremaaaaaaaaaaaa ddddddddddddddddddddddd'

},{
  timespan:'2021-Present',
  title:'BsCs',
  disc:'loremaaaaaaaaaaaa ddddddddddddddddddddddd'

},{
  timespan:'2021-Present',
  title:'BsCs',
  disc:'loremaaaaaaaaaaaa ddddddddddddddddddddddd'

}]


  return (

    <>
    <Container fluid >
<Row className="pt-5 mt-5 px-3 mx-2 mb-4 heading">
          <Col>
            <h1 className="display-6 ">About Me</h1>
          </Col>
        </Row>
        <Row className="mb-5   px-3 mx-2 pb-4">
          <Col>
          <p>
          I specialize in crafting user-friendly interfaces using HTML, CSS, JavaScript, and React.js. With a strong focus on combining creativity with clean, efficient code, I strive to deliver seamless digital experiences that engage and inspire users. Whether it's optimizing performance or implementing responsive designs, I'm dedicated to transforming ideas into impactful realities.</p></Col>
        </Row>

</Container>
    <AboutSection>
      
   <section className='timeline-area text-center' >
{flow.map((flow=>
  <div>
  <p className="lead">{flow.timespan}</p>
  <h4>{flow.title} </h4>
  <p>{flow.disc}</p>
</div>
))}



   </section>
    </AboutSection>
    </>
  );
}

const AboutSection = styled.section`

overflow-x: scroll;
margin: 0px auto;

scrollbar-width: 0px !important;
    scrollbar-color: #1d2a44 #000000; 

  
     
    &::-webkit-scrollbar {
      width: 1px; 
    }

    &::-webkit-scrollbar-thumb {
      background-color: #0F1624; 
      border-radius: 4px; 
    }

    &::-webkit-scrollbar-track {
      background-color: #020305; 
    }







 .timeline-area{
  margin: 10px 50px;
  margin-bottom: 50px;
 display: flex;
 justify-content: space-around;
 border-top:1px solid white ;
 min-width: 200px;
 padding-top: 10px;
 width: fit-content;

 }


 div{

  color: white;
  padding: 10px 30px;
 
  margin: 10px 10px 0px 10px;
  border-radius: 5px;
  line-height: 1;
 }

 div:before{
  content: '';
  display: block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: white;
  border: 3px solid white;
  position: relative;
  top:-36px;
  left: 40%;

 }
 p{
  color: #cac9c9;
 }

`;

export default About;
