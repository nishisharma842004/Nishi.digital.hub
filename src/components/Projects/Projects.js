import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
              title="Cake-Shop"
              description="The Cake Shop Project is an interactive web application designed for an online cake store. It allows users to browse different cakes, view detailed descriptions, place orders, and make payments seamlessly. The platform provides a user-friendly interface with features such as user authentication, a shopping cart, and an order tracking system.

Key Features:

🎂 User Authentication (Login/Signup)
🛒 Shopping Cart & Checkout
🍰 Cake Categories & Filters
💳 Online Payment Integration
📦 Order Management & Tracking
🔍 Search Functionality

Technologies Used:

Frontend: HTML, CSS, JavaScript, React.js
Backend: Node.js, Express.js
Database: MongoDB
."
              ghLink="https://github.com/impragyaverma/Cake-Shop"
              demoLink="https://vishucakeshop.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Online-Job-Portal"
              description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              ghLink="https://github.com/impragyaverma/OnlineCareer"
              demoLink="https://online-career.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Health-Care-Website"
              description="The Online Job Portal is a web application designed to connect job seekers with employers. It provides a seamless platform for users to search for jobs, apply for positions, and manage applications. Employers can post job listings, review applicants, and communicate with potential hires. The platform offers advanced filtering and categorization to enhance the job search experience.

Key Features:

📂 User Authentication (Job Seeker & Employer Login)
🔍 Advanced Job Search & Filters
📝 Resume Upload & Profile Management
📢 Job Posting & Management for Employers
📬 Application Tracking & Status Updates
📨 Email Notifications for New Jobs & Applications

Technologies Used:

Frontend: HTML, CSS, JavaScript, React.js
Backend: Node.js, Express.js
Database: MongoDB
Deployment: Firebase / Vercel"
              ghLink="https://github.com/impragyaverma/health-care"
              demoLink="https://health-care-eb613.web.app"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="calculator"
              description="The Calculator is a simple and user-friendly web application that performs basic arithmetic operations. It provides an interactive interface where users can perform calculations like addition, subtraction, multiplication, and division. The application ensures smooth user experience with real-time updates and a responsive design.

Key Features:

🧮 Basic Arithmetic Operations (Addition, Subtraction, Multiplication, Division)
🎨 User-Friendly & Responsive Design
⌨️ Keyboard Input Support
🖥️ Clear & Backspace Functionality
🌙 Light/Dark Mode (Optional)

Technologies Used:

Frontend: HTML, CSS, JavaScript
Logic Implementation: JavaScript (Vanilla JS / React.js."
              ghLink="https://github.com/impragyaverma/cal-react"
              demoLink="https://impragyaverma.github.io/cal-react/"
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
