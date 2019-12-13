import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import TestimonialCard from "./TestimonialCard";
import pagesData from "../assets/data/datatext";

const TestimonialsSlider = props => {
    return (
        <CarouselProvider
            visibleSlides={1}
            totalSlides={pagesData.homeData.testimonials.length}
            step={1}
            naturalSlideWidth={570}
            naturalSlideHeight={370}
            infinite={true}
        >
            <Slider>
                {pagesData.homeData.testimonials.map((item, index)=>{
                    return(
                        <Slide index={index} key={index}>
                            <TestimonialCard
                                photo={item.photo}
                                logo={item.commandLogo}
                                name={item.name}
                                info={item.info}
                                testimonial={item.testimonial}
                            />
                        </Slide>
                    )
                })}
            </Slider>
            <ButtonBack>
                <svg width="14" height="42" viewBox="0 0 14 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 1L2 21L12 41" stroke="#4300D1" strokeWidth="3"/>
                </svg>
            </ButtonBack>
            <ButtonNext>
                <svg width="14" height="42" viewBox="0 0 14 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 1L12 21L2 41" stroke="#4300D1" strokeWidth="3"/>
                </svg>
            </ButtonNext>
        </CarouselProvider>
    )
};

export default TestimonialsSlider