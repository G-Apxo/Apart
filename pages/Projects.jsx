import React from 'react'
import { Nav , Button, Row,Container,Col, Carousel, Form,FormGroup, Label, Input, FormText} from 'react-bootstrap'
import Layout from '../src/components/Layout/Layout'
import Slide1 from '../assets/oldcitypanorama.png'

import Image from 'next/image'

const Projects = () => {
  return (
      <Layout>
        <Container>
          <Row>
              <h3 className='text-center'>PROJECTS</h3>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col xs="3">
              <div className='mb-5'>
              <p>
                Done
              </p>
              <h3>
                OLD CITY  <br/> PANORAMA
              </h3>
              </div>
              <div className='mt-5'>
                  <p>
                    location
                  </p>
                  <h3>
                  Tbilisi,georgia,bukhaidze 6a
                  </h3>
              </div>
              <div className='mt-5'>
                  <p>
                  Create date
                  </p>
                  <h3>
                  2022
                  </h3>
              </div>
              <div>
                <p>
                  see projects
                </p>
              </div>
              </Col>
              <Col xs="9">
              <Carousel>
              <Carousel.Item>
                <Row>
                <Image src={Slide1} alt="banner immage" />
                 
                </Row>
              </Carousel.Item>
              <Carousel.Item>
              <Row>
               <Image src={Slide1} alt="banner immage" />
                
              
                </Row>
              </Carousel.Item>
              <Carousel.Item>
              <Row>
                 <Image src={Slide1} alt="banner immage" />
                
        
                </Row>
              </Carousel.Item>
            </Carousel>
              </Col>
          </Row>
        </Container>
      </Layout>
    
  )
}
export default Projects