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
                        <h6>SR BIKE SHOP THE MOST LARGEST BIKE STORE IN THE WOLD CAN SERVE YOU LATEST QUALITY OF MOTORCYCLE ALSO YOU CAN SELL HERE YOUR MOTORCYCLE</h6>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="img-fluid"
                        src="https://i.ibb.co/16Cj7qP/81lk3mc3y-EL-removebg-preview.png"
                        alt="Second slide"
                    // style={{ width: '300px' }}
                    />

                    <Carousel.Caption>
                        <h6>BOOK YOUR BIKE INSTANTLY AND ENJOY DISCOUNT</h6>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="img-fluid"
                        src="https://i.ibb.co/z41f2kq/photo-1622185135505-2d795003994a-1.png"
                        alt="Third slide"

                    />

                    <Carousel.Caption>
                        <h6>ENJOY DISCOUNT 50%</h6>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;