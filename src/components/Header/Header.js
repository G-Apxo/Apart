import React from 'react'
import Head from 'next/head'
import { Nav, Button,Row,Container,input } from 'react-bootstrap'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '../../../assets/logo.svg'

// import Link from 'next/link';

const path = [
  { uid: 21, name: ' Home', id: 1, path: '/' },
  { uid: 31, name: 'Blog', id: 2, path: 'Blog' },
  { uid: 41, name: 'About us', id: 3, path: 'About' },
  { uid: 51, name: 'Projects', id: 4, path: 'Projects' },
  { uid: 51, name: 'Investing', id: 5, path: 'Investing' },
  { uid: 61, name: 'Contact', id: 6, path: 'Contact' },
  { uid: 61, name: 'SingleBlog', id: 6, path: 'SingleBlog' },
];
function Header() {
  return (
    <div>
        <Head>
        <title>Apart</title>
        <meta name="description" content="A demo about NextJS and Bootstrap 5" />
      </Head>
      
  <div>
    <Container>
    <Row>
      <div className="col-2">
      <Link href="/">
      <a className="navbar-brand">
      <Image
      src={Logo}
      alt="Picture of the author"
    />

      </a>
    </Link>
      </div>
      <div className="col-8 d-flex justify-content-center">
      <nav>
        <ul className="navbar-nav mr-auto">
          {path.map((value) => {
            return (
              <li key={value.uid} className="nav-item active">
                <Link href={value.path}>
                  <a className="nav-link"> {value.name} </a>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      </div>
      <div class="col-2 d-flex justify-content-end align-items-center">
    <ul className="navbar-nav ">
      <li className='nav-item text-nowrap'>
          <select className="Language__select">
            <option>ENG</option>
            <option>Geo</option>
          </select>
      </li>
        <li className="nav-item text-nowrap">
        {/* <div class="form-check form-switch">
        <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked/>
      </div> */}
        </li>
      </ul>
      <ul className="navbar-nav ">
        <li className="nav-item text-nowrap">
          <button className="nav-link header_btn">
              Request a call
          </button>
        </li>
      </ul>
      </div>
    </Row>
    </Container>
  </div>

    </div>
  )
}

export default Header

// export default function Header() {
//   return (
//     <header>
    
//     </header>
//   );
// }
