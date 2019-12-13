import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import Card from "./Card";
import pagesData from "../assets/data/datatext";


const SliderSmallCard = props => {
    return (
        <CarouselProvider
            visibleSlides={5}
            totalSlides={(pagesData.homeData.trustedBy.length)+4}
            step={1}
            naturalSlideWidth={270}
            naturalSlideHeight={330}
        >
            <h2>Trusted BY</h2>
            <Slider>
                {pagesData.homeData.trustedBy.map((item, index)=>{
                    return(
                        <Slide index={index} key={index}>
                            <Card
                                logo={item.logo}
                                title={item.title}
                                description={item.description}
                                link={item.link}
                            />
                        </Slide>
                    )
                })}
            </Slider>
            <ButtonBack>
                <svg width="12" height="26" viewBox="0 0 12 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11 1L1 13L11 25" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </ButtonBack>
            <ButtonNext>
                <svg width="12" height="26" viewBox="0 0 12 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L11 13L1 25" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </ButtonNext>
        </CarouselProvider>
    )
};

export default SliderSmallCard