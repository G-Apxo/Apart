import { useState } from "react";
import Slider from "react-slick";
// import Test from "../Test/Test";
// import D3scene from "../3dscene/3dscene";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { Row, Col,Container } from "react-bootstrap";
import Slide1 from "../../assets/slider.png";
import Slide2 from "../../assets/slider.png";
import Slide3 from "../../assets/slider.png";
import Slide4 from "../../assets/slider.png";
import Taghi from "../../assets/taghi.svg";

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
    slidesToShow: 1,
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
            <div
              style={{ width: 100 }}
              key={idx}
              className={idx === imageIndex ? "slide activeSlide" : "slide"}
            >
              <Container className="custom__width">
              <Row>
                <Col xs="12" lg="6" md="6" sm="6" xl="6" xxl="6" >
                 <Image src={img} alt={img} />
                   {/* <iframe
                    allowFullScreen
                    width="640"
                    height="480"
                    loading="lazy"
                    frameBorder="0"
                    src="https://resilient-ganache-549f6c.netlify.app/frame/"
                  ></iframe>  */}
                </Col>
                <Col xs="12" lg="6" md="6" sm="6" xl="6" xxl="6" className="d-flex">
                  <Col className="d-flex align-items-center">
                    <div className="test">
                      <Image src={Taghi} alt="banner immage" className="Taghi" />
                      <p className="mt-40">
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
              </Container>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
export default Dslider;
