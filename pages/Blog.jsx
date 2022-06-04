import Head from "next/head";
import Layout from "../src/components/Layout/Layout";
import { Nav, Button, Row, Container, input, Col } from "react-bootstrap";
import Link from "next/link";
export default function Blog() {
  return (
    <>
      <Layout>
        <div>
          <Container>
            <h2 className="row-marginer">Blog</h2>
            <Row>
              <Link href="/SingleBlog">
              <Col className="col-6 cursor">
                <div className="image__box">
                  <div className="blog-image__content">
                    <p>blog desc</p>
                    <h2>blog1</h2>
                  </div>
                </div>
              </Col>
              </Link>
              <Link href="/SingleBlog">
              <Col className="col-6 cursor">
                <div className="image__box">
                  <div className="blog-image__content">
                    <p>blog desc</p>
                    <h2>blog1</h2>
                  </div>
                </div>
              </Col>
              </Link>
            </Row>
          </Container>
        </div>
      </Layout>
    </>
  );
}
