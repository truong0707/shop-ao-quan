import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import Slider from "react-slick";
import '../reuseComponents/reuseComponents.css';

import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';

function SampleNextArrow(props) {
    const { onClick } = props;
    return (
        <div className="btn-arrow-slider" onClick={onClick}><IoIosArrowForward className="btn-next-slider" /></div>
    );
}

function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
        <div className="btn-arrow-slider" onClick={onClick}>< IoIosArrowBack className="btn-prev-slider" /></div>
    );
}


export default class SliderProduct extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            slidesToShow: 5,
            slidesToScroll: 3,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />,
            responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                  }
                },
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
              ]
            
        };
        return (
            <div style={{marginTop:'5px'}}>
                  <Slider className="box__slider__product" {...settings}>
                    <div className="wrap__item__slider">
                        <div className="card__product card">
                            <img src='https://cdn.shopify.com/s/files/1/0071/4755/2866/files/6-min_640x.jpg?v=1586162770' className="card-img-top" alt="..." />
                            {/* <div className="card-body">
                                <p style={{ fontSize: '10px', height: '25px', marginTop: '10px' }} className="card-text">T</p>
                            </div> */}
                        </div>
                    </div>

                    <div className="wrap__item__slider">
                        <div className="card__product card">
                            <img src='https://cdn.shopify.com/s/files/1/0071/4755/2866/files/6-min_640x.jpg?v=1586162770' className="card-img-top" alt="..." />
                            {/* <div className="card-body">
                                <p style={{ fontSize: '10px', height: '25px', marginTop: '10px' }} className="card-text">T</p>
                            </div> */}
                        </div>
                    </div>

                    <div className="wrap__item__slider">
                        <div className="card__product card">
                            <img src='https://cdn.shopify.com/s/files/1/0071/4755/2866/files/6-min_640x.jpg?v=1586162770' className="card-img-top" alt="..." />
                            {/* <div className="card-body">
                                <p style={{ fontSize: '10px', height: '25px', marginTop: '10px' }} className="card-text">T</p>
                            </div> */}
                        </div>
                    </div>

                    <div className="wrap__item__slider">
                        <div className="card__product card">
                            <img src='https://cdn.shopify.com/s/files/1/0071/4755/2866/files/6-min_640x.jpg?v=1586162770' className="card-img-top" alt="..." />
                            {/* <div className="card-body">
                                <p style={{ fontSize: '10px', height: '25px', marginTop: '10px' }} className="card-text">T</p>
                            </div> */}
                        </div>
                    </div>

                    <div className="wrap__item__slider">
                        <div className="card__product card">
                            <img src='https://cdn.shopify.com/s/files/1/0071/4755/2866/files/6-min_640x.jpg?v=1586162770' className="card-img-top" alt="..." />
                            {/* <div className="card-body">
                                <p style={{ fontSize: '10px', height: '25px', marginTop: '10px' }} className="card-text">T</p>
                            </div> */}
                        </div>
                    </div>

                    <div className="wrap__item__slider">
                        <div className="card__product card">
                            <img src='https://cdn.shopify.com/s/files/1/0071/4755/2866/files/6-min_640x.jpg?v=1586162770' className="card-img-top" alt="..." />
                            {/* <div className="card-body">
                                <p style={{ fontSize: '10px', height: '25px', marginTop: '10px' }} className="card-text">T</p>
                            </div> */}
                        </div>
                    </div>

                    <div className="wrap__item__slider">
                        <div className="card__product card">
                            <img src='https://cdn.shopify.com/s/files/1/0071/4755/2866/files/6-min_640x.jpg?v=1586162770' className="card-img-top" alt="..." />
                            {/* <div className="card-body">
                                <p style={{ fontSize: '10px', height: '25px', marginTop: '10px' }} className="card-text">T</p>
                            </div> */}
                        </div>
                    </div>

                    <div className="wrap__item__slider">
                        <div className="card__product card">
                            <img src='https://cdn.shopify.com/s/files/1/0071/4755/2866/files/6-min_640x.jpg?v=1586162770' className="card-img-top" alt="..." />
                            {/* <div className="card-body">
                                <p style={{ fontSize: '10px', height: '25px', marginTop: '10px' }} className="card-text">T</p>
                            </div> */}
                        </div>
                    </div>


                    <div className="wrap__item__slider">
                        <div className="card__product card">
                            <img src='https://cdn.shopify.com/s/files/1/0071/4755/2866/files/6-min_640x.jpg?v=1586162770' className="card-img-top" alt="..." />
                            {/* <div className="card-body">
                                <p style={{ fontSize: '10px', height: '25px', marginTop: '10px' }} className="card-text">T</p>
                            </div> */}
                        </div>
                    </div>


                    <div className="wrap__item__slider">
                        <div className="card__product card">
                            <img src='https://cdn.shopify.com/s/files/1/0071/4755/2866/files/6-min_640x.jpg?v=1586162770' className="card-img-top" alt="..." />
                            {/* <div className="card-body">
                                <p style={{ fontSize: '10px', height: '25px', marginTop: '10px' }} className="card-text">T</p>
                            </div> */}
                        </div>
                    </div>


                    <div className="wrap__item__slider">
                        <div className="card__product card">
                            <img src='https://cdn.shopify.com/s/files/1/0071/4755/2866/files/6-min_640x.jpg?v=1586162770' className="card-img-top" alt="..." />
                            {/* <div className="card-body">
                                <p style={{ fontSize: '10px', height: '25px', marginTop: '10px' }} className="card-text">T</p>
                            </div> */}
                        </div>
                    </div>

                    <div className="wrap__item__slider">
                        <div className="card__product card">
                            <img src='https://cdn.shopify.com/s/files/1/0071/4755/2866/files/5-min_640x.jpg?v=1586162763' className="card-img-top" alt="..." />
                            {/* <div className="card-body">
                                <p style={{ fontSize: '10px', height: '25px', marginTop: '10px' }} className="card-text">T</p>
                            </div> */}
                        </div>
                    </div>

                    <div className="wrap__item__slider">
                        <div className="card__product card">
                            <img src='https://cdn.shopify.com/s/files/1/0071/4755/2866/files/5-min_640x.jpg?v=1586162763' className="card-img-top" alt="..." />
                            {/* <div className="card-body">
                                <p style={{ fontSize: '10px', height: '25px', marginTop: '10px' }} className="card-text">T</p>
                            </div> */}
                        </div>
                    </div>

                    <div className="wrap__item__slider">
                        <div className="card__product card">
                            <img src='https://cdn.shopify.com/s/files/1/0071/4755/2866/files/5-min_640x.jpg?v=1586162763' className="card-img-top" alt="..." />
                            {/* <div className="card-body">
                                <p style={{ fontSize: '10px', height: '25px', marginTop: '10px' }} className="card-text">T</p>
                            </div> */}
                        </div>
                    </div>

                    <div className="wrap__item__slider">
                        <div className="card__product card">
                            <img src='https://cdn.shopify.com/s/files/1/0071/4755/2866/files/5-min_640x.jpg?v=1586162763' className="card-img-top" alt="..." />
                            {/* <div className="card-body">
                                <p style={{ fontSize: '10px', height: '25px', marginTop: '10px' }} className="card-text">T</p>
                            </div> */}
                        </div>
                    </div>
                </Slider>
            </div>
        );
    }
}