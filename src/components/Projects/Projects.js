import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import protfolio from "../../Assets/Projects/protfolio.png";
import alumni from "../../Assets/Projects/alumni.png";
import game from "../../Assets/Projects/game.jpeg";
import oji from "../../Assets/Projects/oji.png";
import mental from "../../Assets/Projects/mental.png";
import file from "../../Assets/Projects/file.png";
import allay from "../../Assets/Projects/allay.png";
import music from "../../Assets/Projects/music.png";
import games from "../../Assets/Projects/game.png";
import gita from "../../Assets/Projects/gita.png";
import doctor from "../../Assets/Projects/doctor.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={oji}
              isBlog={false}
              title="Real-Estate Website"
              description="It is a real-estate responsive website. Frontend is made using Node.js , React.js , Material-UI , html , css , scss . Backend is made using Django. Database made on PostgreSQL. Serverside made on Linux using Nginx and Gunicorn. Razorpay Payment gateway is used for payment purpose."
              ghLink="#"
              demoLink="https://ojiconsultancy.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={file}
              isBlog={false}
              title="File-Transfer Application"
              description="It is a Python based File Transfer web application. It can tranfer files very big size files within senonds made using Socket Progammning. It is made using python based libraries such as Tkinter. "
              ghLink="#"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={game}
              isBlog={false}
              title="PP GameZone Android App"
              description="It is Android Game Application. This Game Zone consits of 30 top-notch games from different genere such as Action , Classic , Racing , Mind , Cards etc. It made using Java and Kotlin Class on Android Studio. It contains Ad. Ads are running using Google AdMob."
              ghLink="#"
              demoLink="#"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={protfolio}
              isBlog={false}
              title="Protfolio Website"
              description="This is a Static Protfolio website. This is made using Node.js , React.js , HTML5 , CSS , Scss , JavaScript and Bootstrap. Different type of modern react libraries such react-icons , react-pdf , react-bootstrap , react-parallax-tilt ,react-tsparticles , react-github-calendar , compass , typewritter-effect are used to made this."
              ghLink="#"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mental}
              isBlog={false}
              title="AI & ML based Mental Health Care Application"
              description="This application consits of Self-diagonostic and Self-identifying system with a 24x7 chatbot , medshop and different theraputic activities is made using NLP technique , AI , ML. For frontend Node.js , React.js , Material-ui are used. For Backend Django , Python based AI softwares and PostgreSQL database are used . "
              ghLink="#"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={alumni}
              isBlog={false}
              title="Alumini Website"
              description="This Alumni website is devloped for GITA Autonomous College. It is dynamin website consits of different sections such events , notice board , alumni's contact , referal section , QnA etc made using HTML , CSS , JavaScript. For Backend PHP is used and For database MySQL is used."
              ghLink="#"
              demoLink="#"      
            />
          </Col>

          

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={music}
              isBlog={false}
              title="Music Player"
              description="It is a music player web application. It is mobile responsive.This is made using Node.js , React.js , HTML , scss , JavaScripts . Different type of modern React libraries are used . FontAwesome icons are used to make this beautiful."
              ghLink="#"
              demoLink="#"      
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={allay}
              isBlog={false}
              title="Allay-The virtual therapist"
              description="It is a AI-made Chatbot act as a virtual therapist for mental persons. It is made by using Natural Language Processing (NLP) , Artificial Neuaral Network (ANN) and Deep Learning . The model is trained using Kohonen Self Oraganizing Neural Network algorithm. The softwares that are used to make this are Tensorflow , Keras , NumPy , sklearn , nltk , colorama , flask ,scikit-learn"
              ghLink="#"
              demoLink="#"      
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={games}
              isBlog={false}
              title="Web GameZone"
              description="This is a Static GameZone Web Application. It consits of different type of multiple games. It is made using Node.js , React.js , scss , html , css , JavaScripts . Different type of libraries such react-animated-3d-card , zustand , prop-types , classnames are used."
              ghLink="#"
              demoLink="#"      
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gita}
              isBlog={false}
              title="Gita College Website"
              description="It is a Dynamic College website. Components like sign-up , sign-in , student portal for payment , result check , time tables , notes , notic board , events , placemet drive and  video tour , image gallery , journals , magazines , publications etc are available. It is made using HTML , CSS , JavaScipts , PHP and MySQL "
              ghLink="#"
              demoLink="#"      
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={doctor}
              isBlog={false}
              title="Doctor Appointment for Video & Audio Call"
              description="This is an Doctor Appointment Booking System with video and audio call facility. The frontend is made using Node.js , React.js , HTML , CSS , JavaScripts and Material-UI . Backend is made using Django . For notifications , vidio call and audio call features are integrated with backend using Twilio software."
              ghLink="#"
              demoLink="#"      
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
