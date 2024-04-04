import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./CertficateCards";
import Particle from "../Particle";
import preleaf from "../../Assets/Projects/Preleaf.png";
import wordpress from "../../Assets/Projects/wordpress.png";
import python from "../../Assets/Projects/python.png";
import it from "../../Assets/Projects/itexpo.jpeg";
import acer from "../../Assets/Projects/Acer.png";
import google from "../../Assets/Projects/google.png";
import allay from "../../Assets/Projects/allay.png";
import music from "../../Assets/Projects/music.png";
import games from "../../Assets/Projects/game.png";
import gita from "../../Assets/Projects/gita.png";
import doctor from "../../Assets/Projects/doctor.png";

function Certificate() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Achievement & <strong className="purple">Certificates </strong>
        </h1>
        {/* <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p> */}
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={it}
              isBlog={false}
              title="Winner of IT-Expo 2023 Odisha in Health Tech Management"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={google}
              isBlog={false}
              title="Certificate of Active Participation in Google Workshop"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={python}
              isBlog={false}
              title="Python Project Complition from Coursera"             
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={preleaf}
              isBlog={false}
              title="Certificate of Participation in 5 days Coding Carnival"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={acer}
              isBlog={false}
              title="Certificate of Active Participation in Acer Workshop"
              
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={wordpress}
              isBlog={false}
              title="Certificate of Sucessfull Complition of Wordpress Project"     
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Certificate;
