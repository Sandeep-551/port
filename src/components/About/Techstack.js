import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
  DiGithub,
  DiAws,
  DiMysql,
  DiHtml5,
  DiCss3
} from "react-icons/di";
import { FaAws } from "react-icons/fa";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiSolidity,
  SiPostgresql,
  SiTailwindcss,
  SiMysql,
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>

    <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 />
        <h6>HTML</h6>
        
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 />
        <h6>CSS</h6>
        
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <h6>Javascript</h6>

      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <h6>React.js</h6>

      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs />
        <h6>Next.js</h6>

      </Col>
     
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
        <h6>Python</h6>

      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTailwindcss />
        <h6>Tailwind CSS</h6>
      </Col>

      
    </Row>
  );
}

export default Techstack;
