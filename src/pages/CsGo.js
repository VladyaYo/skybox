import React from 'react';
import {Link} from "react-router-dom";
import styled from "styled-components";
import TabsCs from "../components/TabsCs";

import vars from "../assets/styles/varsStyles";
import pagesData from "../assets/data/datatext";
import bgfirstscreen from "../assets/img/bgcsgoMain.jpg";
import bginfoBlock from "../assets/img/bgtextBlock.svg";
// import {device} from "../assets/styles/mediaVars";


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
`;
const MainTextBlock = styled.div`
display: flex;
flex-flow: column;
justify-content: space-between;
align-items: flex-start;
width: 90%;
max-width: 434px;
color: #ffffff;
margin-top: 135px;
p{
font-style: normal;
font-weight: 600;
font-size: 24px;
line-height: 28px;
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
const ImageWrap = styled.div`

`;
const InfoSection = styled.div`
min-height: 410px;
background-repeat: no-repeat;
background-position: top center;
`;
const Text = styled.div`
max-width: 545px;
p{
color: ${vars.colors.brand1};
font-size: 24px;
line-height: 28px;
span{
font-weight: 600;
}
}
`;
const TabsSection = styled.section`
.heading{
font-weight: 600;
font-size: 36px;
line-height: 42px;
text-align: center;
text-transform: uppercase;
color: ${vars.colors.brand1};
margin: 150px auto 60px;
}
`;
const CsGo = props => {
    const {firstScreen} = pagesData.csgoPage;
    const {infoBlock} = pagesData.csgoPage;
    console.log(window.location.pathname);

    return (
       <main>
           <FirstScreen>
               <Container justifystart>
                   <MainTextBlock>
                       <ImageWrap>
                           <img src={firstScreen.image} alt="logo cs:go"/>
                       </ImageWrap>
                       <p>{firstScreen.subheading}</p>
                       <Link to={`download`}>
                           {firstScreen.button}
                       </Link>
                   </MainTextBlock>
               </Container>
           </FirstScreen>
           <InfoSection style={{
               backgroundImage: `url(' ${bginfoBlock} ')`
           }}>
               <Container justifystart>
                   <Text>
                       <p>{infoBlock.text}<span>{infoBlock.bold}</span></p>
                   </Text>
               </Container>
           </InfoSection>
           <TabsSection>
               <p className="heading">{infoBlock.tabsHeading}</p>
               <TabsCs/>
           </TabsSection>
       </main>
    )
};

export default CsGo