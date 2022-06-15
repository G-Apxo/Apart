import React from 'react'
import { Nav, Button,Row,Container,input,Col } from 'react-bootstrap'
function Blog() {
  return (
    <div>
        <Container>
          <Row>
            <Col xs="12" lg="6" md="6" sm="6" xl="6" xxl="6">
              <div className="image__box">
                <h2>
                  blog1
                </h2>
                <p>blog desc</p>
              </div>
            </Col>
            <Col xs="12" lg="6" md="6" sm="6" xl="6" xxl="6">

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