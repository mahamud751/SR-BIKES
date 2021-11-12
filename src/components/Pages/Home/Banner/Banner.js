import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'

const Banner = () => {
    return (
        <div className="home_banner" >
            <Carousel>
                <Carousel.Item>
                    <img
                        className="img-fluid"
                        src="https://i.ibb.co/7C7fTF3/bmw.png"
                        alt="Second slide"

                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="img-fluid"
                        src="https://i.ibb.co/S66RYxF/photo-1562424292-1fa536217c58.png"
                        alt="Second slide"
                    // style={{ width: '300px' }}
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="img-fluid"
                        src="https://i.ibb.co/RjwDbgB/13743305-173104863110712-1899820740-n.png"
                        alt="Third slide"

                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;