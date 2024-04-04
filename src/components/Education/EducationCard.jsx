import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function EducationCard(props) {
  return (
    <Card className="education-card-view" >
      <div className="edu-imgg">
      <Card.Img variant="top" src={props.imgPath} alt="card-img"  />
      </div>
      <Card.Body>
        <Card.Title className="purple" style={{textAlign:"left"}}>{props.title}</Card.Title>
        <br />
        <Card.Text style={{ textAlign: "justify" }}>
          <span style={{width:"100%",display:"flex",justifyContent:"space-between",alignItems:'center'}}>{props.description}<span><i>{props.place}</i></span></span>
          <span style={{width:"100%",display:"flex",justifyContent:"space-between",alignItems:'center'}}><span>CGPA : <i><b className="purple">{props.cgpa}</b></i></span>
          <span style={{textAlign:"right"}}><i>{props.duration}</i></span>
          </span>
        </Card.Text>
        
        {"\n"}
        {"\n"}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

        
      </Card.Body>
    </Card>
  );
}
export default EducationCard;
