import React from "react";
import { Nav, Button, Row, Container, Col, input } from "react-bootstrap";
import BannerImg from "../../../assets/aboutbannerimg.svg";
import Beqa from "../../../assets/beqa.svg";
import Beqafull from "../../../assets/beqafull.svg";
import Image from "next/image";
import Team1 from "../../../assets/apartteam/team1.webp";
import Team2 from "../../../assets/apartteam/team2.webp";
import Team3 from "../../../assets/apartteam/team3.webp";
import Team4 from "../../../assets/apartteam/team4.webp";
import Team5 from "../../../assets/apartteam/team5.webp";
import Team6 from "../../../assets/apartteam/team6.webp";
import Team7 from "../../../assets/apartteam/team7.webp";
import Team8 from "../../../assets/apartteam/team8.webp";
import Team9 from "../../../assets/apartteam/team9.webp";
import Team10 from "../../../assets/apartteam/team10.webp";
import Team11 from "../../../assets/apartteam/team11.webp";
import Team12 from "../../../assets/apartteam/team12.webp";
import Team13 from "../../../assets/apartteam/team13.webp";
import Team14 from "../../../assets/apartteam/team14.webp";
import Team15 from "../../../assets/apartteam/team15.webp";
import Team16 from "../../../assets/apartteam/team16.webp";
import Team17 from "../../../assets/apartteam/team17.webp";
import Team18 from "../../../assets/apartteam/team18.webp";
import Team19 from "../../../assets/apartteam/team19.webp";
import Team20 from "../../../assets/apartteam/team20.webp";
import Quote from "../../../assets/quote.svg";
import Video from "../../../assets/video.svg";
export const AboutBanner = () => {
  return (
    <div>
      <Container className="mt-5">
        <h1 className="about-title ">ABOUT US</h1>
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
          <Col xs="5" lg="3" md="3" sm="3" xl="3" xxl="3">
            <hr />
          </Col>
          <Col xs="5" lg="3" md="3" sm="3" xl="3" xxl="3">
            <hr />
          </Col>
        </Row>
        <Row className="mb-60 mt-60 ">
          {/* <Col xs="12" lg="6" md="6" sm="6" xl="6" xxl="6"> */}
          {/* <Row> */}
          <Col xs="12" lg="12" md="12" sm="12" xl="12" xxl="2">
            <h3 className="about--text__hmod">In 2020 Apart Development</h3>
          </Col>
          <Col xs="12" lg="12" md="12" sm="12" xl="12" xxl="4">
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
          {/* </Row> */}
          {/* </Col> */}
          {/* <Col xs="12" lg="6" md="6" sm="6" xl="6" xxl="6"> */}
          {/* <Row> */}
          <Col
            xs="12"
            lg="12"
            md="12"
            sm="12"
            xl="12"
            xxl="2"
            // className="mt-60 "
          >
            <h3 className="about--text__hmod">Another advantage</h3>
          </Col>
          <Col xs="12" lg="12" md="12" sm="12" xl="12" xxl="4">
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
          {/* </Row> */}
          {/* </Col> */}
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
            <Image src={Team8} alt="banner immage" />
            {/* //8 */}
            <h3>Tata Dgebuadze</h3>
            <p>Dir</p>
          </Col>

          <Col xs="6" lg="3" md="3" sm="3" xl="3" xxl="3">
            <Image src={Team10} alt="banner immage" />
            {/* //10 */}
            <h3>Tornike Tsilosani</h3>
            <p>Dir</p>
          </Col>
          <Col xs="6" lg="3" md="3" sm="3" xl="3" xxl="3">
            <Image src={Team13} alt="banner immage" />
            {/* //13 */}
            <h3>Lasha Khabadze</h3>
            <p>Finance</p>
          </Col>
          <Col xs="6" lg="3" md="3" sm="3" xl="3" xxl="3">
            <Image src={Team6} alt="banner immage" />
            {/* //6 */}
            <h3>Vakhtang Chikhradze</h3>
            <p>Strategic</p>
          </Col>
        </Row>

        <Row className="sixty-row">
          <Col xs="6" lg="3" md="3" sm="3" xl="3" xxl="3">
            <Image src={Team2} alt="banner immage" />
            {/* //2 */}
            <h3>Ani Murvanidze</h3>
            <p>Sales</p>
          </Col>
          <Col xs="6" lg="3" md="3" sm="3" xl="3" xxl="3">
            <Image src={Team19} alt="banner immage" />
            {/* //19 */}
            <h3>Saba Janashia</h3>
            <p>Security Head</p>
          </Col>
          <Col xs="6" lg="3" md="3" sm="3" xl="3" xxl="3">
            <Image src={Team3} alt="banner immage" />
            {/* //3 */}
            <h3>Archil Kurtskhalia</h3>
            <p>Architect-Designer</p>
          </Col>
          <Col xs="6" lg="3" md="3" sm="3" xl="3" xxl="3">
            <Image src={Team18} alt="banner immage" />
            {/* //18 */}
            <h3>Natuka Khoperia</h3>
            <p>Office Manager</p>
          </Col>
        </Row>

        <Row className="sixty-row">
          <Col xs="6" lg="3" md="3" sm="3" xl="3" xxl="3">
            <Image src={Team5} alt="banner immage" />
            {/* //5 */}
            <h3>Giorgi Japaridze</h3>
            <p>Accounting Head</p>
          </Col>
          <Col xs="6" lg="3" md="3" sm="3" xl="3" xxl="3">
            <Image src={Team12} alt="banner immage" />
            {/* //12 */}
            <h3>Irakli Chrikashvili</h3>
            <p>lawyer</p>
          </Col>
          <Col xs="6" lg="3" md="3" sm="3" xl="3" xxl="3">
            <Image src={Team11} alt="banner immage" />
            {/* //11 */}
            <h3>Irakli Iobashvili</h3>
            <p>Logistics Head</p>
          </Col>
          <Col xs="6" lg="3" md="3" sm="3" xl="3" xxl="3">
            <Image src={Team15} alt="banner immage" />
            {/* //15 */}
            <h3>Levan Kandelaki</h3>
            <p>Project Manager</p>
          </Col>
        </Row>

        <Row className="sixty-row">
          <Col xs="6" lg="3" md="3" sm="3" xl="3" xxl="3">
            <Image src={Team1} alt="banner immage" />
            {/* //1 */}
            <h3>Avto Sepiashvili</h3>
            <p>Project Manager</p>
          </Col>
          <Col xs="6" lg="3" md="3" sm="3" xl="3" xxl="3">
            <Image src={Team17} alt="banner immage" />
            {/* //17 */}
            <h3>Mamuka Baratashvili</h3>
            <p>Architect</p>
          </Col>
          <Col xs="6" lg="3" md="3" sm="3" xl="3" xxl="3">
            <Image src={Team16} alt="banner immage" />
            {/* //16 */}
            <h3>Liza Lazashvili</h3>
            <p>Jr. Lawyer</p>
          </Col>
          <Col xs="6" lg="3" md="3" sm="3" xl="3" xxl="3">
            <Image src={Team16} alt="banner immage" />
            {/* //16 */}
            <h3>Lasha Chiqobava</h3>
            <p>Distribution Manager</p>
          </Col>
        </Row>

        <Row className="sixty-row">
          <Col xs="6" lg="3" md="3" sm="3" xl="3" xxl="3">
            <Image src={Team9} alt="banner immage" />
            {/* /9 */}
            <h3>Avto Sepiashvili</h3>
            <p>Project Manager</p>
          </Col>
          <Col xs="6" lg="3" md="3" sm="3" xl="3" xxl="3">
            <Image src={Team18} alt="banner immage" />

            <h3>Mamuka Baratashvili</h3>
            <p>Architect</p>
          </Col>
          <Col xs="6" lg="3" md="3" sm="3" xl="3" xxl="3">
            <Image src={Team19} alt="banner immage" />
            <h3>Liza Lazashvili</h3>
            <p>Jr. Lawyer</p>
          </Col>
          <Col xs="6" lg="3" md="3" sm="3" xl="3" xxl="3">
            <Image src={Team9} alt="banner immage" />
            <h3>Liza Chiqobava</h3>
            <p>Distribution Manager</p>
          </Col>
        </Row>
        <Row className="sixty-row">
          <Col xs="6" lg="3" md="3" sm="3" xl="3" xxl="3">
            <Image src={Team20} alt="banner immage" />
            <h3>Tornike Sikharulidze</h3>
            <p>Storage Manager</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
