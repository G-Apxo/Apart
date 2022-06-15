import React from "react";
import { Nav, Button, Row, Container, Col, input } from "react-bootstrap";
import BannerImg from "../../../assets/aboutbannerimg.svg";
import Beqa from "../../../assets/beqa.svg";
import Beqafull from "../../../assets/beqafull.svg";
import Image from "next/image";
import Team1 from "../../../assets/team/team1.jpg";
import Team2 from "../../../assets/team/team2.jpg";
import Team3 from "../../../assets/team/team3.jpg";
import Team4 from "../../../assets/team/team4.jpeg";
import Team5 from "../../../assets/team/team5.jpg";
import Team6 from "../../../assets/team/team6.jpg";
import Team7 from "../../../assets/team/team7.jpg";
import Team8 from "../../../assets/team/team8.jpg";
import Team9 from "../../../assets/team/team9.jpg";
import Team10 from "../../../assets/team/team10.jpg";
import Team11 from "../../../assets/team/team11.jpg";
import Team12 from "../../../assets/team/team12.jpg";
import Team13 from "../../../assets/team/team13.jpg";
import Team14 from "../../../assets/team/team14.jpg";
import Team15 from "../../../assets/team/team15.jpg";
import Team16 from "../../../assets/team/team16.jpg";
import Team17 from "../../../assets/team/team17.jpg";
import Team18 from "../../../assets/team/team18.jpg";
import Team19 from "../../../assets/team/team19.jpg";
import Team20 from "../../../assets/team/team20.jpg";
import Team21 from "../../../assets/team/team21.jpg";
import Quote from "../../../assets/quote.svg";
import Video from "../../../assets/video.svg";
export const AboutBanner = () => {
  return (
    <div>
      <Container className="mt-5">
        <h1 className="about-title">ABOUT US</h1>
        <Row className="row-marginer justify-content-end">
          <Col xs="12" lg="3" md="3" sm="3" xl="3" xxl="3" className="d-flex justify-content-center">
            <Image src={Beqa} alt="banner immage" />
          </Col>
          <Col xs="12" lg="5" md="5" sm="5" xl="5" xxl="5" className="align-items-center d-flex mt-5">
            <div>
              <p>
                “ started new project OLD CITY PANORAMA whitch is different and special poject in Tbilisi.
                Project perfectly suits the architectural style of Old Tbilisi, It is located on Bukhaidze
                Street, in the historical part of Tbilisi. Our goal ”
              </p>
              <h2>Beka Khoperia</h2>
              <h3>Founder</h3>
            </div>
          </Col>
          <Col xs="2" className="no_mobile">
            <Image src={Quote} alt="banner immage" />
          </Col>
        </Row>
        <Row className="justify-content-between mb-60 mt-60">
          <Col  xs="5" lg="3" md="3" sm="3" xl="3" xxl="3">
            <hr />
          </Col>
          <Col  xs="5" lg="3" md="3" sm="3" xl="3" xxl="3">
            <hr />
          </Col>
        </Row>
        <Row className="mb-60 mt-60 ">
          <Col xs="12" lg="6" md="6" sm="6" xl="6" xxl="6" >
          <Row >
          <Col xs="12" lg="12" md="12" sm="12" xl="12" xxl="12">
            <h3 className="about--text__hmod">In 2020 Apart Development</h3>
          </Col>
          <Col xs="12" lg="12" md="12" sm="12" xl="12" xxl="12">
            <p className="about--text__ptmod2">
              started new project OLD CITY PANORAMA whitch is different and special poject in Tbilisi. Project
              perfectly suits the architectural style of Old Tbilisi, It is located on Bukhaidze Street, in
              the historical part of Tbilisi. Our goal is to match the exterior of the project perfectly with
              the wider city planning, which is why the Old City Panorama project includes three buildings and
              is only eight floors high. The project is also important because it has many sights close to it:
              one of the most important attractions of the city, the Holy Trinity Cathedral, just 250 meters
              away, the historic Metekhi Fortress and Temple, and Narikala and Rike Park.
            </p>
          </Col>
          </Row>
          </Col>
          <Col xs="12" lg="6" md="6" sm="6" xl="6" xxl="6">
          <Row>
        <Col xs="12" lg="12" md="12" sm="12" xl="12" xxl="12" className="mt-60 ">
            <h3 className="about--text__hmod">Another advantage</h3>
          </Col>
          <Col xs="12" lg="12" md="12" sm="12" xl="12" xxl="12">
            <p className="about--text__ptmod__mod ">
              OLD CITY PANORAMA is the amazing views and greenery of Old Tbilisi. For residents on the first
              floor, living in “townhouse” type dwellings, we have individual yards. The area includes a
              swimming pool, spa, gym equipment and a cafe-bar. The apartments are being delivered both in
              green frame condition and with complete renovation. Buying an apartment with Apart Development
              is a sensible investment, as we also offer rental service to our customers if they wish, which
              means that the apartment owner can turn their real estate into a source of income without a lot
              of effort. Our goal is to continue to strive for progress, to contribute to the urban
              development of Tbilisi, which means that we want to cover the territories of Old Tbilisi,
              replace damaged buildings with new residential complexes, which will be the best example of
              combining the Old Tbilisi architectural style with the new. We want to give new life to Old
              Tbilisi and create a service focused on the wishes and needs of customers. Apart Development
              will establish a new lifestyle in Old Tbilisi.
            </p>
          </Col>
        </Row>
            </Col>
        </Row>
       
      
        <Col xs="12" className="mb-60 mt-60">
          <Image src={Video} alt="banner immage" />
        </Col>
      </Container>
      <section className="cover mt-120"></section>
      <Container className="mb-120 mt-120">
        <Row className="row-marginer mb-60 ">
          <h1>OUR TEAM</h1>
        </Row>
        <Row className="sixty-row">
          <Col xs="6" lg="3" md="3" sm="3" xl="3" xxl="3">
            <Image src={Team1} alt="banner immage" />
            <h3>Beka Khoperia</h3>
            <p>Founder</p>
          </Col>
          <Col xs="6" lg="3" md="3" sm="3" xl="3" xxl="3">
            <Image src={Team2} alt="banner immage"/>
            <h3>Beka Khoperia</h3>
            <p>Founder</p>
          </Col>
          <Col xs="6" lg="3" md="3" sm="3" xl="3" xxl="3">
            <Image src={Team3} alt="banner immage" />
            <h3>Beka Khoperia</h3>
            <p>Founder</p>
          </Col>
          <Col xs="6" lg="3" md="3" sm="3" xl="3" xxl="3">
            <Image src={Team4} alt="banner immage" />
            <h3>Beka Khoperia</h3>
            <p>Founder</p>
          </Col>
        </Row>
        <Row className="sixty-row">
          <Col xs="6" lg="3" md="3" sm="3" xl="3" xxl="3">
            <Image src={Team5} alt="banner immage" />
            <h3>Beka Khoperia</h3>
            <p>Founder</p>
          </Col>
          <Col xs="6" lg="3" md="3" sm="3" xl="3" xxl="3">
            <Image src={Team6} alt="banner immage" />
            <h3>Beka Khoperia</h3>
            <p>Founder</p>
          </Col>
          <Col xs="6" lg="3" md="3" sm="3" xl="3" xxl="3">
            <Image src={Team7} alt="banner immage" />
            <h3>Beka Khoperia</h3>
            <p>Founder</p>
          </Col>
          <Col xs="6" lg="3" md="3" sm="3" xl="3" xxl="3">
            <Image src={Team8} alt="banner immage" />
            <h3>Beka Khoperia</h3>
            <p>Founder</p>
          </Col>
        </Row>
        <Row className="sixty-row">
          <Col xs="6" lg="3" md="3" sm="3" xl="3" xxl="3">
            <Image src={Team9} alt="banner immage" />
            <h3>Beka Khoperia</h3>
            <p>Founder</p>
          </Col>
          <Col xs="6" lg="3" md="3" sm="3" xl="3" xxl="3">
            <Image src={Team10} alt="banner immage" />
            <h3>Beka Khoperia</h3>
            <p>Founder</p>
          </Col>
          <Col xs="6" lg="3" md="3" sm="3" xl="3" xxl="3">
            <Image src={Team11} alt="banner immage" />
            <h3>Beka Khoperia</h3>
            <p>Founder</p>
          </Col>
          <Col xs="6" lg="3" md="3" sm="3" xl="3" xxl="3">
            <Image src={Team12} alt="banner immage" />
            <h3>Beka Khoperia</h3>
            <p>Founder</p>
          </Col>
        </Row>
        <Row className="sixty-row">
          <Col xs="6" lg="3" md="3" sm="3" xl="3" xxl="3">
            <Image src={Team13} alt="banner immage" />
            <h3>Beka Khoperia</h3>
            <p>Founder</p>
          </Col>
          <Col xs="6" lg="3" md="3" sm="3" xl="3" xxl="3">
            <Image src={Team14} alt="banner immage" />
            <h3>Beka Khoperia</h3>
            <p>Founder</p>
          </Col>
          <Col xs="6" lg="3" md="3" sm="3" xl="3" xxl="3">
            <Image src={Team15} alt="banner immage" />
            <h3>Beka Khoperia</h3>
            <p>Founder</p>
          </Col>
          <Col xs="6" lg="3" md="3" sm="3" xl="3" xxl="3">
            <Image src={Team16} alt="banner immage" />
            <h3>Beka Khoperia</h3>
            <p>Founder</p>
          </Col>
        </Row>
        <Row className="sixty-row">
          <Col xs="6" lg="3" md="3" sm="3" xl="3" xxl="3">
            <Image src={Team17} alt="banner immage" />
            <h3>Beka Khoperia</h3>
            <p>Founder</p>
          </Col>
          <Col xs="6" lg="3" md="3" sm="3" xl="3" xxl="3">
            <Image src={Team18} alt="banner immage" />
            <h3>Beka Khoperia</h3>
            <p>Founder</p>
          </Col>
          <Col xs="6" lg="3" md="3" sm="3" xl="3" xxl="3">
            <Image src={Team19} alt="banner immage" />
            <h3>Beka Khoperia</h3>
            <p>Founder</p>
          </Col>
          <Col xs="6" lg="3" md="3" sm="3" xl="3" xxl="3">
            <Image src={Team20} alt="banner immage" />
            <h3>Beka Khoperia</h3>
            <p>Founder</p>
          </Col>
        </Row>
        <Row className="sixty-row">
          <Col xs="6" lg="3" md="3" sm="3" xl="3" xxl="3">
            <Image src={Team21} alt="banner immage" />
            <h3>Beka Khoperia</h3>
            <p>Founder</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
