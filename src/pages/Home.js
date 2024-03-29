import React from 'react';
import {Link} from "react-router-dom";
import styled from "styled-components";
import vars from "../assets/styles/varsStyles";
import {device}  from "../assets/styles/mediaVars";

//components
import SliderSmallCard from "../components/SliderSmallCard";
// import TestimonialsSlider from "../components/TestimonialsSlider";
import PricingCard from "../components/PricingCard";
import FullScreenTabs from "../components/FullScreenTabs";
import News from "../components/News";
import TwitterFeed from "../components/TwitterFeed";
import TwitterFeed2 from "../components/TwitterFeed2";
import TestimonialSlick from "../components/TestimonialSlick";
//content
import bgfirstscreen from '../assets/img/bgmain.jpg';
import bgGetFree from '../assets/img/bgGetFree.jpg';
import bgTestimonials from '../assets/img/bgTestimonials.svg';
import arrowsLeft from '../assets/img/arrowL.svg';
import arrowsRight from '../assets/img/arrowR.svg';
import bgMain from '../assets/videos/main_firstScreen.mp4'


import pagesData from "../assets/data/datatext"

const Container = styled.div`
max-width: 1170px;
width: 90%;
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
max-height: 100vh;
overflow: hidden;
video{
 min-width: 100%;
  min-height: 100%;
  //max-height: 680px;
  position: absolute;
  top: 0;
  right: 0;
  
}
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
z-index: 20;
p{
@media ${device.tablet} {
max-width: 70%;
}
}
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
background-position: right ;
background-repeat: no-repeat;
max-width: 1920px;
margin: auto;
width: 100%;
min-height: 400px;
display: flex;
justify-content: center;
align-items: center;
@media (max-width: ${vars.size.laptop}) {
background-position: -130%;
}
`;
const Text = styled.div`
display: flex;
flex-flow: column;
justify-content: space-between;
align-items: flex-start;
max-width: 439px;
width: 90%;
@media (max-width: ${vars.size.laptop}) {
max-width: 390px;
}
& > h2{
color: ${vars.colors.brand1};
}
p{
margin:30px 0 10px;
color: ${vars.colors.textBlack};
font-size: 24px;
line-height: 28px;
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
a.button{
width: 220px;
height: 40px;
display: flex;
align-items: center;
justify-content: center;
margin: 95px auto 170px;
text-transform: uppercase;
border: 1px solid ${vars.colors.brand1};
color: ${vars.colors.brand1};
border-radius: 8px;
}
.slick-slider{
width: 90%;
max-width: 570px;
margin: 262px auto 0;
@media ${device.mobileL}{
  width: 83%;
}
}
button{
&:before{
content: url("${arrowsLeft}");
}
&:last-child{
&:before{
content: url("${arrowsRight}");
}
}
}
`;
const PricingSection = styled.section`
${Container}{
width: 80%;
& > div{
margin: 10px auto;
}
}
${Container}{
@media ${device.laptop}{
width: 60%;
}}
${Container}{
@media ${device.tablet}{
width: 80%
}
}
`;
const TabsSection = styled.section`
position:relative;
margin: 120px auto 100px;
`;
const NewsSection = styled.section`

`;
const TwitterSection = styled.section`

`;
const Feed = styled.div`
margin: 50px 20px;
max-width: 570px;
overflow-x: scroll;
    height: 500px;
`;
const TwitterLink = styled.a`
border: 1px solid #4300D1;
box-sizing: border-box;
border-radius: 4px;
width: 220px;
height: 40px;
display: flex;
justify-content: center;
align-items: center;
margin: auto;
color: ${vars.colors.brand1};
transition: .3s ease all;
&:hover{
color: ${vars.colors.white};
background-color: ${vars.colors.brand1};
}
`;

const Home = props => {
    const {firstScreen} = pagesData.homeData;
    const {getFree} = pagesData.homeData;
    return (
       <main>
        <FirstScreen>
            <video
                autoPlay
                muted
                loop
                playsInline={true}
                >
                <source
                    src={bgMain}
                    type="video/mp4"
                />
            </video>
            <Container justifystart>
                <MainTextBlock>
                    <h1><span><strong>{firstScreen.h1span}</strong></span>{firstScreen.h1}</h1>
                    <p className="first">{firstScreen.subheading1}</p>
                    <p>{firstScreen.subheading2}</p>
                    {/*<Link to={`download`}>*/}
                    {/*    {firstScreen.button}*/}
                    {/*</Link>*/}
                </MainTextBlock>
            </Container>
        </FirstScreen>
           <GetFree>
                <Container justifystart>
                    <Text>
                        <h2>{getFree.heading}</h2>
                        <p dangerouslySetInnerHTML={{__html:getFree.subheading}}/>
                        <Link to={`download`}>
                            {getFree.button}
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
               <TestimonialSlick/>
               <a className="button" href="/testimonials">all TESTIMONIALS</a>
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
               <Container>
                   <News/>
               </Container>
           </NewsSection>
           <TwitterSection>
               <Container>
                   <Feed>
                       <TwitterFeed/>
                       <TwitterLink target="_blank" href="https://twitter.com/skybox">See all</TwitterLink>
                   </Feed>
                   <Feed>
                       <TwitterFeed2/>
                       <TwitterLink target="_blank" href="https://twitter.com/skybox">See all</TwitterLink>
                   </Feed>
               </Container>
           </TwitterSection>
       </main>
    )
};
export default Home;