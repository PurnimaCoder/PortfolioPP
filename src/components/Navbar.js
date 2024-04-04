import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../Assets/logo.png";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { CgGitFork } from "react-icons/cg";
import { ImBlog } from "react-icons/im";
import sign from "../sign2.png";
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";

import { GiAchievement } from "react-icons/gi";

import { FaGraduationCap , FaBrain } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex">
          <img src={sign} style={{marginTop:"15px", }} className="nav-img-sign"/>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home" style={{marginBottom:"-15px"}}>
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/about"
                onClick={() => updateExpanded(false)}
              >
                <FaBrain style={{ marginBottom: "2px" }} /> Skills
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/education"
                onClick={() => updateExpanded(false)}
              >
                <FaGraduationCap  style={{ marginBottom: "2px" }} /> Education
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/project"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineFundProjectionScreen
                  style={{ marginBottom: "2px" }}
                />{" "}
                Projects
              </Nav.Link>
            </Nav.Item>

            {/* <Nav.Item>
              <Nav.Link
                as={Link}
                to="/resume"
                onClick={() => updateExpanded(false)}
              >
                <CgFileDocument style={{ marginBottom: "2px" }} /> Resume
              </Nav.Link>
            </Nav.Item> */}

            <Nav.Item>
            <Nav.Link
                as={Link}
                to="/certificates"
                onClick={() => updateExpanded(false)}
              >
                <GiAchievement style={{ marginBottom: "2px" }} /> Certificates
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
            <Nav.Link
                as={Link}
                to="/experience"
                onClick={() => updateExpanded(false)}
              >
                <ImBlog style={{ marginBottom: "2px" }} /> Experience
              </Nav.Link>
            </Nav.Item>

           <Nav.Item className="fork-btn">
              <Button
                href="/resume"
                target="_blank"
                className="fork-btn-inner"
                style={{fontSize:"1em"}}
              >
                Resume
              </Button>
            </Nav.Item> 
          </Nav> 
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
