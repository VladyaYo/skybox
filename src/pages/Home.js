import React from 'react';
import {Link} from "react-router-dom";
import styled from "styled-components";

import vars from "../assets/styles/varsStyles";
//components
import SliderSmallCard from "../components/SliderSmallCard";
import TestimonialsSlider from "../components/TestimonialsSlider";
import PricingCard from "../components/PricingCard";
import FullScreenTabs from "../components/FullScreenTabs";
import News from "../components/News"
//content
import bgfirstscreen from '../assets/img/bgmain.jpg';
import bgGetFree from '../assets/img/bgGetFree.jpg';
import bgTestimonials from '../assets/img/bgTestimonials.svg';

import pagesData from "../assets/data/datatext"


const Container = styled.div`
max-width: 1170px;
width: 100%;
margin: auto;
display: flex;
flex-flow: ${props => props.row ? "column" : "row"} wrap;
justify-content: ${props => props.justifystart ? "space-between" : "center"};
align-items: ${props => props.alignStart ? "center" : "flex-start"};
`;
const FirstScreen = styled.section`
background-image: url("${bgfirstscreen}");
background-position: top center;
background-repeat: no-repeat;
background-size: cover;
position:relative;
top: -84px;
min-height: 680px;
`;
const MainTextBlock = styled.div`
display: flex;
flex-flow: column;
justify-content: space-between;
align-items: flex-start;
width: 90%;
max-width: 546px;
color: #ffffff;
margin-top: 235px;
& > h1{
& > span{
position: relative;
& > strong{
z-index: 5;
position: relative;
}
&:before{
content: "";
width: 110%;
height: 100%;
position:absolute;
left: -12%;
background-color: #4300D1;
z-index: 1;
}
}
}
& > .first{
margin: 23px 0 10px;
}
& > a{
border: 1px solid #FFFFFF;
border-radius: 4px;
max-width: 230px;
width: 90%;
display: flex;
justify-content: center;
align-items: center;
padding: 15px 0;
font-family: ${vars.fonts.releway};
font-style: normal;
font-weight: 500;
font-size: 12px;
line-height: 14px;
text-align: center;
text-transform: uppercase;
color: #ffffff;
margin: 30px 0;
 transition: .4s ease all;
  &:hover{
  cursor:pointer;
  background-color: rgba(0,0,0,.3);
  }
}
`;
const GetFree = styled.section`
background-image: url("${bgGetFree}");
background-position: right;
background-repeat: no-repeat;
max-width: 1920px;
margin: auto;
width: 100%;
min-height: 400px;
display: flex;
justify-content: center;
align-items: center;
`;
const Text = styled.div`
display: flex;
flex-flow: column;
justify-content: space-between;
align-items: flex-start;
max-width: 439px;
width: 90%;
& > h2{
color: ${vars.colors.brand1};
}
p{
margin:30px 0 10px;
color: ${vars.colors.textBlack}
}
& > a{
border: 1px solid ${vars.colors.brand1};
border-radius: 4px;
max-width: 230px;
width: 90%;
display: flex;
justify-content: center;
align-items: center;
padding: 15px 0;
font-family: ${vars.fonts.releway};
font-style: normal;
font-weight: 500;
font-size: 12px;
line-height: 14px;
text-align: center;
text-transform: uppercase;
color: ${vars.colors.brand1};
margin: 30px 0 0;
 transition: .4s ease all;
  &:hover{
  cursor:pointer;
  background-color: ${vars.colors.brand1};
  color: ${vars.colors.white};
  }
}
`;
const SliderSection = styled.section`
    overflow-x: hidden;
    min-height: 530px;
display: flex;
flex-flow: column nowrap;
justify-content: flex-start;
align-items: center;
`;
const SliderWrap = styled.div`
width: 90%;
max-width: 1140px;
position: relative;
margin: 0 auto;
h2{
margin-bottom: 20px;
color: ${vars.colors.brand1};
}
& > .carousel{
width: 1550px;
position: absolute;
left: 0;
top: 80px;
& > button{
    position: absolute;
    top: -10px;
    left: 1070px;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    background-color: #4300D1;
    border: none;
    outline: none;
    transition: .4s ease all;
    &:last-child{
    left: 1140px;
    }
    &[disabled]{
    background-color: rgba(67, 0, 209, 0.5);
    }
}
}
`;
const TestimonialsSection = styled.section`
background-image: url("${bgTestimonials}");
background-position: top center;
background-repeat: no-repeat;
background-size: cover;
& >.carousel{
width: 570px;
margin: 50px auto;
position: relative;
& > button{
    position: absolute;
    top: 50%;
    width: 10px;
    height: 40px;
    background-color: transparent;
    border: none;
    outline: none;
    transition: .4s ease all;
     left: -30px;
     padding: 0;
    &:last-child{
    left: auto;
    right: -30px;
    }
    &[disabled]{
   
    }
}
}
`;
const PricingSection = styled.section`

`;
const TabsSection = styled.section`
position:relative;
margin: 120px auto 100px;
`;
const NewsSection = styled.section`

`;

const Home = props => {
    const {firstScreen} = pagesData.homeData;
    const {getFree} = pagesData.homeData;
    return (
       <main>
        <FirstScreen>
            <Container justifystart>
                <MainTextBlock>
                    <h1><span><strong>{firstScreen.h1span}</strong></span>{firstScreen.h1}</h1>
                    <p className="first">{firstScreen.subheading1}</p>
                    <p>{firstScreen.subheading2}</p>
                    <Link to={`download`}>
                        {firstScreen.button}
                    </Link>
                </MainTextBlock>
            </Container>
        </FirstScreen>
           <GetFree>
                <Container justifystart>
                    <Text>
                        <h2>{getFree.heading}</h2>
                        <p>{getFree.subheading}</p>
                        <Link to={`download`}>
                            {getFree.heading}
                        </Link>
                    </Text>
                </Container>
            </GetFree>
           <SliderSection>
               <SliderWrap>
                   <SliderSmallCard/>
               </SliderWrap>
           </SliderSection>
           <TestimonialsSection>
               <TestimonialsSlider/>
           </TestimonialsSection>
           <PricingSection>
               <Container justifystart>
                   {pagesData.homeData.pricing.map((item, index)=>{
                       return(
                               <PricingCard
                                   index={index}
                                   key={index}
                                   heading={item.heading}
                                   about={item.about}
                                   priceText={item.priceText}
                                   price={item.price}
                                   button={item.button}
                               />
                       )
                   })}
               </Container>
           </PricingSection>
           <TabsSection>
               <FullScreenTabs/>
           </TabsSection>
           <NewsSection>
               <News/>
           </NewsSection>
       </main>
    )
};
export default Home