import React from 'react'
import { Nav, Button,Row,Container,input } from 'react-bootstrap'
import BannerImg from '../../../assets/aboutbannerimg.svg'

export const AboutBanner = () => {
  return (
    <div>
        <div className="container">
            <div className="row row-marginer">
            <h1 class="about-title">About Us</h1>
            </div>
            <div className="row row-marginer">
                <div className="aboutImg">
                    <img src={BannerImg} alt="" />
                </div>
                <div className="about-text">

                </div>
            </div>


        </div>



    </div>
  )
}
