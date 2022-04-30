import React from 'react'
import { Nav, Button,Row,Container,input } from 'react-bootstrap'

function slider() {
  return (
        <Container>
            <Row>
            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                <img src="https://apart.ge/img/projects/bukhaidze-6a.webp" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                <img src="..." className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                <img src="..." className="d-block w-100" alt="..."/>
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
            </div>
            </Row>
        </Container>

  )
}

export default slider