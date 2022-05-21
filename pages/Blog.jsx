import Head from "next/head";
import Layout from "../src/components/Layout/Layout";
import { Nav, Button, Row, Container, input, Col } from "react-bootstrap";
export default function Blog() {
  return (
    <>
      <Layout>
        <div>
          <Container>
            <h2 className="row-marginer">Blog</h2>
            <Row>
              <Col className="col-6">
                <div className="image__box">
                  <div className="blog-image__content">
                    <p>blog desc</p>
                    <h2>blog1</h2>
                  </div>
                </div>
              </Col>
              <Col className="col-6">
                <div className="image__box">
                  <div className="blog-image__content">
                    <p>blog desc</p>
                    <h2>blog1</h2>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
          <Container>
            <Row>
              <Col className="col-6">
                <div className="image__box">
                  <div className="blog-image__content">
                    <p>blog desc</p>
                    <h2>blog1</h2>
                  </div>
                </div>
              </Col>
              <Col className="col-6">
                <div className="image__box">
                  <div className="blog-image__content">
                    <p>blog desc</p>
                    <h2>blog1</h2>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
          <Container>
            <Row>
              <Col className="col-6">
                <div className="image__box">
                  <div className="blog-image__content">
                    <p>blog desc</p>
                    <h2>blog1</h2>
                  </div>
                </div>
              </Col>
              <Col className="col-6">
                <div className="image__box">
                  <div className="blog-image__content">
                    <p>blog desc</p>
                    <h2>blog1</h2>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </Layout>
    </>
  );
}
