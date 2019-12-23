import React from 'react';
import styled from "styled-components";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import { TransitionGroup, CSSTransition} from 'react-transition-group';
import pagesData from "../assets/data/datatext";
import vars from "../assets/styles/varsStyles";
import {device} from "../assets/styles/mediaVars";
//images
import decor1 from "../assets/img/1.gif"
import decor2 from "../assets/img/2.gif"
import decor3 from "../assets/img/3.gif"
import decor4 from "../assets/img/4.gif"

const TabsCs = props => {
    const {tabs} = pagesData.csgoPage;

    return (
            <Tabs defaultIndex={0} onSelect={index => console.log(index)}>
                <Container>
                <TabList>
                    {tabs.map((item, index)=>{
                        return(
                            <Tab
                                key={index}
                                index={index}
                            >
                                {item.button}
                            </Tab>
                    )})}
                </TabList>
                </Container>
                {tabs.map((item, index)=>{
                    return(
                        <TabPanel
                            key={index}
                            index={index}
                            >
                                    <Main>
                                        { item.subheading ?
                                            <p className="legend" dangerouslySetInnerHTML={{__html:item.subheading}}/> :
                                            null
                                        }
                                        { item.heading ?
                                            <p className="heading">{item.heading}</p> :
                                            null
                                        }
                                        { item.subheading2 ?
                                            <p className="subheading"><strong>{item.bold}</strong>{item.subheading2}</p> :
                                            null
                                        }
                                    </Main>
                                {item.block && item.block.map((item2, index)=>{
                                    return(
                                            <Block
                                                index={index}
                                                key={index}
                                            >
                                                { item2.mainHeading ?
                                                    <Container>
                                                        <h2>{item2.mainHeading}</h2>
                                                    </Container>
                                                    : null }
                                                {item2.text && (
                                                    <Container>
                                                { item2.image ?
                                                        <div className="imageWrapp">
                                                            <img src={item2.image} alt=""/>
                                                        </div>
                                                    : null }
                                            { item2.text && (
                                                    <div className="text">
                                                    { item2.heading ? <h4>{item2.heading}</h4> : null }
                                                    { item2.text ? <p>{item2.text}</p> : null }
                                                </div>
                                            )}
                                                    </Container>
                                                )}
                                                { item2.centerText ?
                                                    <CenterText>
                                                        <div className="imgWrap">
                                                            <img src={item2.imgCenter} alt=""/>
                                                        </div>
                                                        <div className="textBlock">
                                                            <p className="heading" dangerouslySetInnerHTML={{__html:item2.centerText}}/>
                                                            <p className="subheading">{item2.subheading}</p>
                                                            <a href="#">{item2.btn}</a>
                                                        </div>
                                                    </CenterText>
                                                    : null
                                                }
                                                { item2.fullWidthBg ?
                                                    <TopFullBg
                                                        style={{
                                                            backgroundImage: 'url(' + item2.fullWidthBg + ')'
                                                        }}
                                                    >
                                                        <div className="textWrap">
                                                            <p className="heading">{item2.heading}</p>
                                                            <p className="info">{item2.about}</p>
                                                        </div>
                                                        <div className="logos">
                                                            <div className="logoWrap">
                                                                <img src={item2.logoMain1} alt="logo"/>
                                                            </div>
                                                            <div className="logoWrap">
                                                                <img src={item2.logoMain2} alt="logo"/>
                                                            </div>
                                                            <div className="logoWrap">
                                                                <img src={item2.logoMain3} alt="logo"/>
                                                            </div>
                                                        </div>
                                                    </TopFullBg>
                                                    :null}
                                            </Block>
                                )})}
                        </TabPanel>
                    )})}
            </Tabs>
    )
};
const Container = styled.div`
ul{
display: flex;
flex-flow: row wrap;
justify-content: space-between;
align-items: center;
width: 90%;
max-width: 1170px;
margin: auto;

li{
max-width: 370px;
min-height: 80px;
width: 90%;
border: 1px solid ${vars.colors.brand1};
display: flex;
flex-flow: row wrap;
justify-content: center;
align-items: center;
border-radius: 8px;
font-weight: 600;
font-size: 24px;
line-height: 28px;
text-align: center;
color: ${vars.colors.brand1};
transition: .2s ease all;
&:hover{
cursor: pointer;
}
@media ${device.laptop}{
margin:20px auto 0;
}
&.react-tabs__tab--selected{
background-color: ${vars.colors.brand1};
color: ${vars.colors.white};
}
}
}
`;
const Main = styled.div`
margin: 100px auto 30px;
width: 100%;


.legend{
font-weight: 600;
font-size: 24px;
line-height: 28px;
text-align: center;
color: ${vars.colors.textBlack};
span{
background-color: ${vars.colors.brand1};
color:${vars.colors.white}
}
}
.heading{
font-weight: 600;
font-size: 36px;
line-height: 42px;
text-align: center;
text-transform: uppercase;
color: ${vars.colors.brand1};
margin: 90px auto 20px;
}
.subheading{
font-weight: 600;
font-size: 18px;
line-height: 21px;
text-align: center;
color: ${vars.colors.textBlack};
strong{
font-weight: bold;
font-size: 18px;
line-height: 21px;
}
}
`;
const Block = styled.div`
  max-width: 1920px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 173px auto 65px;
${Container}{
width: 90%;
margin: auto;
max-width: 1170px;
justify-content: space-between;
display: flex;
align-items: center;}
}
.option-enter{
opacity: 0;
}
.option-enter-active{
opacity: 1;
transition: .2s;
}
.option-exit{
opacity: 1;
}
.option-exit-active{
opacity: 0;
transition: .2s;
}
h2{
  text-align: center;
  margin:auto;
  color:${vars.colors.brand1};
  }
  &:nth-child(odd){
  ${Container}{
    flex-direction: row-reverse;
    .imageWrapp{
     &:before{
        content: "";
        left: auto;
        right: -70px;
        top: -27px;
        width: 100%;
        height: 130%;
        background-image: url("${decor2}");
        background-size: contain;
        background-repeat: no-repeat;
        background-position: right top;
        
        @media ${device.tablet}{
        right: -5%;
        }
      }
      img{
        position: absolute;
        right: 0;
      }
  }
  }
  }
  &:nth-child(4n+4){
  .imageWrapp{
  &:before{
    content: "";
    right: auto;
    top: -10%;
    left: -5%;
    width: 100%;
    height: 130%;
    background-image: url("${decor3}");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: right top;
    @media ${device.tablet}{
        right: -5%;
    }
  }
  }
}
  &:nth-child(5n+5){
  .imageWrapp{
   &:before{
    content: "";
    top: -10%;
    left: auto;
    right: -5%;
   
    width: 100%;
    height: 130%;
    background-image: url("${decor4}");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: right top;
    @media ${device.tablet}{
        right: -5%;
    }
  }
  }
}
.imageWrapp{
  width: 600px;
  position: relative;
  height: 290px;
  &:before{
  content: "";
        right: auto;
        top: -42px;
        left: -121px;
        width: 130%;
        height: 150%;
        background-image: url("${decor1}");
        background-size: contain;
        background-repeat: no-repeat;
        background-position: left top;
        position: absolute;
        z-index: -1;
        @media ${device.tablet}{
        right: -5%;
        }
  }
  img{
    min-height: 100%;
    z-index: 20;
  }
}
.text{
  width: 500px;
  
  h4{
    font-weight: bold;
    font-size: 36px;
    line-height: 42px;
    color: ${vars.colors.textBlack};
    font-family: ${vars.fonts.releway};
    margin-bottom: 35px;

  }
  p{
    font-size: 18px;
    line-height: 21px;
    color: ${vars.colors.textBlack};

  }
}
`;
const CenterText = styled.div`
width: 90%;
max-width: 800px;
display: flex;
flex-flow: column;
align-items: center;
justify-content: space-between;
margin: auto;
.imgWrap{

}
.textBlock{
.heading{
font-weight: 600;
font-size: 24px;
line-height: 28px;
text-align: center;
color: ${vars.colors.textBlack};
text-transform: none;
span{
background-color: ${vars.colors.brand1};
color: ${vars.colors.white};
}
}
.subheading{
font-size: 18px;
line-height: 21px;
text-align: center;
}
a{
max-width: 230px;
min-height: 40px;
display: flex;
align-items: center;
justify-content: center;
border: 1px solid ${vars.colors.brand1};
border-radius:4px;
color: ${vars.colors.brand1};
margin: 30px auto;

}
}
`;
const TopFullBg = styled.div`
max-width: 1920px;
width: 100%;
margin: auto;
min-height: 600px;


`;
export default TabsCs