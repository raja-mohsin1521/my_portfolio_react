import React from "react";
import styled from "styled-components";
import { Container, Row, Col, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Projects() {
  const projects = [
    {
      src: "Imgs/3.png",
      Title: "Skin Analyzer Tool Frontend",
      Disc:
        "The Skin Analyzer tool is a React-based web application that allows users to upload two images of their face for acne analysis. By integrating advanced APIs, tested thoroughly on Postman, the tool accurately detects and highlights acne-affected areas. This provides users with valuable insights to manage their skincare effectively, all within a responsive and user-friendly interface.",
      link:
        "https://www.linkedin.com/pulse/transforming-dermatological-care-case-study-ai-skin-condition-analyzer-etpyf/?trackingId=6SGMWhb2P5v8XaTSoxXRhw%3D%3D",
      disable: false,
    },
    {
      src: "Imgs/1.png",
      Title: "Replica Landing page for Ezitech software House",
      Disc:
        "The Ezitech software house replica landing page, crafted using HTML, CSS, JavaScript, and Bootstrap, showcases a sleek and modern design. This landing page captures the essence of Ezitech, featuring a responsive layout and interactive elements. The use of Bootstrap ensures a consistent user experience across devices, while custom CSS and JavaScript enhance the visual appeal.",
      link: "https://ezitech.org/",
      disable: false,
    },
    {
      src: "Imgs/2.pmg.png",
      Title: "Frontend for 41labs Software House",
      Disc:
        "The frontend of the 41labs software house WordPress project was meticulously crafted for a polished, user-friendly experience. Using advanced web technologies, it emphasizes responsiveness and functionality. This results in a seamless interface that authentically reflects 41labs' innovative ethos, ensuring consistency and engagement across all devices.",
      link: "https://41labsllc.com/#team",
      disable: false,
    },
    {
      src: "Imgs/4.png",
      Title: "E-commerce store for Gadgets",
      Disc:
        "The HTML, CSS, JavaScript, and Bootstrap-powered e-commerce store for gadgets offers a seamless shopping experience. It features detailed product listings, easy navigation, secure checkout, and responsive design, ensuring accessibility across devices for an efficient and enjoyable shopping journey.",
      link: "https://ezitech.org/",
      disable: true,
    },
  ];

  return (
    <DisplayProjects id="projects">
      <Container className="px-5 my-5 my-md-0" fluid>
        <Row className="pt-5 pb-4 heading">
          <Col>
            <h1 className="display-6 ">Projects</h1>
          </Col>
        </Row>
        <Row className="justify-content-around">
          {projects.map((p, index) => (
            <Col md={6} key={index} className="card justify-content-center">
              <Image src={p.src} className="my-3 img" fluid />
              <h3 className="lead">{p.Title}</h3>
              <div className="hr mb-4"></div>
              <p>{p.Disc}</p>
              {p.disable ? (
                <span className="disabled-link">View Site</span>
              ) : (
                <a href={p.link} target="_blank" rel="noopener noreferrer">
                  View Site
                </a>
              )}
            </Col>
          ))}
        </Row>
      </Container>
    </DisplayProjects>
  );
}

const DisplayProjects = styled.div`
  .card {
    width: 40%;
    border-radius: 20px 0px 20px 0px;
    background: transparent;
    border: 2px solid white;
    justify-content: center;
    align-items: center;
    color: white;
    margin-bottom: 20px;
  }
  .hr {
    border: 1px solid purple;
    width: 30%;
  }
  .img {
    border-radius: 20px 0px 20px 0px;
    aspect-ratio: 4 / 2;
  }
  a,
  .disabled-link {
    text-decoration: none;
    border: 1px solid white;
    border-radius: 5px;
    padding: 5px 10px;
    margin-bottom: 20px;
    color: white;
    background-color: #1d2a44;
    cursor: pointer;
    display: inline-block;
  }
  .disabled-link {
    opacity: 0.6;
    pointer-events: none;
  }
  @media (max-width: 767px) {
    .card {
      width: 80%;
    }
  }
`;

export default Projects;
