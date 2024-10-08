import React, { useState, useRef, useEffect } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import styled from "styled-components";
import { FaGithubAlt, FaLinkedin, FaInstagram } from "react-icons/fa";

import "bootstrap/dist/css/bootstrap.min.css";

function Navbar() {
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setActiveMenu(""); 
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  const [toggle, setToggle] = useState(false);
  const menuRef = useRef(null);
  const [activeMenu, setActiveMenu] = useState("");
  const handleMenuClick = (menu) => {
    setActiveMenu(menu);  
    setToggle(false);     
  };
  useEffect(() => {
    if (toggle) {
      menuRef.current.style.height = `${menuRef.current.scrollHeight}px`;
    } else {
      menuRef.current.style.height = "0px";
    }
  }, [toggle]);

  return (
    <>
      <Header togglemenu={toggle}>
        <Container fluid className="navigation pb-sm-3">
          <Row className="mx-2 ">
            <Col
              xs={12}
              sm={7}
              md={3}
              lg={3}
              className="mt-4 text-center text-sm-start logo"
              onClick={() => {
                setToggle(!toggle);
                console.log(toggle);
              }}
            >
              <Image src="Imgs/logo (1).png" alt="Logo" className="logoimg" fluid />{" "}
              <br className="d-sm-none" />
              <span className="">Mohsin Munir</span>
            </Col>
            <Col md={6} lg={5} className="d-md-block d-none mt-4">
              <Row className="justify-content-around mt-2">
                <span className="d-flex justify-content-between menus">
                  <a
                    href="#projects"
                    className={activeMenu === "Projects" ? "active" : ""}
                    onClick={() => handleMenuClick("Projects")}
                  >
                    Projects
                  </a>
                  <a
                    href="#skills"
                    className={activeMenu === "Technologies" ? "active" : ""}
                    onClick={() => handleMenuClick("Technologies")}
                  >
                    Technologies
                  </a>
                  <a
                    href="#about"
                    className={activeMenu === "About Me" ? "active" : ""}
                    onClick={() => handleMenuClick("About Me")}
                  >
                    About
                  </a>
                  <a
                    href="#contact"
                    className={activeMenu === "Contact Us" ? "active" : ""}
                    onClick={() => handleMenuClick("Contact Us")}
                  >
                    Contact Us
                  </a>
                </span>
              </Row>
            </Col>
            <Col xs={4} md={3} lg={4} className="mt-sm-4 offset-md-0 offset-1">
              <Row className="text-end">
                <Col className=" text-end">
                  <span className="d-sm-block d-none social">
                    <a
                      href="https://github.com/raja-mohsin1521"
                      target="_blank"
                    >
                      <FaGithubAlt />
                    </a>
                    <a
                      className="mx-3"
                      href="https://www.linkedin.com/in/mohsin-munir-b29099262/"
                      target="_blank"
                    >
                      <FaLinkedin />
                    </a>
                    <a
                      href="https://www.instagram.com/raja_mohsin1521/"
                      target="_blank"
                    >
                      <FaInstagram />
                    </a>{" "}
                  </span>
                </Col>
              </Row>
            </Col>
          </Row>

          <Row className="text-center toggle-menu d-md-none" ref={menuRef}>
            <Col className="mt-4">
              <ul>
                <li>
                  <a
                    href="#projects"
                    className={activeMenu === "Projects" ? "active" : ""}
                    onClick={() => handleMenuClick("Projects")}
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href="#skills"
                    className={activeMenu === "Technologies" ? "active" : ""}
                    onClick={() => handleMenuClick("Technologies")}
                  >
                    Technologies
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className={activeMenu === "About Me" ? "active" : ""}
                    onClick={() => handleMenuClick("About Me")}
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className={activeMenu === "Contact Us" ? "active" : ""}
                    onClick={() => handleMenuClick("Contact Us")}
                  >
                    Contact Us
                  </a>
                </li>

                <li className="d-sm-none ">
                  <span className=" social">
                    <a
                      href="https://github.com/raja-mohsin1521"
                      target="_blank"
                    >
                      <FaGithubAlt />
                    </a>
                    <a
                      className="mx-3"
                      href="https://www.linkedin.com/in/mohsin-munir-b29099262/"
                      target="_blank"
                    >
                      <FaLinkedin />
                    </a>
                    <a
                      href="https://www.instagram.com/raja_mohsin1521/"
                      target="_blank"
                    >
                      <FaInstagram />
                    </a>{" "}
                  </span>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </Header>
    </>
  );
}
const Header = styled.div`
.logoimg{
  transform: ${(props) => (props.togglemenu ? "rotate(360deg)" : "rotate(0deg)")};
  transition: all 0.8s;
}

.active{
  color: #a3a1a16c;
}
  .navigation {
    background-color: #0b111d;
  }
  .logo span {
    font-size: 100%;
    font-weight: 500;
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
      sans-serif;
    color: white;
    margin-left: 10px;
  }
  ul {
    margin: 0px;
    padding: 0px;
  }
  ul li a:hover,
  span a:hover {
    text-decoration: dotted;
    font-weight: 500;
  }
  a {
    color: white;
    text-decoration: none;
  }

  .toggle-menu {
   
    height: ${(props) => (props.togglemenu ? "fit-content" : "0px")};
    transition: height 0.5s ease;
    background-color: #0b111d;
    overflow: hidden;
  }
  .toggle-menu li {
    padding: 15px 0px;
    list-style: none;
  }
  .toggle-menu li:nth-child(even) a {
    position: relative;
    left: ${(props) => (props.togglemenu ? "0px" : "-300px")};
    transition: all 0.8s ease;
  }
  .toggle-menu li:nth-child(odd) a {
    position: relative;
    right: ${(props) => (props.togglemenu ? "0px" : "-300px")};
    transition: all 0.8s ease;
  }
  .social {
    font-size: 130%;
  }
`;

export default Navbar;
