import React from "react";
import Head from "next/head";
import { Nav, Button, Row, Container, input, Col, Navbar, FormSelect,Form} from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../assets/logo.svg";
import { useRouter } from "next/router";
import styles from "../../../styles/Home.module.css";
// import blogPosts from "../../../pages/assets/posts.json";
// import BlogCard from "../../../pages/components/BlogCard";

// import Link from 'next/link';

const path = [
  // { uid: 21, name: " Home", id: 1, path: "/" },
  { uid: 41, name: "About us", id: 3, path: "/About" },
  { uid: 52, name: "Investing", id: 5, path: "/Investing" },
  { uid: 51, name: "Projects", id: 4, path: "/Projects" },
  { uid: 31, name: "Blog", id: 2, path: "/Blog" },
  { uid: 61, name: "Contact", id: 6, path: "/Contact" },
];
function Header() {
  function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
 }
 
 const { locale, locales, asPath } = useRouter();

  return (
    
    <div>
      <Head>
        <title>Apart</title>
        <meta name="description" content="A demo about NextJS and Bootstrap 5" />
      </Head>
      <Container className="mobile_menu">
      <section className="top-nav">
    <div>
  
    <Link href="/" className="cursor">
              <a className="navbar-brand">
                <Image src={Logo} alt="Picture of the author" />
              </a>
    </Link>
    </div>
    <input id="menu-toggle" type="checkbox" />
    <label className='menu-button-container' htmlFor="menu-toggle">
    <div className='menu-button'></div>
  </label>
    <ul className="menu">
      <li className="nav-item text-nowrap">
    <Link className="nav-link text-white" href="/About">
    <p className="nav-link text-white">
    About us
      </p>
      </Link>
    </li>
    <li className="nav-item text-nowrap">
    <Link className="nav-link text-white" href="/Investing">
    
    <p className="nav-link text-white">
    Investing
      </p>
      </Link>
    </li>
    <li className="nav-item text-nowrap">
    <Link className="nav-link text-white" href="/Projects">
    <p className="nav-link text-white">
    Projects
      </p>
   
      </Link>
    </li>
    <li className="nav-item text-nowrap">
    <Link  href="/Blog">
      <p className="nav-link text-white">
      Blog
      </p>
   
      </Link>
    </li>
    <li className="nav-item text-nowrap">
    <Link className="nav-link text-white" href="/Contact" >
    <p className="nav-link text-white">
    Contact
      </p>
      </Link>
    </li>
    <li>
    </li>
      <li >
      <FormSelect className="Language__select text-white">
        <option>ENG</option>
        <option>Geo</option>
      </FormSelect>
    </li>
    <li className="nav-item text-nowrap">
      <a className="nav-link text-white">
        +995 32 2 11 11 44
      </a>
    </li>
    <li className="nav-item text-nowrap">
    <a className="nav-link text-white">
    Viber
      </a>
    </li>
    <li className="nav-item text-nowrap">
    <a className="nav-link text-white" >
    Whatsapp
      </a>
    </li>
    </ul>

  </section>
      </Container>
      <Container className="desktop_Menu">
        <Row >
          <Col xs="2" lg="2" md="2" sm="2" xl="2" xxl="2">
            <Link href="/">
              <a className="navbar-brand">
                <Image src={Logo} alt="Picture of the author" />
              </a>
            </Link>
          </Col>
          <Col xs="7" lg="7" md="7" sm="7" xl="7" xxl="7" className="d-flex justify-content-center">
            <Navbar  >
            <div >
                <main>
                  <div >
                    {locales.map((l, i) => {
                      return (
                        <span key={i} className={l === locale ? styles.selected : ""}>
                          <Link href={asPath} locale={l}>
                            {l}
                          </Link>
                        </span>
                      );
                    })}
                  </div>
                  <div>
                  </div>
                </main>
              </div>
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
          <Col xs="3" lg="3" md="3" sm="3" xl="3" xxl="3" className="d-flex justify-content-end align-items-center">
            <ul className="navbar-nav ">
            
              <li className="nav-item text-nowrap d-flex">
                <FormSelect className="Language__select">
                  <option>ENG</option>
                  <option>Geo</option>
                </FormSelect>
              </li>
              <li className="nav-item text-nowrap">
              <Form>
                <Form.Check  onClick={myFunction}
                  type="switch"
                  id="custom-switch"
                />
              </Form>
              </li>
            </ul>
            <ol className="d-flex navbar-nav mr-auto custom_ol align-items-center">
              <li className="nav-item text-nowrap">
                <a className="nav-link">
                  +995 32 2 11 11 44
                </a>
              </li>
              <li className="nav-item text-nowrap">
              <a className="nav-link">
              Viber
                </a>
              </li>
              <li className="nav-item text-nowrap">
              <a className="nav-link">
              Whatsapp
                </a>
              </li>
            </ol>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Header;
