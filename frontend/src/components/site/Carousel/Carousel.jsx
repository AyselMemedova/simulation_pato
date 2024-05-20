import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css";

function Carousel() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <Slider {...settings}>
            <div className='frst_slide'>
                <div className='section_img'>
                    <img src="https://preview.colorlib.com/theme/pato/images/slide1-01.jpg.webp" alt="" />

                </div>
                <div className='slide_text'>
                    <h3>Welcome to</h3>
                    <h2>PATO PLACE</h2>
                    <button id='slider_btn'>LOOK MENU</button>
                </div>

            </div>
            
            <div className='frst_slide'>
                <div className="section_img">
                <img src="https://preview.colorlib.com/theme/pato/images/master-slides-01.jpg.webp" alt="" />

                </div>
                <div className='slide_text'>
                    <h3>Welcome to</h3>
                    <h2>PATO PLACE</h2>
                    <button>LOOK MENU</button>
                </div>
            </div>
            <div className='frst_slide'>
                <div className="section_img">
                <img src="https://preview.colorlib.com/theme/pato/images/master-slides-02.jpg.webp" alt="" />

                </div>
                <div className='slide_text'>
                    <h3>Welcome to</h3>
                    <h2>PATO PLACE</h2>
                    <button>LOOK MENU</button>
                </div>
            </div>

        </Slider>
    )
}

export default Carousel

