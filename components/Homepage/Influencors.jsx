'use client'

import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Headings from '../Utils/Headings';
import VideoSection from "./Video.jsx";
import './influencors.css';

const Influencors = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        pauseOnHover: true,
        autoplaySpeed: 2000
    };
    return (
        <section className="slider-section mt-16">
            <Headings sectionName={'Author Spotlight'} Title={'Featured Author Videos'} Desc={'Hear directly from the writers behind our most inspiring books'}></Headings>
            <div style={{ marginTop: '-3rem' }} className="slider-container">
                <Slider {...settings}>
                    <div>
                        <VideoSection thumbnail={'/Top-Instructors/thumbnail3.jpg'} id={'nnpdLbTSJSg'}></VideoSection>
                    </div>
                    <div>
                        <VideoSection thumbnail={'/Top-Instructors/thumbnail2.jpg'} id={'OTvm5LfhDzg'}></VideoSection>
                    </div>
                    <div>
                        <VideoSection thumbnail={'/Top-Instructors/thumbnail1.jpg'} id={'86IQpZvgySo'}></VideoSection>
                    </div>
                </Slider>
            </div>
        </section>
    );
};

export default Influencors;