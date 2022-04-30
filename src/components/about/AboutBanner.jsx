import React from 'react'
import { Nav, Button,Row,Container,input } from 'react-bootstrap'

export const AboutBanner = () => {
  return (
    <div>
        <div className="container">
            <div className="row row-marginer">
            <h1 class="about-title">About Us</h1>
            </div>
            <div className="row row-marginer">
                <div className="aboutImg">
                    <img src="assets/aboutbanner.svg" alt="" srcset="assets/aboutbanner.svg" />
                </div>
                <div className="about-text">

                </div>
            </div>


        </div>



    </div>
  )
}
