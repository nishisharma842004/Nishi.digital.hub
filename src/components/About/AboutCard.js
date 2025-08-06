import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Nishi Sharma DSA-( Mentor at GDG Society IGDTUW) </span>
            from <span className="purple"> Delhi, India.</span>
            <br />
            I am currently pursuing my B.Tech in Mechanical and Automation Engineering at Indira Gandhi Delhi Technical University For Women (IGDTUW) and am a Web Development Intern at Celebal Technology.
           
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Singing
            </li>
            <li className="about-activity">
              <ImPointRight /> Chess Playing
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Books
            </li>
            <li className="about-activity">
              <ImPointRight /> Interacting with new people
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Nishi</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
