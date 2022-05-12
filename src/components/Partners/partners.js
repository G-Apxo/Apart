import React from 'react'
import { Nav, Button,Row,Container,input, Col } from 'react-bootstrap'
import Apart_showroom from '../../../assets/apartshowroom.svg'
import Greenlife from '../../../assets/greenlife.svg'
import Malongo from '../../../assets/malongo.svg'
import Tbc from '../../../assets/tbc.svg'

import Image from 'next/image'
function Partners() {
  return (
    <div>
        <Container className='partners-container'>
            <Row className="justify-content-between align-items-center">
              <Col xs="2">
                <div className='partners'>
                  <p>
                  Sponsors
                  </p>
                  </div>
              </Col>
                <div className='col-2 '>
                  <div className='partners'>
                  <Image src={Apart_showroom} alt="banner immage" />
                  </div>  
                </div>
                <div className='col-2'>
                <div className='partners'>
                <Image src={Greenlife} alt="banner immage" />
                  </div>  
                </div>
                <div className='col-2'>
                <div className='partners'>
                <Image src={Malongo} alt="banner immage" />
                  </div>  
                </div>
                <div className='col-2'>
                <div className='partners'>
                <Image src={Tbc} alt="banner immage" />
                  </div>  
                </div>
            </Row>
        </Container>
    </div>
  )
}

export default Partners