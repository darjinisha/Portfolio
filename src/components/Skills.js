import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaBootstrap,
  FaGithub,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiNodedotjs,
  SiExpress,
} from "react-icons/si";

const skills = [
  { icon: <FaHtml5 size={40} color="#e34c26" />, name: "HTML5" },
  { icon: <FaCss3Alt size={40} color="#264de4" />, name: "CSS3" },
  { icon: <FaJs size={40} color="#f0db4f" />, name: "JavaScript" },
  { icon: <FaReact size={40} color="#61dafb" />, name: "React" },
  { icon: <FaBootstrap size={40} color="#563d7c" />, name: "Bootstrap" },
  { icon: <SiTailwindcss size={40} color="#38bdf8" />, name: "Tailwind" },
  { icon: <SiNodedotjs size={40} color="#3c873a" />, name: "Node.js" },
  { icon: <SiMongodb size={40} color="#47A248" />, name: "MongoDB" },
];

const Skills = () => {
  return (
    <section id="skills" className="py-5">
      <Container>
        <h2 className="text-center mb-4">My Skills</h2>
        <Row>
          {skills.map((skill, index) => (
            <Col key={index} xs={6} sm={4} md={3} className="mb-4 text-center">
              <Card className="p-3 border-0 shadow-sm h-100">
                <div>{skill.icon}</div>
                <p className="mt-2 mb-0">{skill.name}</p>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Skills;
