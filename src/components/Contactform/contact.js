import React from "react";
import { Nav, Button, Row, Container, input, Col, Form } from "react-bootstrap";
function contact() {
  return (
    <Container className="container-marginer additional__padding">
      <Row className="justify-content-between">
        <Col xs="12" lg="6" md="6" sm="6" xl="6" xxl="6">
          <Row>
            <Col xs="12" lg="3" md="3" sm="3" xl="3" xxl="3">
              <p className="home--section__texts">About us</p>
            </Col>
            <Col xs="12" lg="6" md="6" sm="6" xl="6" xxl="6">
              <h1 className="section1-title">RENEWED LIFE OF OLD TBILISI</h1>
            </Col>
            <Col xs="12" lg="6" md="6" sm="6" xl="6" xxl="6">
              <p className="section1-subtitle">
                For our team, it is important and a priority to preserve the charm of the old city, to use the
                old architectural fragments in the modern construction, and at the same time to bring new life
                to the forgotten neighborhoods.
              </p>
            </Col>
          </Row>
        </Col>
        <Col xs="12" lg="6" md="6" sm="6" xl="6" xxl="6">
          <Col xs="12" className="col-5 padding-0">
            <p className="section1-form-text">
              Leave us your contact information and our team will reach out to you.
            </p>
            <h4 className="section-1-form-subtext">Apartment type:</h4>
            <Row>
              <Col xs="3">
                <Form>
                  {["checkbox"].map(type => (
                    <div key={`inline-${type}`} className="mb-3">
                      <Form.Check inline label="Studio" name="group1" type={type} id={`inline-${type}-1`} />
                    </div>
                  ))}
                </Form>
              </Col>
              <Col xs="3">
                <Form>
                  {["checkbox"].map(type => (
                    <div key={`inline-${type}`} className="mb-3">
                      <Form.Check
                        inline
                        label="1 Bedroom"
                        name="group1"
                        type={type}
                        id={`inline-${type}-2`}
                      />
                    </div>
                  ))}
                </Form>
              </Col>
              <Col xs="6" className="col-6">
                <Form>
                  {["checkbox"].map(type => (
                    <div key={`inline-${type}`} className="mb-3">
                      <Form.Check
                        inline
                        label="2 and more bedrooms"
                        name="group1"
                        type={type}
                        id={`inline-${type}-2`}
                      />
                    </div>
                  ))}
                </Form>
              </Col>
              <Col className="mb-60">
                <div xs="12" className="mb-md-0 mb-5">
                  <Form id="contact-form" name="contact-form" action="mail.php" method="POST">
                    <Col xs="12">
                      <div className="md-form mb-0">
                        <Form.Control
                          type="text"
                          id="name"
                          name="name"
                          className="form-control input__main"
                          placeholder="Phone"
                        />
                      </div>
                    </Col>
                    <Col xs="12">
                      <div className="md-form mb-0">
                        <Form.Control
                          type="text"
                          id="email"
                          name="email"
                          className="form-control input__main"
                          placeholder="Email"
                        />
                      </div>
                    </Col>
                  </Form>
                  <div className="text-center text-md-left">
                    <Button className="btn-send">Get contacted</Button>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Col>
      </Row>
    </Container>
  );
}
export default contact;
