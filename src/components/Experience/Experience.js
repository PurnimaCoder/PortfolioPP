import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ExperienceCards";
import Particle from "../Particle";
import oji from "../../Assets/Projects/oji.jpeg";

function Experience() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Work <strong className="purple">Experience </strong>
        </h1>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={12} className="project-card">
            <ProjectCard
              imgPath={oji}
              isBlog={false}
              title="Worked as an Intern at OJI Consultancy Private Limited."
              description="Devloped Company's official Real-Estate website i.e 'www.ojiconsultancy.in'. I have devoped both frontend and backend with Database  "
              place="Bhubaneswar , India"
              cgpa="Full Stack Web Devloper"
              duration="15th May 2023 - 1st July 2023"
              internship="Summer Internship"
            />
          </Col>

         
          
        </Row>
      </Container>
    </Container>
  );
}

export default Experience;
