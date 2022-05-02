import React from 'react'
import { Nav, Button,Row,Container,input,Carousel, Col } from 'react-bootstrap'
import Slide1 from '../../../assets/slider.png'
import Taghi from '../../../assets/taghi.svg'
import Image from 'next/image'

function slider() {
  return (
            <Carousel>
              <Carousel.Item>
                <Row>
                  <Col className="col-7 justify-content-center d-flex">
                  <Image src={Slide1} alt="banner immage" />
                  </Col>
                  <Col className='col-5 d-flex align-items-center'>
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
                  <Col className="col-7 justify-content-center d-flex">
                  <Image src={Slide1} alt="banner immage" />
                  </Col>
                  <Col className='col-5 d-flex align-items-center'>
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
                  <Col className="col-7 justify-content-center d-flex">
                  <Image src={Slide1} alt="banner immage" />
                  </Col>
                  <Col className='col-5 d-flex align-items-center'>
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
  )
}

export default slider