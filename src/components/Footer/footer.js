// import React from 'react'
// import { Nav, Button,Row,Container,input } from 'react-bootstrap'
// import Image from 'next/image'
// import Img from '../../../assets/footer-logo.svg'
// function footer() {
// return (
// <div className='footer-outside'>
//    <Container fluid className='footer-container'>
//       <Row>
//          <div className='col-lg-3'>
//          </div>
//          <div className='col-lg-6 footer-logo'>
//             <Image
//                src={Img}
//                alt="Logo"
//                />
//          </div>
//          <div className='col-lg-3'>
//             <ul className='languages'>
//                <li>
//                   <a href='#'>
//                      <p>GEO /</p>
//                   </a>
//                </li>
//                <li>
//                   <a href='#'>
//                      <p> <span className='active'>ENG</span> /</p>
//                   </a>
//                </li>
//                <li>
//                   <a href='#'>
//                      <p>RUS /</p>
//                   </a>
//                </li>
//             </ul>
//          </div>
//       </Row>
//       <Row className='footer-info'>
//          <div className='col-lg-3'>
//             <ul className='footer-info-ul'>
//                <p className='footer-info-title'>
//                   PRODUCTS
//                </p>
//                <li >
//                   UPDATES
//                </li>
//                <li>
//                   SECURITY
//                </li>
//                <li>
//                   EXTENSION
//                </li>
//             </ul>
//          </div>
//          <div className='col-lg-3'>
//             <ul className='footer-info-ul'>
//                <p className='footer-info-title'>
//                   COMPANY
//                </p>
//                <li>
//                   ABOUT
//                </li>
//                <li>
//                   BLOG
//                </li>
//                <li>
//                   JOIN US
//                </li>
//             </ul>
//          </div>
//          <div className='col-lg-3'>
//             <ul className='footer-info-ul'>
//                <p className='footer-info-title'>
//                   INDUSTRIES
//                </p>
//                <li>
//                   STARTUPS
//                </li>
//                <li>
//                   CAPITAL
//                </li>
//                <li>
//                   EQUILITY
//                </li>
//             </ul>
//          </div>
//       </Row>
//       <Row>
//          <div className='footer-terms'>
//             <p className='footer--terms__mod'>
//                All rights reserved. The copyright notice generally consists of three elements
//             </p>
//             <a>
//                <p className='footer--terms__terms__mod'>Terms and Conditions</p>
//             </a>
//          </div>
//       </Row>
//    </Container>
// </div>
// )
// }
// export default footer
import Link from "next/link";

const path = [
  { uid: 21, name: " Home", id: 1, path: "/" },
  { uid: 31, name: "Blog", id: 2, path: "Blog" },
  { uid: 41, name: "About", id: 3, path: "About" },
  {
    uid: 45,
    name: "Copy Right By Rajdeep Singh",
    id: 4,
    path: "https://officialrajdeepsingh.dev/"
  }
];
export default function Footer() {
  return (
    <footer>
      <nav>
        <ul>
          {path.map((value) => {
            return (
              <li key={value.uid}>
                <Link href={value.path}>
                  <a> {value.name} </a>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </footer>
  );
}
