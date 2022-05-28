import { useState } from "react";
import Slider from "react-slick";

import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { Row, Col } from "react-bootstrap";
import Slide1 from "../../../assets/slider.png";
import Slide2 from "../../../assets/slider.png";
import Slide3 from "../../../assets/slider.png";
import Slide4 from "../../../assets/slider.png";
import Taghi from "../../../assets/taghi.svg";

import Image from "next/image";

const images = [Slide1, Slide2, Slide3, Slide4];
function Dslider() {
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
    speed: 500,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  };

  return (
    <div className="custom_row">
      <div className="App">
        <Slider {...settings}>
          {images.map((img, idx) => (
            <div style={{ width: 100 }} key={idx} className={idx === imageIndex ? "slide activeSlide" : "slide"}>
              <Row className="justify-content-between">
                <Col xs="7">
                {/* <Image src={img} alt={img} /> */}
                  <iframe
                    allowFullScreen
                    width="640"
                    height="480"
                    loading="lazy"
                    frameBorder="0"
                    src="https://p3d.in/e/4WKt1+spin+load+nopan+norotate+controls,border,loader-hidden"
                  ></iframe>
                </Col>
                <Col xs="4" className="d-flex">
                  <Col className="col-12 d-flex align-items-center">
                    <div className="test">
                      <Image src={Taghi} alt="banner immage" />
                      <h3>OLD TBILISI</h3>
                      <p>
                        For our team, it is important and a priority to preserve <br />
                        the charm of the old city, to use the old
                        <br />
                        <br />
                        For our team, it is important and a priority to preserve <br /> the charm of the old
                        city, to use the old
                      </p>
                    </div>
                  </Col>
                </Col>
              </Row>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
export default Dslider;
