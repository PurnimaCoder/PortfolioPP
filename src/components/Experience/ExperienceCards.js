import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function EducationCard(props) {
  return (
    <Card className="education-card-view" >
      <div className="edu-img">
      <Card.Img variant="top" src={props.imgPath} alt="card-img"  />
      </div>
      <Card.Body>
        <Card.Title className="purple" style={{textAlign:"left"}}>{props.title}</Card.Title>
        <br />
        <Card.Text style={{ textAlign: "justify" }}>
        <p>Job Role : <i><b className="purple">{props.cgpa}</b></i></p>
          <p>Description : {props.description}</p>
          <p>Place : <i>{props.place}</i></p>
          <p>Duration : <i>{props.duration}</i></p>
          <p>Internship : <i>{props.internship}</i></p>
        </Card.Text>
        
        {"\n"}
        {"\n"}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

        
      </Card.Body>
    </Card>
  );
}
export default EducationCard;
