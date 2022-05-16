import { useState } from "react";
import Slider from "react-slick";
import astronaut from "../../assets/astronaut.png";
import celebrating from "../../assets/celebrating.png";
import education from "../../assets/education.png";
import taken from "../../assets/taken.png";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { Nav, Button,Row,Container,input,Carousel, Col } from 'react-bootstrap'
import Slide1 from '../../../assets/slider.png'
import Taghi from '../../../assets/taghi.svg'

import Image from 'next/image'

const images = [Slide1, celebrating, education, taken];
function slider() {
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <FaArrowRight />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <FaArrowLeft />
      </div>
    );
  };

  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  };

  return (
    <div className="App">
      <Slider {...settings}>
        {images.map((img, idx) => (
          <div style={{ width: 100 }} className={idx === imageIndex ? "slide activeSlide" : "slide"}>
            <Row className="justify-content-between">
              <Col xs="7">
              <Image src={Slide1} alt="banner immage" />
              </Col>
              <Col xs="3" className="d-flex">
              <Col className='col-12 d-flex align-items-center'>
                <div className=''>
                <Image src={Taghi} alt="banner immage" />
                <h3>OLD TBILISI</h3>
                <p>For our team, it is important and a priority to preserve   <br/>the charm of the old city, to use the old
                <br/>
                <br/>
                For our team, it is important and a priority to preserve  <br/> the charm of the old city, to use the old
                </p>
                </div>
            
              </Col>
              </Col>
            </Row>
          </div>
        ))}
      </Slider>
    </div>
  );
}
export default slider