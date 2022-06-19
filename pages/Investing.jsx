import React from 'react'
import Layout from '../src/components/Layout/Layout';
import Video from "../assets/video.svg";
import Image from 'next/image';
import { Nav, Button, Row, Container, input, Col, Navbar, FormSelect } from "react-bootstrap";

const Investing = () => {
  return (
      <Layout>
      <Container className='mt-120 mb-120'>
        <Col  xs="12" lg="6" md="6" sm="6" xl="6" xxl="6" >
        <h3>
        Investment in Old Tbilisi
        </h3>
        <p>
        If you are looking for property for investment purposes, we offer apartments in different price categories, with conditions tailored to you. The average investment income of the project will be calculated by the financial group of Apart Development, taking into account the current data.
        </p>
        </Col>
      </Container>
      <Container className='mt-120 mb-120'>
        <Row>
          <Col xs="12" lg="6" md="6" sm="6" xl="6" xxl="6">
          <Image src={Video} alt="banner immage" />
          </Col>
          <Col xs="12" lg="6" md="6" sm="6" xl="6" xxl="6">
            <p>
          The company Apart Development was founded in 2019, however,
           the management of the company has a lot of experience in the 
           field of construction and development. The first project we
            started during the pandemic has already been completed.
             After the increase in demand, we developed a plan for the 
             renovation and development of Old Tbilisi, and within the 
             framework of this concept, we started the construction of 
             several distinctive, premium-class projects on Bukhaidze Street.
              We carry out construction in compliance with the highest standards,
               which means that our construction facilities are distinguished by 
               structural and seismic resistance. Each current or future project 
               of the company is distinguished by a sophisticated exterior, 
               efficient interior planning and the best location.
               </p>
          </Col>
        </Row>
        </Container>
        <Container className='mt-120 mb-120'>
          
        </Container>
      </Layout>
 
  )
}
export default Investing;