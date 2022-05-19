import React from 'react'
import { Nav, Button,Row,Container, Col,input } from 'react-bootstrap'
import BannerImg from '../../../assets/aboutbannerimg.svg'
import Beqa from '../../../assets/beqa.svg'
import Beqafull from '../../../assets/beqafull.svg'
import Image from 'next/image'
import Quote from '../../../assets/quote.svg'
import Video from '../../../assets/video.svg'
export const AboutBanner = () => {
return (
<div>
    <Container className="mt-5">
    <Row className="row-marginer">
        <Col xs="2">
        <h1 className="about-title">ABOUT US</h1>
        </Col>
        <Col xs="3">
        <Image src={Beqa} alt="banner immage" />
        </Col>
        <Col xs="5" className="align-items-center d-flex">
            <div>
            <p>
            “ started new project OLD CITY PANORAMA whitch is different and special poject in Tbilisi. Project perfectly suits the architectural style of Old Tbilisi, It is located on Bukhaidze Street, in the historical part of Tbilisi. Our goal ”
            </p>
            <h2>
            Beka Khoperia
            </h2>
            <h3>
            Founder
            </h3>
            </div>
        </Col>
        <Col xs="2">
        <Image src={Quote} alt="banner immage" />
        </Col>
    </Row>
    <Row className="justify-content-between">
        <Col xs="3">
            <hr/>
        </Col>
        <Col xs="3">
            <hr/>
        </Col>
    </Row>
    <Row>
        <Col xs="2">
        <h3 className='about--text__hmod'>
               In 2020 Apart Development
            </h3>
        </Col>
        <Col xs="4">
        <p className='about--text__ptmod2'>
            started new project OLD CITY PANORAMA whitch is different and special poject in Tbilisi. Project perfectly suits the architectural style of Old Tbilisi, It is located on Bukhaidze Street, in the historical part of Tbilisi. Our goal is to match the exterior of the project perfectly with the wider city planning, which is why the Old City Panorama project includes three buildings and is only eight floors high. The project is also important because it has many sights close to it: one of the most important attractions of the city, the Holy Trinity Cathedral, just 250 meters away, the historic Metekhi Fortress and Temple, and Narikala and Rike Park.
        </p>
        </Col>
        <Col xs="2">
        <h3 className='about--text__hmod'>
            Another advantage
        </h3>
        </Col>
        <Col xs="4">
        <p className='about--text__ptmod__mod'>
        OLD CITY PANORAMA is the amazing views and greenery of Old Tbilisi. For residents on the first floor, living in “townhouse” type dwellings, we have individual yards. The area includes a swimming pool, spa, gym equipment and a cafe-bar. The apartments are being delivered both in green frame condition and with complete renovation. Buying an apartment with Apart Development is a sensible investment, as we also offer rental service to our customers if they wish, which means that the apartment owner can turn their real estate into a source of income without a lot of effort. Our goal is to continue to strive for progress, to contribute to the urban development of Tbilisi, which means that we want to cover the territories of Old Tbilisi, replace damaged buildings with new residential complexes, which will be the best example of combining the Old Tbilisi architectural style with the new. We want to give new life to Old Tbilisi and create a service focused on the wishes and needs of customers. Apart Development will establish a new lifestyle in Old Tbilisi.
        </p>
        </Col>
    </Row>
    <Col xs="12" className='mt-5'>
    <Image src={Video} alt="banner immage" />
    </Col>
    </Container>
    <section className="cover">

    </section>
    <Container>
        <Row className="row-marginer">
        <h1 >OUR TEAM</h1>
        </Row>
        <Row>
            <Col xs="3">
            <Image src={Beqafull} alt="banner immage" />
            <h3>
               Beka Khoperia
            </h3>
            <p>Founder</p>
            </Col>
            <Col xs="3">
            <Image src={Beqafull} alt="banner immage" />
            <h3>
               Beka Khoperia
            </h3>
            <p>Founder</p>
            </Col>
            <Col xs="3">
            <Image src={Beqafull} alt="banner immage" />
            <h3>
               Beka Khoperia
            </h3>
            <p>Founder</p>
            </Col>
            <Col xs="3">
            <Image src={Beqafull} alt="banner immage" />
            <h3>
               Beka Khoperia
            </h3>
            <p>Founder</p>
            </Col>
            <Col xs="3">
            <Image src={Beqafull} alt="banner immage" />
            <h3>
               Beka Khoperia
            </h3>
            <p>Founder</p>
            </Col>
            <Col xs="3">
            <Image src={Beqafull} alt="banner immage" />
            <h3>
               Beka Khoperia
            </h3>
            <p>Founder</p>
            </Col>
            <Col xs="3">
            <Image src={Beqafull} alt="banner immage" />
            <h3>
               Beka Khoperia
            </h3>
            <p>Founder</p>
            </Col>
            <Col xs="3">
            <Image src={Beqafull} alt="banner immage" />
            <h3>
               Beka Khoperia
            </h3>
            <p>Founder</p>
            </Col>
            <Col xs="3">
            <Image src={Beqafull} alt="banner immage" />
            <h3>
               Beka Khoperia
            </h3>
            <p>Founder</p>
            </Col>
            <Col xs="3">
            <Image src={Beqafull} alt="banner immage" />
            <h3>
               Beka Khoperia
            </h3>
            <p>Founder</p>
            </Col>
            <Col xs="3">
            <Image src={Beqafull} alt="banner immage" />
            <h3>
               Beka Khoperia
            </h3>
            <p>Founder</p>
            </Col>
            <Col xs="3">
            <Image src={Beqafull} alt="banner immage" />
            <h3>
               Beka Khoperia
            </h3>
            <p>Founder</p>
            </Col>
        </Row>
    </Container>
 
</div>
)
}
