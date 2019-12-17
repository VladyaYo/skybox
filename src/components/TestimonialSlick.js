import React from 'react';
import Slider from "react-slick/lib";
import pagesData from "../assets/data/datatext";
import TestimonialCard from "./TestimonialCard";

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";


const sliderSettings = {
    arrows: true,
    infinite: true,
    speed: 500,
    lazyLoad: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 991,
            settings: {
                fade: false
            }
        }
    ]
};
const TestimonialSlick = props => {
    return (
        <Slider {...sliderSettings}>
            {pagesData.homeData.testimonials.map((item, index)=>{
                return(
                        <TestimonialCard
                            key={index}
                            photo={item.photo}
                            logo={item.logo}
                            name={item.name}
                            info={item.info}
                            testimonial={item.testimonial}
                        />
                )
            })}
        </Slider>
    )
};

export default TestimonialSlick