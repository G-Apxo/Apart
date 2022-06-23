import React from "react";
import { Nav, Button, Row, Container, input, Col } from "react-bootstrap";
import Image from "next/image";
import Img from "../../../assets/logo.svg";
import Link from "next/link";
const path = [
  { uid: 31, name: "Blog", id: 2, path: "Blog" },
  { uid: 41, name: "About us", id: 3, path: "About" },
  { uid: 51, name: "Projects", id: 4, path: "Projects" },
  { uid: 51, name: "Investing", id: 5, path: "Investing" },
  { uid: 61, name: "Contact", id: 6, path: "Contact" },
];
function Footer_white() {
  return (
    <div className="footer-outside-white mt-60">
      <div className="footer-inside-white mt-60">
        <Container>
          <Row>
            <Col md={2}>
              <p className="copyright">&copy; Apart Development, all rights reserved</p>
            </Col>
            <Col md={2}>
              <p className="policy">Policy regarding the processing of personal data</p>
            </Col>
            <Col md={2}>
              <p className="infos--white">
                <a>+995 544 44 44 31</a>
              </p>
              <p className="infos--white">
                <a>info@apart.ge</a>
              </p>
            </Col>
            <Col md={2}>
              <div className="box">
                <p className="social">Facebook</p>
                <p className="social">Instagram</p>
                <p className="social">Youtube</p>
                <p className="social">Pinterest</p>
              </div>
            </Col>

            <Col md={4}>
              <p className="languages">geo /eng / rus</p>
              <p className="languages">Terms and Conditions</p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
export default Footer_white;
