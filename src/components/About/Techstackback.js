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
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiSolidity,
  SiPostgresql,
  SiTailwindcss,
  SiExpress,
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      
      
      
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <h6>Node.js</h6>

      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiExpress />
        <h6>Express.js</h6>

      </Col>

    </Row>
  );
}

export default Techstack;
