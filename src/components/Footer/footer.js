import React from "react";
import { Nav, Button, Row, Container, input } from "react-bootstrap";
import Image from "next/image";
import Img from "../../../assets/footer-logo.svg";
import Link from "next/link";
const path = [
  { uid: 31, name: "Blog", id: 2, path: "Blog" },
  { uid: 41, name: "About us", id: 3, path: "About" },
  { uid: 51, name: "Projects", id: 4, path: "Projects" },
  { uid: 51, name: "Investing", id: 5, path: "Investing" },
  { uid: 61, name: "Contact", id: 6, path: "Contact" },
];
function footer() {
  return (
    <div className="footer-outside">
      <div className="footer-inside-black mt-60">
        <Container fluid className="footer-container">
          <Row>
            <div className="col-lg-3"></div>
            <div className="col-lg-6 footer-logo">
              <Image src={Img} alt="Logo" />
            </div>
            <div className="col-lg-3">
              <ul className="languages">
                <li>
                  <a>
                    <p>GEO /</p>
                  </a>
                </li>
                <li>
                  <a>
                    <p>
                      {" "}
                      <span className="active">ENG</span> /
                    </p>
                  </a>
                </li>
                <li>
                  <a>
                    <p>RUS /</p>
                  </a>
                </li>
              </ul>
            </div>
          </Row>
          <Row className="footer-info">
            <div className="col-lg-3">
              <ul className="footer-info-ul">
                <p className="footer-info-title">COMPANY</p>
                <li>ABOUT</li>
                <li>BLOG</li>
                <li>JOIN US</li>
              </ul>
            </div>
            <div className="col-lg-3">
              <nav>
                <ul className="footer-info-ul">
                  <p className="footer-info-title">PRODUCTS</p>
                  {path.map(value => {
                    return (
                      <li key={value.uid}>
                        <Link href={value.path}>
                          <a className="Nav__a"> {value.name} </a>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </div>
            <div className="col-lg-3">
              <ul className="footer-info-ul">
                <p className="footer-info-title">INDUSTRIES</p>
                <li>STARTUPS</li>
                <li>CAPITAL</li>
                <li>EQUILITY</li>
              </ul>
            </div>
          </Row>
          <Row>
            <div className="footer-terms">
              <p className="footer--terms__mod">
                All rights reserved. The copyright notice generally consists of three elements
              </p>
              <a>
                <p className="footer--terms__terms__mod">Terms and Conditions</p>
              </a>
            </div>
          </Row>
        </Container>
      </div>
    </div>
  );
}
export default footer;
