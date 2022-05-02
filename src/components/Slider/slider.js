import React from 'react'
import { Nav, Button,Row,Container,input,Carousel } from 'react-bootstrap'
import Slide1 from '../../../assets/slider.png'
import Image from 'next/image'

function slider() {
  return (
        <Container>
            <Row>
            <Carousel>
              <Carousel.Item>
              <Image src={Slide1} alt="banner immage" />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
              <Image src={Slide1} alt="banner immage" />

                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
              <Image src={Slide1} alt="banner immage" />

                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          
            </Row>
        </Container>

  )
}

export default slider