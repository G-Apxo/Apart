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
const Projectsmap = () => {
  return (
    <div>
      <Container className="mb-60 mt-60">
        <Row>
          <Col xs="12" lg="2" md="2" sm="2" xl="2" xxl="2">
            <p className="home--section__texts">Projects Map</p>
          </Col>
          <Col xs="12" lg="10" md="10" sm="10" xl="10" xxl="10">
            <iframe
              src="https://snazzymaps.com/embed/408105"
              width="100%"
              height="600px"
              // style="border:none;"
            ></iframe>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Projectsmap;
