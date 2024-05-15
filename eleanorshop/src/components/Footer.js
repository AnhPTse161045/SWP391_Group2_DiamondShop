import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  
AiFillInstagram,
AiFillX,
AiFillFacebook,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {

  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copyright">
          <h3>This is Footer Demo</h3>
        </Col>
        <Col md="4" className="footer-copyright">
          <h3>Copyright© 2024 </h3>
        </Col>
        <Col md="4" className="footer-copyright">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://www.facebook.com/tuan.anh.june11/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillFacebook />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://twitter.com/elonmusk"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillX />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/williamhgates/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/naut_.anh/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;