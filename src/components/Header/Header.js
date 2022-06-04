import React from "react";
import Head from "next/head";
import { Nav, Button, Row, Container, input, Col, Navbar, FormSelect } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../../assets/logo.svg";

// import Link from 'next/link';

const path = [
  // { uid: 21, name: " Home", id: 1, path: "/" },
  { uid: 41, name: "About us", id: 3, path: "/About" },
  { uid: 52, name: "Investing", id: 5, path: "/Investing" },
  { uid: 51, name: "Projects", id: 4, path: "/Projects" },
  { uid: 31, name: "Blog", id: 2, path: "/Blog" },

  { uid: 61, name: "Contact", id: 6, path: "/Contact" },
  // { uid: 62, name: "SingleBlog", id: 6, path: "/SingleBlog" },
  // { uid: 63, name: "ProjectsFloor", id: 7, path: "/ProjectsFloor" },
  // { uid: 64, name: "ProjectsFloorSelector", id: 8, path: "/ProjectsFloorSelector" },
];
function Header() {
  return (
    <div>
      <Head>
        <title>Apart</title>
        <meta name="description" content="A demo about NextJS and Bootstrap 5" />
      </Head>
      <Container>
        <Row>
          <Col xs="2">
            <Link href="/">
              <a className="navbar-brand">
                <Image src={Logo} alt="Picture of the author" />
              </a>
            </Link>
          </Col>
          <Col xs="8" className="d-flex justify-content-center">
            <Navbar>
              <ul className="navbar-nav mr-auto">
                {path.map(value => {
                  return (
                    <li key={value.uid} className="nav-item active">
                      <Link href={value.path}>
                        <a className="nav-link"> {value.name} </a>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </Navbar>
          </Col>
          <Col xs="2" className="d-flex justify-content-end align-items-center">
            <ul className="navbar-nav ">
              <li className="nav-item text-nowrap">
                <FormSelect className="Language__select">
                  <option>ENG</option>
                  <option>Geo</option>
                </FormSelect>
              </li>
              <li className="nav-item text-nowrap">
                {/* <div className="form-check form-switch">
        <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked/>
      </div> */}
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Header;
