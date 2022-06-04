import React from 'react'
import { Nav , Button, Row,Container,Col, Carousel, Form,FormGroup, Label, Input, FormText} from 'react-bootstrap'
const Projectsmap = () => {
  return (
    <div>
        <Container className="mb-60 mt-60">
            <Row>
                <Col xs="2">
                  <p>Projects Map</p>
                </Col>
                <Col xs="10">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2978.8267523333143!2d44.80759311572699!3d41.70267558435236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40440dcf1f317faf%3A0x6ef08f8fb9222cb9!2sApart%20Development!5e0!3m2!1sen!2sge!4v1651489892357!5m2!1sen!2sge" width="100%" height="450"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </Col>
            </Row>
          </Container>
    </div>
  )
}
export default Projectsmap;
