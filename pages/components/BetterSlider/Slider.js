import React from 'react'
import Flickity from "react-flickity-component";
import { Row, Col,Container } from "react-bootstrap";
import Slide1 from "../../assets/slider.png";
import Slide2 from "../../assets/slider.png";
import Slide3 from "../../assets/slider.png";
import Slide4 from "../../assets/slider.png";
import Taghi from "../../assets/taghi.svg";
import Call from "../../assets/Call.svg";
import ThreeSixty from "../../assets/ThreeSixtt.svg"
import Video from "../../assets/Videosmall.svg"
import Vector from "../../assets/seeprjvector.png"
import Image from "next/image";
const Slider = () => {
  return (
    <div>
    <Flickity  data-flickity='{ "freeScroll": true, "wrapAround": true }'>
    <Container>
              <Row>
                <Col xs="12" lg="6" md="6" sm="6" xl="6" xxl="6" >
                <iframe
                    className='iframe'
                    allowFullScreen
                    width="640"
                    height="480"
                    loading="lazy"
                    frameBorder="0"
                    src="https://62b4e729297917007cd28bcc--jovial-eclair-7745d5.netlify.app/frame/"
                  ></iframe>
                </Col>
                <Col xs="12" lg="6" md="6" sm="6" xl="6" xxl="6" className="d-flex">
                  <Col className="d-flex align-items-center">
                    <div className="test">

              
                     <Image src={Taghi} alt="banner immage" className="Taghi" /> 
                      <p className="mt-40">
                        For our team, it is important and a priority to preserve <br />
                        the charm of the old city, to use the old
                        <br />
                        <br />
                        For our team, it is important and a priority to preserve <br /> the charm of the old
                        city, to use the old
                      </p>
                      <Row  className="mt-40">
                          <Col xs="2" lg="2" md="2" sm="2" xl="2" xxl="2">
                          <Image src={ThreeSixty} />
                          </Col>
                          <Col xs="2" lg="2" md="2" sm="2" xl="2" xxl="2">
                          <Image src={Call} />
                          </Col>
                          <Col xs="2" lg="2" md="2" sm="2" xl="2" xxl="2">
                          <Image src={Video} />
                          </Col>
                          <Col  xs="6" lg="6" md="6" sm="6" xl="6" xxl="6">
                          <i className="read__more cursor">
                              View Projects <Image src={Vector} />
                            </i>
                          </Col>
                        </Row>
                    </div>
                    
                  </Col>
                </Col>
              </Row>
      </Container>
      <Container>
              <Row>
                <Col xs="12" lg="6" md="6" sm="6" xl="6" xxl="6" >
                 <Image src={Slide1} />
                </Col>
                <Col xs="12" lg="6" md="6" sm="6" xl="6" xxl="6" className="d-flex">
                  <Col className="d-flex align-items-center">
                    <div className="test">
                      <Image src={Taghi} alt="banner immage" className="Taghi" />
                      <p className="mt-40">
                        For our team, it is important and a priority to preserve <br />
                        the charm of the old city, to use the old
                        <br />
                        <br />
                        For our team, it is important and a priority to preserve <br /> the charm of the old
                        city, to use the old
                      </p>
                      <Row  className="mt-40">
                          <Col xs="2" lg="2" md="2" sm="2" xl="2" xxl="2">
                          <Image src={ThreeSixty} />
                          </Col>
                          <Col xs="2" lg="2" md="2" sm="2" xl="2" xxl="2">
                          <Image src={Call} />
                          </Col>
                          <Col xs="2" lg="2" md="2" sm="2" xl="2" xxl="2">
                          <Image src={Video} />
                          </Col>
                          <Col  xs="6" lg="6" md="6" sm="6" xl="6" xxl="6">
                          <i className="read__more cursor">
                              View Projects <Image src={Vector} />
                            </i>
                          </Col>
                        </Row>
                    </div>
                  </Col>
                </Col>
              </Row>
      </Container>
      <Container>
              <Row>
                <Col xs="12" lg="6" md="6" sm="6" xl="6" xxl="6" >
                 <Image src={Slide1} />
                </Col>
                <Col xs="12" lg="6" md="6" sm="6" xl="6" xxl="6" className="d-flex">
                  <Col className="d-flex align-items-center">
                    <div className="test">
                      <Image src={Taghi} alt="banner immage" className="Taghi" />
                      <p className="mt-40">
                        For our team, it is important and a priority to preserve <br />
                        the charm of the old city, to use the old
                        <br />
                        <br />
                        For our team, it is important and a priority to preserve <br /> the charm of the old
                        city, to use the old
                      </p>
                      <Row  className="mt-40">
                          <Col xs="2" lg="2" md="2" sm="2" xl="2" xxl="2">
                          <Image src={ThreeSixty} />
                          </Col>
                          <Col xs="2" lg="2" md="2" sm="2" xl="2" xxl="2">
                          <Image src={Call} />
                          </Col>
                          <Col xs="2" lg="2" md="2" sm="2" xl="2" xxl="2">
                          <Image src={Video} />
                          </Col>
                          <Col  xs="6" lg="6" md="6" sm="6" xl="6" xxl="6">
                          <i className="read__more cursor">
                              View Projects <Image src={Vector} />
                            </i>
                          </Col>
                        </Row>
                    </div>
                  </Col>
                </Col>
              </Row>
      </Container>
      <Container>
              <Row>
                <Col xs="12" lg="6" md="6" sm="6" xl="6" xxl="6" >
                 <Image src={Slide1} />
                </Col>
                <Col xs="12" lg="6" md="6" sm="6" xl="6" xxl="6" className="d-flex">
                  <Col className="d-flex align-items-center">
                    <div className="test">
                      <Image src={Taghi} alt="banner immage" className="Taghi" />
                      <p className="mt-40">
                        For our team, it is important and a priority to preserve <br />
                        the charm of the old city, to use the old
                        <br />
                        <br />
                        For our team, it is important and a priority to preserve <br /> the charm of the old
                        city, to use the old
                      </p>
                    </div>
                  </Col>
                </Col>
              </Row>
      </Container>
      <Container>
              <Row>
                <Col xs="12" lg="6" md="6" sm="6" xl="6" xxl="6" >
                 <Image src={Slide1} />
                </Col>
                <Col xs="12" lg="6" md="6" sm="6" xl="6" xxl="6" className="d-flex">
                  <Col className="d-flex align-items-center">
                    <div className="test">
                      <Image src={Taghi} alt="banner immage" className="Taghi" />
                      <p className="mt-40">
                        For our team, it is important and a priority to preserve <br />
                        the charm of the old city, to use the old
                        <br />
                        <br />
                        For our team, it is important and a priority to preserve <br /> the charm of the old
                        city, to use the old
                      </p>
                    </div>
                  </Col>
                </Col>
              </Row>
      </Container>
    </Flickity>
        {/* <Container>
              <Row className='justify-content-between'>
                <Col xs="12" lg="6" md="6" sm="6" xl="6" xxl="6" >
                <iframe
                    className='iframe'
                    allowFullScreen
                    width="640"
                    height="480"
                    loading="lazy"
                    frameBorder="0"
                    src="https://62b4e729297917007cd28bcc--jovial-eclair-7745d5.netlify.app/frame/"
                  ></iframe>
             
                </Col>
                <Col xs="12" lg="5" md="5" sm="5" xl="5" xxl="5" className="d-flex">
                  <Col className="d-flex align-items-center">
                    <div className="test">
                     <Image src={Taghi} alt="banner immage" className="Taghi" /> 
                      <p className="mt-40">
                        For our team, it is important and a priority to preserve <br />
                        the charm of the old city, to use the old
                        <br />
                        <br />
                        For our team, it is important and a priority to preserve <br /> the charm of the old
                        city, to use the old
                      </p>
                      <Row  className="mt-40">
                          <Col xs="2" lg="2" md="2" sm="2" xl="2" xxl="2">
                          <Image src={ThreeSixty} />
                          </Col>
                          <Col xs="2" lg="2" md="2" sm="2" xl="2" xxl="2">
                          <Image src={Call} />
                          </Col>
                          <Col xs="2" lg="2" md="2" sm="2" xl="2" xxl="2">
                          <Image src={Video} />
                          </Col>
                          <Col  xs="6" lg="6" md="6" sm="6" xl="6" xxl="6">
                          <i className="read__more cursor">
                              View Projects <Image src={Vector} />
                          </i>
                          </Col>
                        </Row>
                    </div>
                  </Col>
                </Col>
              </Row>
      </Container> */}
    </div>
    
  )
}

export default Slider