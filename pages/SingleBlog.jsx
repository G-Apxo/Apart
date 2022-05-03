import React from 'react'
import Layout from '../src/components/Layout/Layout'
import { Row,Container,Col} from 'react-bootstrap'
import BannerImg from '../assets/singleblog.png'
import Image from 'next/image'

 
const SingleBlog = () => {
   return (
       <Layout>
        <div>
            <Container>

                <Col className='col-12'>
                <Image src={BannerImg} alt="banner immage" />
                </Col>
                <div className="row align-items-end mt-5">
                    <div className="col-4">
                        <hr />
                    </div>
                    <div className="col-4">
                        <p className='text-center'>November 23. 2021</p>
                        <h4 className='text-center'>
                        WHY IS THE REAL ESTATE THE SAFEST INVESTMENT?
                        </h4>
                    </div>
                    <div className="col-4">
                        <hr />
                    </div>
                </div>
            <Col className='col-12 d-flex justify-content-center mt-5'>
                <Col className='col-6'>
                    {/* <p>
                    The fact is that real estate is one of the most correct,
                     secure and reliable areas for investment. Moreover&lsquo; 
                     along with investing in gold and silver items&lsquo; 
                     real estate is considered to be one of the most profitable ways to increase capital. 
                     For many well-known brands or businesses, which appear as a manufacturing or even food business in various fields, 
                     in fact, the main source of income is the real estate owned by them. 
                     A clear example of this is such a giant chain of food outlets around the world as McDonald&lsquo;s. 
                     The company owns and rents most of the restaurant buildings to franchisors who have the right to use the brand name. 
                     Consequently, the parent company owns real estate in almost every country in the world and continuously makes a profit from the lease. 
                     From this point of view, it can be said that McDonald&lsquo;s is a real estate company more than a fast food chain.
                    </p>
                    <p>
                    The fact is that real estate is one of the most correct,
                     secure and reliable areas for investment. Moreover, 
                     along with investing in gold and silver items, 
                     real estate is considered to be one of the most profitable ways to increase capital. 
                     For many well-known brands or businesses, which appear as a manufacturing or even food business in various fields, 
                     in fact, the main source of income is the real estate owned by them. 
                     A clear example of this is such a giant chain of food outlets around the world as McDonald's. 
                     The company owns and rents most of the restaurant buildings to franchisors who have the right to use the brand name. 
                     Consequently, the parent company owns real estate in almost every country in the world and continuously makes a profit from the lease. 
                     From this point of view, it can be said that McDonald&lsquo;s is a real estate company more than a fast food chain.
                    </p> */}
                </Col>
            </Col>
            <Col xs="3" className='mb-5 mt-5'>
                <h2>
                    Recent Blogs
                </h2>
                <hr/>
            </Col>
            <Row>
                <Col xs="6">
                <div className="image__box">
               <div className="blog-image__content">
               
                  <p>blog desc</p>
                  <h2>
                     blog1
                  </h2>
               </div>
            </div>
                </Col>
                <Col xs="6">
                <div className="image__box">
               <div className="blog-image__content">
               
                  <p>blog desc</p>
                  <h2>
                     blog1
                  </h2>
               </div>
            </div>
                </Col>
            </Row>
             </Container>

        </div>
       </Layout>
     
   )
 }
export default SingleBlog

 