import React, { useState } from "react";
import styled from "styled-components";
import { Container, Row, Col, ProgressBar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
function Skills() {
  const levels = [
    { name: "HTML", state: "Expert", progress: 100 },
    { name: "CSS & Bootstrap", state: "Expert", progress: 100 },
    { name: "JavaScript", state: "Expert", progress: 90 },

    { name: "React Js", state: "Expert", progress: 80 },

    { name: "MongoDB", state: "Intermediate", progress: 50 },

    { name: "MySql", state: "Intermediate", progress: 50 },
    { name: "Node.js & Express.js", state: "Novice", progress: 25 },
    { name: "php", state: "Novice", progress: 25 },
  ];

  return (
    <MainSkill id="skills">
      <Container className="px-5 my-5" fluid>
        <Row className=" pt-5 heading">
          <Col>
            <h1 className="display-6 ">Technologies</h1>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col className="skills ">
            {levels.map((level) => (
              <Row className="justify-content-between levels mt-3 m-auto">
                <Col xs={8}>{level.name}</Col>
                <Col xs={4} className="text-end ">
                  {level.state}
                </Col>
                <Col>
                  {" "}
                  <ProgressBar
                    className="progress-bar-custom"
                    now={level.progress}
                  />
                </Col>
              </Row>
            ))}
          </Col>
        </Row>
        <Row className=" pt-5 heading">
          <Col>
            <h1 className="display-6 ">Additional technologies and skills</h1>
          </Col>
        </Row>
        <Row className=" pt-2 ">
          <Col >
            <ul class="inline-list ">
              <li>Git</li>
              <li>Postman</li>
            
              <li>Wordpress</li>
            
            </ul>
          
          </Col>
        </Row>
      </Container>
    </MainSkill>
  );
}
const MainSkill = styled.div`
  .heading h1 {
    color: white;
    font-weight: 500;
  }
  .levels {
    width: 90%;
  }
  @media (max-width: 767px) {
    .levels {
      width: 100%;
    }
  }
  .progress-bar-custom {
    background-color: #162950 !important;
  }

  .progress-bar-custom .progress-bar {
    background: linear-gradient(
      to left,
      #13adc7 0%,
      #6978d1 67%,
      #945dd6 100%
    ) !important; 
  }
  .inline-list {
    display: flex;
    justify-content: space-around;
  padding: 0;
}

.inline-list li {
  display: inline;
  margin-right: 10px; 
font-size: 130%;

}
`;
export default Skills;
