import { Col, Container, Row } from "react-bootstrap";
import leaf from "../../Assets/Projects/cake.jpeg";
import chatify from "../../Assets/Projects/Task .jpeg";
import editor from "../../Assets/Projects/Trip.jpeg";
import Particle from "../Particle";
import ProjectCard from "./ProjectCards";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="MyAI Trip Planner"
              description="AI-powered trip planner using React, Firebase, Gemini AI, and Google Maps API.
Reduces planning time by 70% with AI-generated itineraries and real-time suggestions."
              ghLink="https://github.com/nishisharma842004/MyAI-Trip-Planner"
              demoLink="https://plan-it-ai-two.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Task Management System"
              description="Full-stack task management app using React.js and Spring Boot.
Includes JWT-based auth, role-based access control, and RESTful APIs with MySQL."
              ghLink="https://github.com/nishisharma842004/Task_Management"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Cake Shop (Hackathon)"
              description="Developed a responsive UI using React.js for a cake shop.
Features include product display, cart functionality, and clean modular code."
              ghLink="https://github.com/nishisharma842004/Cake_web_app"
            />
          </Col>

        

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
