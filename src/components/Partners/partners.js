import React from 'react'
import { Nav, Button,Row,Container,input } from 'react-bootstrap'
function Partners() {
  return (
    <div>
        <Container>
            <Row>
                <div className='col-3 '>
                  <div className='partners'>
                    <h2>Partner1</h2>
                  </div>  
                </div>
                <div className='col-3'>
                <div className='partners'>
                    <h2>Partner2</h2>
                  </div>  
                </div>
                <div className='col-3'>
                <div className='partners'>
                    <h2>Partner3</h2>
                  </div>  
                </div>
                <div className='col-3'>
                <div className='partners'>
                    <h2>Partner4</h2>
                  </div>  
                </div>
            </Row>
        </Container>
    </div>
  )
}

export default Partners