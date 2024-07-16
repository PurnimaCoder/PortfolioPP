import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./EducationCard";
import Particle from "../Particle";
import fakir from "../../Assets/Projects/fakir.jpg";
import govt from "../../Assets/Projects/govt.jpg";
import gitalogo from "../../Assets/Projects/gitalogo.jpg";

function Education() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Education </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are my education details.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={12} className="project-card">
            <ProjectCard
              imgPath={gitalogo}
              isBlog={false}
              title="B.Tech In Computer Science and Engneering(CSE)"
              description="Gandhi Institute Of Technogical Advancement , Bhubaneswar"
              place="Bhubaneswar , India"
              cgpa="9.8/10"
              duration="June 2021 - May 2025"
            />
          </Col>


{/*           <Col md={12} className="project-card">
            <ProjectCard
              imgPath={govt}
              isBlog={false}
              title="12th in Science (PCMS)"
              description="Government Jr. College , Rourkela"
              place="Rourkela , India"
              cgpa="76%"
              duration="June 2019 - May 2021"        
            />
          </Col> */}

{/*           <Col md={12} className="project-card">
            <ProjectCard
              imgPath={fakir}
              isBlog={false}
              title="10th or Matriculation"
              description="Fakir Mohan Bidyapitha"
              place="Sundergarh , India"
              cgpa="89.5%"
              duration="May 2019"   
            />
          </Col> */}
          
        </Row>
      </Container>
    </Container>
  );
}

export default Education;
