import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.png";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import "./stars.scss"
import About from "../About/About";
import Projects from "../Projects/Projects";
import Education from "../Education/Education";
import Certificate from "../Certificates/Certificate";
import Experience from "../Experience/Experience";
import ContactForm from "../Contact/ContactForm";
// import LeftSocialMenu from "../LeftSocialMenu";

function Home() {
  return (
    <>
    
    <section>
    
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
            <div id="stars"  style={{position:"absolute",zIndex:"-1"}}/>
            <div id="stars2" style={{position:"absolute",zIndex:"-1"}}/>
            <div id="stars3" style={{position:"absolute",zIndex:"-1"}}/>
          {/* <div className="left-social-menu">
            <LeftSocialMenu />
          </div> */}
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> PURNIMA PANDA</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <h4 >I am from <span className="purple"> Bhubaneswar, India.</span>
            <br /> I am a 3rd year student pursuing B.Tech in CSE in GITA Autonomous College , BBSR.
          Additionally, I am a</h4>
                <Type />     
              </div>
            </Col>

            <Col md={5} style={{position:"relative",zIndex:"200 !important" }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{maxHeight: "500px" ,position:"relative",zIndex:"200 !important",marginTop:20}}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <div style={{marginTop:"-4rem"}}>
      <Home2 />
      </div>
      <div style={{marginTop:"-4rem"}}>
      <About />
      </div>
      <div style={{marginTop:"-4rem"}}>
      <Experience />
      </div>
      <div style={{marginTop:"-4rem"}}>
      <Projects />
      </div>
      <div style={{marginTop:"-4rem"}}>
      <Education />
      </div>
      <div style={{marginTop:"-4rem"}}>
      <Certificate />
      </div>
      <ContactForm />
    </section>
    </>
  );
}

export default Home;
