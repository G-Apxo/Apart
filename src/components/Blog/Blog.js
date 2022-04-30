import React from 'react'
import { Nav, Button,Row,Container,input,Col } from 'react-bootstrap'
function Blog() {
  return (
    <div>
        <Container>
          <Row>
            <Col className="col-6">
              <div className="image__box">
                <h2>
                  blog1
                </h2>
                <p>blog desc</p>
              </div>
            </Col>
            <Col className="col-6">

            <div className="image__box">
            <h2>
                  blog1
                </h2>
                <p>blog desc</p>
              
            </div>
            </Col>
          </Row>
        </Container>
    </div>
  )
}

export default Blog