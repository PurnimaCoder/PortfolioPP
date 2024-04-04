import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row style={{margin:"0 auto"}}>
          <Col md={7} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I fell in love with programming and I have at least learnt
              something, I think… 🤷‍♂️
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple"> Java, Javascript , Python </b>{" "}and{" "}
                <b className="purple"> SQL </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">Web Applications </b>{" "}and{" "} 
                <b className="purple">Android Application</b> and
                also in areas related to{" "}
                <b className="purple">
                  Artificial Intelligence(AI){" "}
                </b></i>{" "} and{" "}<i>
                <b className="purple">
                  Machine Learning(ML).
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className="purple">Node.js , Java , Kotlin</b> and
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library , Frameworks {" "}
                </b>and
                <b className="purple">
                  {" "}
                   Python Library , frameworks {" "}
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js </b> and <b className="purple"> Django , Tensorflow , Keras , Scikit-Learn , NumPy </b>
              </i>
              <br />
              <p style={{ color: "rgb(155 126 172)", textAlign:"right"}}>
                <br />
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer" style={{textAlign:"right"}}>Purnima</footer>
            </p>
          </Col>
          <Col md={5} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" style={{marginTop:"-70px"}} />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
