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
              imgPath="https://img.designideas.pics/wp-content/uploads/2015/12/1-1280x1073.jpg?strip=all&lossy=1&quality=80&ssl=1"
              isBlog={false}
              title="Ecommerce(ShopInEase)"
              description=<center>Javascript, Tailwind CSS, Vue, React js.</center>
              ghLink="https://github.com/Sandeep-551/Spotify-Clone.git"
              demoLink="https://spotify-clone-flax-theta.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://i.pinimg.com/originals/24/3a/7e/243a7e62b145852e37c5182466415f5c.png"
              isBlog={false}
              title="Ecommerce(ShopInEase)"
              description=<center>Javascript, Tailwind CSS, Vue, React js.</center>
              ghLink="https://github.com/Sandeep-551/Ecommerce-ShopInEase-.git"
              demoLink="https://shopinease-ecommerce.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://th.bing.com/th/id/OIP.VEr3jJGgQgKtsQ8FU3pqEgAAAA?pid=ImgDet&w=178&h=154&c=7"
              isBlog={false}
              title="AutomatedDownloaded File Segregator"
              description=<center>Python.</center>
              ghLink="https://github.com/Sandeep-551/Automated-Downloaded-File-Segregator.git"
              
            />
          </Col>

        

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
