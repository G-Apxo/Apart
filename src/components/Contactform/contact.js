import React from 'react'
import { Nav, Button,Row,Container,input } from 'react-bootstrap'
function contact() {
return (
<Container>
   <Row className="justify-content-between container-marginer" >
      <div className='col-1'>
         <p>
            About us
         </p>
      </div>
      <div className='col-4'>
         <h2 className='section1-title'>
         Renewed life of old tbilisi
         </h2>
         <p className='section1-subtitle'>
            For our team, it is important and a priority to preserve the charm of the old city, 
            to use the old architectural fragments in the modern construction, 
            and at the same time to bring new life to the forgotten neighborhoods.
         </p>
      </div>
      <div className='col-5'>
         <p className='section1-form-text'>
            Leave us your contact information and our team will reach out to you.
         </p>
         <h4 className='section-1-form-subtext'>Apartment type:</h4>
         <Row>
            <div className='col-3'>
               <div className="form-check">
                  <input type="checkbox" className="form-check-input" name="updates" id="updates" value="1"/>
                  <label htmlFor="updates" className="form-check-label">Studio</label>
               </div>
            </div>
            <div className='col-3'>
               <div className="form-check">
                  <input type="checkbox" className="form-check-input" name="updates" id="updates" value="1"/>
                  <label htmlFor="updates" className="form-check-label">1 Bedroom</label>
               </div>
            </div>
            <div className='col-6'>
               <div className="form-check">
                  <input type="checkbox" className="form-check-input" name="updates" id="updates" value="1"/>
                  <label htmlFor="updates" className="form-check-label">2 and more bedrooms</label>
               </div>
            </div>
            <section className="mb-4">
               <div className="row">
                  <div className="col-md-12 mb-md-0 mb-5">
                     <form id="contact-form" name="contact-form" action="mail.php" method="POST">
                        <div className="row">
                           <div className="col-md-12">
                              <div className="md-form mb-0">
                                 <input type="text" id="name" name="name" className="form-control input__main" placeholder='Phone'/>

                              </div>
                           </div>
                           <div className="col-md-12">
                              <div className="md-form mb-0">
                                 <input type="text" id="email" name="email" className="form-control input__main" placeholder='Email'/>

                              </div>
                           </div>
                        </div>
                     </form>
                     <div className="text-center text-md-left">
                        <button className="btn-send">Get contacted</button>
                     </div>
                     <div className="status"></div>
                  </div>
               </div>
            </section>
         </Row>
      </div>
   </Row>
</Container>
)
}
export default contact
