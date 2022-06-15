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
              <Link className="blog-single-blog" href="/SingleBlog">
                <Col className="cursor mt-5" xs="12" lg="6" md="6" sm="6" xl="6" xxl="6">
                  <div className="image__box blog__1">
                    <div className="blog-image__content">
                      {/* ar mushaobs css */}
                      <p>November 23. 2021</p>
                      <h2>Bukhaidze I Turn 6 our new project</h2>
                    </div>
                  </div>
                </Col>
              </Link>
              <Link className="blog-single-blog" href="/SingleBlog">
                <Col className="cursor mt-5" xs="12" lg="6" md="6" sm="6" xl="6" xxl="6">
                  <div className="image__box blog__2">
                    <div className="blog-image__content">
                      <p>November 23. 2021</p>
                      <h2>Bukhaidze I Turn 6 our new project</h2>
                    </div>
                  </div>
                </Col>
              </Link>
            </Row>
            <Row>
              <Link className="blog-single-blog" href="/SingleBlog">
                <Col className="cursor mt-5" xs="12" lg="6" md="6" sm="6" xl="6" xxl="6">
                  <div className="image__box blog__3">
                    <div className="blog-image__content">
                      <p>November 23. 2021</p>
                      <h2>Bukhaidze I Turn 6 our new project</h2>
                    </div>
                  </div>
                </Col>
              </Link>
              <Link className="blog-single-blog" href="/SingleBlog">
                <Col className="cursor mt-5" xs="12" lg="6" md="6" sm="6" xl="6" xxl="6">
                  <div className="image__box blog__4">
                    <div className="blog-image__content">
                      <p>November 23. 2021</p>
                      <h2>Bukhaidze I Turn 6 our new project</h2>
                    </div>
                  </div>
                </Col>
              </Link>
            </Row>
            <Row>
              <Link href="/SingleBlog">
                <Col className="cursor mt-5" xs="12" lg="6" md="6" sm="6" xl="6" xxl="6">
                  <div className="image__box blog__5">
                    <div className="blog-image__content">
                      <p>November 23. 2021</p>
                      <h2>Bukhaidze I Turn 6 our new project</h2>
                    </div>
                  </div>
                </Col>
              </Link>
              <Link href="/SingleBlog">
                <Col className="cursor mt-5" xs="12" lg="6" md="6" sm="6" xl="6" xxl="6">
                  <div className="image__box blog__6">
                    <div className="blog-image__content">
                      <p>November 23. 2021</p>
                      <h2>Bukhaidze I Turn 6 our new project</h2>
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
