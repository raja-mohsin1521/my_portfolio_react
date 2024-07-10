import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const About = () => {

  const flow = [
    {
      timespan: '2019-2021',
      title: 'Pre-Engineering',
      disc: 'Studied at Punjab College with a focus on Pre-Engineering subjects, laying a strong foundation in technical education.'
    },
    {
      timespan: '2021-Present',
      title: 'BsCs',
      disc: 'Pursuing a Bachelor of Science in Computer Science (BSCS) from NUTECH, gaining in-depth knowledge and hands-on experience in software development and related fields.'
    },
    {
      timespan: 'April 2023 - June 2023',
      title: 'Fullstack Web Development Course',
      disc: 'Completed a comprehensive Fullstack Web Development course at Murree Development Forum (MDF), mastering HTML, JavaScript, CSS, Bootstrap, PHP, and MySQL.'
    },
    {
      timespan: 'September 2023 - December 2023',
      title: 'Internship at Eziline Software House',
      disc: 'Interned as a Frontend Developer, working with HTML, CSS, and JavaScript to create responsive and dynamic user interfaces.'
    },
    {
      timespan: 'January 2024 - April 2024',
      title: 'Junior React Developer at 41labs',
      disc: 'Worked as a Junior React Developer, contributing to the development of sophisticated web applications using React.js.'
    }
  ];

  return (
    <>
      <Container fluid>
        <Row className="pt-5 mt-5 px-3 mx-2 mb-4 heading">
          <Col>
            <h1 className="display-6">About Me</h1>
          </Col>
        </Row>
        <Row className="mb-5 px-3 mx-2 pb-4">
          <Col>
            <p>
              I specialize in crafting user-friendly interfaces using HTML, CSS, JavaScript, and React.js. With a strong focus on combining creativity with clean, efficient code, I strive to deliver seamless digital experiences that engage and inspire users. Whether it's optimizing performance or implementing responsive designs, I'm dedicated to transforming ideas into impactful realities.
            </p>
          </Col>
        </Row>
      </Container>
      <AboutSection>
        <section className='timeline-area text-center'>
          {flow.map((flowItem, index) => (
            <div key={index}>
              <p className="lead">{flowItem.timespan}</p>
              <h4>{flowItem.title}</h4>
              <p>{flowItem.disc}</p>
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

  .timeline-area {
    margin: 10px 50px;
    margin-bottom: 50px;
    display: flex;
    justify-content: space-around;
    border-top: 1px solid white;
    min-width: 200px;
    padding-top: 10px;
    width: fit-content;

    @media (max-width: 110vw) {
      overflow-x: none;
    }
  }

  div {
    color: white;
    padding: 10px 30px;
    margin: 10px 10px 0px 10px;
    border-radius: 5px;
    line-height: 1;
  }

  div:before {
    content: '';
    display: block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: white;
    border: 3px solid white;
    position: relative;
    top: -36px;
    left: 40%;
  }

  p {
    color: #cac9c9;
  }
`;

export default About;
