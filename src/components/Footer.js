import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import linkedIn from "../img/linkedIn.svg";
import github from "../img/github.svg";
import instagram from "../img/instagram.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={20} sm={6}>
            NISHA
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="#">
                <img src={linkedIn} alt="Icon" />
              </a>
              <a href="#">
                <img src={github} alt="Icon" />
              </a>
              <a href="#">
                <img src={instagram} alt="Icon" />
              </a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
