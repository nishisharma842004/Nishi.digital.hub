import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import bitsOfCode from "../../Assets/Projects/blog.png";
import chatify from "../../Assets/Projects/chatify.png";
import editor from "../../Assets/Projects/codeEditor.png";
import leaf from "../../Assets/Projects/leaf.png";
import Particle from "../Particle";
import ProjectCard from "./ProjectCards";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Task Manageent"
              description="Created a task management app with React front-end and Spring Boot back-end.
 • Integrated REST APIs for task CRUD operations and user authentication.
 • Focused on engineering a high-performance solution with optimized UI for seamless user experience.

Key Features:

🎂 User Authentication (Login/Signup)
🍰 Cake Categories & Filters
🔍 Search Functionality

Technologies Used:

Frontend: HTML, CSS, JavaScript, React.js
Backend: Node.js, Express.js
Database: Mysql
."
              ghLink="https://github.com/nishisharma842004/Task_Management"
             
            />
          </Col>

          <Col md={4} className="Spam Detection">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title=" App"
              description="For detecting The mail is spam or Ham"
              ghLink="https://colab.research.google.com/drive/10rzAkJmnlDU1wzQsGZ_NRNf4LHYFuJct##scrollTo=3FHZ3uFLLcTm"
              
            />
          </Col>

          <Col md={4} className="GFG Hackathon">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Weather App"
              description=" • Designed a weather app using HTML, CSS, JavaScript, and Weather API.
 • Delivered a functional prototype within 48 hours, integrating location-based APIs for real-time updates.
 • Demonstrated abilities as a software engineer in rapid prototyping under time constraints.:




Deployment: Firebase / Vercel"
              ghLink="https://github.com/nishisharma842004/Whether-application/tree/main/Wheather%20app"
             
            />
          </Col>

          <Col md={4} className="Operation Scheduler">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="APP"
              description="Created a app for Hospital Management.



Technologies Used:

Frontend: HTML, CSS, JavaScript
Logic Implementation: JavaScript (Vanilla JS / React.js."
              ghLink="https://github.com/nishisharma842004/Operation-Scheduler"
           
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
