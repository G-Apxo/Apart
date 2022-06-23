import React from 'react'
import { Nav, Button,Row,Container,input, Col } from 'react-bootstrap'
import Apart_showroom from '../../../assets/apartshowroom.svg'
import Greenlife from '../../../assets/greenlife.svg'
import Malongo from '../../../assets/malongo.svg'
import Tbc from '../../../assets/tbc.svg'

import Image from 'next/image'
function Partners() {
  return (
        <Container className='partners-container mb-60 mt-60'>
            <Row className="justify-content-between align-items-center">
              <Col xs="12" lg="2" md="2" sm="2" xl="2" xxl="2" >
                <div className='partners'>
                  <p>
                  Sponsors
                  </p>
                  </div>
              </Col>
                <div className='col-2 '>
                  <div className='partners'>
                  <Image src={Apart_showroom} alt="banner immage" className='partners_wite' />
                  </div>  
                </div>
                <div className='col-2'>
                {/* <div className='partners'>
                <Image src={Greenlife} alt="banner immage" className='partners_wite'/>
                  </div>   */}
                </div>
                <div className='col-2'>
                <div className='partners'>
                <Image src={Malongo} alt="banner immage" className='partners_wite'/>
                  </div>  
                </div>
                <div className='col-2'>
                <div className='partners'>
                <Image src={Tbc} alt="banner immage" className='partners_wite'/>
                  </div>  
                </div>
            </Row>
        </Container>
  )
}

export default Partners
