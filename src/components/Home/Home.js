import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import Projects from "../Projects/Projects";
import ProjectCards from "../Projects/ProjectCards";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
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
                <strong className="main-name"> Sandeep</strong>
              </h1>
             

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
                <p className="des" style={{textAlign: "justify", wordSpacing: 1, fontSize: 20 }}>
                I am a passionate and innovative web developer, dedicated to crafting exceptional online experiences with a keen eye for detail and a love for turning ideas into reality. I bring a unique blend of creativity and technical expertise to every project from frontend design to backend development, I have comprehensive understanding of the entire web development process.

              </p>
              </div>
            </Col>






            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
           
      <Projects/>
      <Home2 />
    </section>
  );
}

export default Home;
