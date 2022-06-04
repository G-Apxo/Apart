import React from "react";
import {
  Nav,
  Button,
  Row,
  Container,
  Col,
  Carousel,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
} from "react-bootstrap";
import Layout from "../src/components/Layout/Layout";
import Slide1 from "../assets/oldcitypanorama.png";
import Vector from "../assets/seeprjvector.png";
import Bukh from "../assets/apart assets/projects/Frame154.png";

import Image from "next/image";
const Projects = () => {
  return (
    <Layout>
      <Container className="projects-title-distance">
        <Row>
          <h3 className="text-center">PROJECTS</h3>
        </Row>
      </Container>
      <Container className="container-borderer">
        <Row>
          <Col xs="3">
            <div className="mb-5 projects--title">
              <p>Done</p>

              <h3>
                OLD CITY <br /> PANORAMA
              </h3>
            </div>
            <div className="projects--legend__top projects--texts__basics">
              <p className="projects--texts__op">Location</p>
              <h3 className="project--location__mod projects--texts__basics">Tbilisi,georgia,bukhaidze 6a</h3>
            </div>
            <div className="projects--legend__bot">
              <p className="projects--texts__op">Create date</p>
              <h3 className="projects--texts__basics">2022</h3>
            </div>
            <div>
              <i className="project--see">
                See Projects <Image src={Vector} />
              </i>
            </div>
          </Col>
          <Col xs="9">
            <Carousel style={{ opacity: 1 }}>
              <Carousel.Item className="fuul__width">
                <Image src={Slide1} alt="banner immage" />
              </Carousel.Item>
              <Carousel.Item className="fuul__width">
                <Row>
                  <Image src={Slide1} alt="banner immage" />
                </Row>
              </Carousel.Item>
              <Carousel.Item className="fuul__width">
                <Row>
                  <Image src={Slide1} alt="banner immage" />
                </Row>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
      <Container className="container-borderer">
        <Row>
          <Col xs="3">
            <div className="mb-5 projects--title">
              <p>Done</p>

              <h3>Bukhaidze</h3>
            </div>
            <div className="projects--legend__top projects--texts__basics">
              <p className="projects--texts__op">Location</p>
              <h3 className="project--location__mod projects--texts__basics">Tbilisi,georgia,bukhaidze 6a</h3>
            </div>
            <div className="projects--legend__bot">
              <p className="projects--texts__op">Create date</p>
              <h3 className="projects--texts__basics">2022</h3>
            </div>
            <div>
              <i className="project--see">
                See Projects <Image src={Vector} />
              </i>
            </div>
          </Col>
          <Col xs="9">
            <Carousel style={{ opacity: 1 }}>
              <Carousel.Item className="fuul__width">
                <Image src={Bukh} alt="banner immage" />
              </Carousel.Item>
              <Carousel.Item className="fuul__width">
                <Row>
                  <Image src={Bukh} alt="banner immage" />
                </Row>
              </Carousel.Item>
              <Carousel.Item className="fuul__width">
                <Row>
                  <Image src={Bukh} alt="banner immage" />
                </Row>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
      <Container className="container-borderer">
        <Row>
          <Col xs="3">
            <div className="mb-5 projects--title">
              <p>Done</p>

              <h3>
                OLD CITY <br /> PANORAMA
              </h3>
            </div>
            <div className="projects--legend__top projects--texts__basics">
              <p className="projects--texts__op">Location</p>
              <h3 className="project--location__mod projects--texts__basics">Tbilisi,georgia,bukhaidze 6a</h3>
            </div>
            <div className="projects--legend__bot">
              <p className="projects--texts__op">Create date</p>
              <h3 className="projects--texts__basics">2022</h3>
            </div>
            <div>
              <i className="project--see">
                See Projects <Image src={Vector} />
              </i>
            </div>
          </Col>
          <Col xs="9">
            <Carousel style={{ opacity: 1 }}>
              <Carousel.Item className="fuul__width">
                <Image src={Slide1} alt="banner immage" />
              </Carousel.Item>
              <Carousel.Item className="fuul__width">
                <Row>
                  <Image src={Slide1} alt="banner immage" />
                </Row>
              </Carousel.Item>
              <Carousel.Item className="fuul__width">
                <Row>
                  <Image src={Slide1} alt="banner immage" />
                </Row>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
      <Container className="container-borderer">
        <Row>
          <Col xs="3">
            <div className="mb-5 projects--title">
              <p>Done</p>

              <h3>
                OLD CITY <br /> PANORAMA
              </h3>
            </div>
            <div className="projects--legend__top projects--texts__basics">
              <p className="projects--texts__op">Location</p>
              <h3 className="project--location__mod projects--texts__basics">Tbilisi,georgia,bukhaidze 6a</h3>
            </div>
            <div className="projects--legend__bot">
              <p className="projects--texts__op">Create date</p>
              <h3 className="projects--texts__basics">2022</h3>
            </div>
            <div>
              <i className="project--see">
                See Projects <Image src={Vector} />
              </i>
            </div>
          </Col>
          <Col xs="9">
            <Carousel style={{ opacity: 1 }}>
              <Carousel.Item className="fuul__width">
                <Image src={Slide1} alt="banner immage" />
              </Carousel.Item>
              <Carousel.Item className="fuul__width">
                <Row>
                  <Image src={Slide1} alt="banner immage" />
                </Row>
              </Carousel.Item>
              <Carousel.Item className="fuul__width">
                <Row>
                  <Image src={Slide1} alt="banner immage" />
                </Row>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};
export default Projects;
