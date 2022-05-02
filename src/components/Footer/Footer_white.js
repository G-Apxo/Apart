import React from 'react'
import { Nav, Button,Row,Container,input,Col } from 'react-bootstrap'
import Image from 'next/image'
import Img from '../../../assets/logo.svg'
import Link from "next/link";
const path = [
  { uid: 31, name: 'Blog', id: 2, path: 'Blog' },
  { uid: 41, name: 'About us', id: 3, path: 'About' },
  { uid: 51, name: 'Projects', id: 4, path: 'Projects' },
  { uid: 51, name: 'Investing', id: 5, path: 'Investing' },
  { uid: 61, name: 'Contact', id: 6, path: 'Contact' },
];
function Footer_white() {
return (
<div className='footer-outside-white'>
   <Container fluid className='footer-container'>
      <Row className='mt-5'>
         <div className='col-lg-3'>
         </div>
         <div className='col-lg-6 footer-logo'>
            <Image
               src={Img}
               alt="Logo"
               />
         </div>
         <div className='col-lg-3'>
            <ul className='languages'>
               <li>
                  <a href='#'>
                     <p>GEO /</p>
                  </a>
               </li>
               <li>
                  <a href='#'>
                     <p> <span className='active'>ENG</span> /</p>
                  </a>
               </li>
               <li>
                  <a href='#'>
                     <p>RUS /</p>
                  </a>
               </li>
            </ul>
         </div>
      </Row>
      <Row className='footer-info footer-splitter'>
         <div className='col-lg-3'>
            <ul className='footer-info-ul-white-white'>
               <p className='footer-info-title-white'>
                  COMPANY
               </p>
               <li>
                  ABOUT
               </li>
               <li>
                  BLOG
               </li>
               <li>
                  JOIN US
               </li>
            </ul>
         </div>
         <div className='col-lg-3'>
            <nav>
               <ul className='footer-info-ul-white'>
                  <p className='footer-info-title'>
                     PRODUCTS
                  </p>
                  {path.map((value) => {
                  return (
                  <li key={value.uid}>
                     <Link href={value.path}>
                     <a className="Nav__a"> {value.name} </a>
                     </Link>
                  </li>
                  );
                  })}
               </ul>
            </nav>
         </div>
         <div className='col-lg-3'>
            <ul className='footer-info-ul-white'>
               <p className='footer-info-title'>
                  INDUSTRIES
               </p>
               <li>
                  STARTUPS
               </li>
               <li>
                  CAPITAL
               </li>
               <li>
                  EQUILITY
               </li>
            </ul>
         </div>
      </Row>
      <Row className='footer-splitter'>
             <Col xs="6">
             <p className='footer--terms__mod'>
               All rights reserved. The copyright notice generally consists of three elements
            </p>
             </Col>
           
             <Col xs="6" className='d-flex justify-content-end'>
             <p className='footer--terms__terms__mod'>Terms and Conditions</p>
             </Col>
             
           
      </Row>
   </Container>
</div>
)
}
export default Footer_white