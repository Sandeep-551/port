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
  DiGithub
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiSolidity,
  SiPostgresql,
  SiTailwindcss,
  SiExpress,
  SiMysql
} from "react-icons/si";

import {
    FaAws
  } from "react-icons/fa";
import { TbBrandGolang } from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      
      
      
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
        <h6>Mongodb</h6>

      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <DiGithub />
        <h6>Github</h6>

      </Col>
      
      
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql />
        <h6>Postgresql</h6>

      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <FaAws />
        <h6>Amazon Web Server</h6>

      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
        <h6>Mysql</h6>

      </Col>

    </Row>
  );
}

export default Techstack;
