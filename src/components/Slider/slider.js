import React, { Component } from 'react'
import { Nav, Button,Row,Container,input,Carousel, Col } from 'react-bootstrap'
import Slide1 from '../../../assets/slider.png'
import Taghi from '../../../assets/taghi.svg'

import Image from 'next/image'


function slider() {
  return (
    <Container>
      <Row className='justify-content-between'>
          <Col xs="2">
            <ul className='custom__li'>
              <li>
                Apart
              </li>
              <li>
              Old city panorama
              </li>
              <li>
                Apart
              </li>
              <li>
                Apart
              </li>
              <li>
                Apart
              </li>
            </ul>
          </Col>
        <Col xs="5">
        <Carousel>
              <Carousel.Item>
                <Row>
                  <Col className='col-12 d-flex align-items-center justify-content-end'>
                  <Image src={Slide1} alt="banner immage" />
                  </Col>
                </Row>
              </Carousel.Item>
              <Carousel.Item>
              <Row>
                  <Col className='col-12 d-flex align-items-center justify-content-end'>
                  <Image src={Slide1} alt="banner immage" />
                
                  </Col>
                </Row>
              </Carousel.Item>
              <Carousel.Item>
              <Row>
                  <Col className='col-12 d-flex align-items-center justify-content-end'>
                  <Image src={Slide1} alt="banner immage" />
                
                  </Col>
                </Row>
              </Carousel.Item>
            </Carousel>
        </Col>
        <Col xs="5" className='d-flex justify-content-start align-items-center'>
        <Carousel>
              <Carousel.Item>
                <Row>
                  <Col className='col-12 d-flex align-items-center'>
                    <div className=''>
                    <Image src={Taghi} alt="banner immage" />
                    <h3>OLD TBILISI</h3>
                    <p>For our team, it is important and a priority to preserve   <br/>the charm of the old city, to use the old
                    <br/>
                    <br/>
                    For our team, it is important and a priority to preserve  <br/> the charm of the old city, to use the old
                    </p>
                    </div>
                
                  </Col>
                </Row>
              </Carousel.Item>
              <Carousel.Item>
              <Row>
                  <Col className='col-12 d-flex align-items-center'>
                    <div className=''>
                    <Image src={Taghi} alt="banner immage" />
                    <h3>OLD TBILISI</h3>
                    <p>For our team, it is important and a priority to preserve   <br/>the charm of the old city, to use the old
                    <br/>
                    <br/>
                    For our team, it is important and a priority to preserve  <br/> the charm of the old city, to use the old
                    </p>
                    </div>
                
                  </Col>
                </Row>
              </Carousel.Item>
              <Carousel.Item>
              <Row>
                  <Col className='col-12 d-flex align-items-center'>
                    <div className=''>
                    <Image src={Taghi} alt="banner immage" />
                    <h3>OLD TBILISI</h3>
                    <p>For our team, it is important and a priority to preserve   <br/>the charm of the old city, to use the old
                    <br/>
                    <br/>
                    For our team, it is important and a priority to preserve  <br/> the charm of the old city, to use the old
                    </p>
                    </div>
                
                  </Col>
                </Row>
              </Carousel.Item>
            </Carousel>
        </Col>
      </Row>
      </Container>
  
  )
}

export default slider