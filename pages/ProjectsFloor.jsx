import React from "react";
import { Nav, Button, Row, Container, input, Col, Navbar, FormSelect } from "react-bootstrap";
import Image from "next/image";
import Taghi from "../assets/taghi.svg";
import Bukhaidze from "../assets/cover.svg";
import Layout from "../src/components/Layout/Layout";
import { Form } from "react-bootstrap";

const ProjectsFloor = () => {
  return (
    <Layout>
      <Container>
        <Row className="mt-5">
          <Col xs="2">
            <p>Go back</p>
          </Col>
        </Row>
        <Row className="justify-content-between mt-5">
          <Col xs="2">
            <Image src={Taghi} />
          </Col>
          <Col xs="3">
            <h2>Choose Apartment</h2>
          </Col>
        </Row>
        <Row className="justify-content-between mt-5">
          <Col xs="2">
            <hr />
            <p>Tree’s planted</p>
            <h3>132</h3>
          </Col>
          <Col xs="3">
            <hr />
            <p>exhibition spaces</p>
            <h3>3245 m2</h3>
          </Col>
          <Col xs="4">
            <h3>Chose Apartment</h3>
            <Form.Select aria-label="Default select example">
              <option>Chose floor 1-10</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          </Col>
        </Row>
        <Col xs="12" className="mt-5">
          <Image src={Bukhaidze} />
        </Col>
        <Row className="justify-content-between mt-5">
          <Col xs="3">
            <hr />
          </Col>
          <Col xs="3">
            <hr />
          </Col>
        </Row>
        <Row className=" mt-5 form-row">
          {/* <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="text" placeholder="Name" />
            <Form.Control type="mail" placeholder="Email" />
            <Form.Control type="tel" placeholder="+( ___ )     Phone number" required />
            <Form.Control type="text" placeholder="Name" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button> */}

          <form action="/send-data-here" method="post">
            <label for="name"></label>
            <input type="text" id="name" name="name" placeholder="Name" />
            <label for="email"></label>
            <input type="mail" id="email" name="email" placeholder="Email" />
            <label for="tel"></label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="+( ___ )     Phone number"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              required
            />
            <button type="submit">Submit</button>
          </form>
        </Row>
        <Row className="justify-content-between">
          <Col xs="5">
            <h3>About this project</h3>
            <p>
              started new project OLD CITY PANORAMA whitch is different and special poject in Tbilisi. Project
              perfectly suits the architectural style of Old Tbilisi, It is located on Bukhaidze Street, in
              the historical part of Tbilisi. Our goal is to match the exterior of the project perfectly with
              the wider city planning, which is why the Old City Panorama project includes three buildings and
              is only eight floors high. The project is also important because it has many sights close to it:
              one of the most important attractions of the city, the Holy Trinity Cathedral, just 250 meters
              away, the historic Metekhi Fortress and Temple, and Narikala and Rike Park.
            </p>
            <Col xs="12">
              <Row>
                <h3>Advantages</h3>
                <Col xs="4">
                  <h5>Fisrt one</h5>
                  <h5>Big brain</h5>
                </Col>
                <Col xs="4">
                  <h5>Fisrt one</h5>
                  <h5>Big brain</h5>
                </Col>
                <Col xs="4">
                  <h5>Fisrt one</h5>
                  <h5>Big brain</h5>
                </Col>
              </Row>
            </Col>
          </Col>
          <Col xs="6">
            <div className="Calculator"></div>
          </Col>
        </Row>
        <Col xs="12" className="mt-5">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2978.8267523333143!2d44.80759311572699!3d41.70267558435236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40440dcf1f317faf%3A0x6ef08f8fb9222cb9!2sApart%20Development!5e0!3m2!1sen!2sge!4v1651489892357!5m2!1sen!2sge"
            width="100%"
            height="450"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </Col>
      </Container>
    </Layout>
  );
};
export default ProjectsFloor;
