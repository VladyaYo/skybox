import React from 'react';
import styled from "styled-components";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { TransitionGroup, CSSTransition} from 'react-transition-group';
import pagesData from "../assets/data/datatext";
import vars from "../assets/styles/varsStyles";
//images
import decor1 from "../assets/img/decorPhoto1.svg"
import decor2 from "../assets/img/decorPhoto2.svg"
import decor3 from "../assets/img/decorPhoto3.svg"


const Container = styled.div`
ul{
display: flex;
flex-flow: row wrap;
justify-content: space-between;
align-items: center;
width: 90%;
margin: auto;
max-width: 1170px;
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
&.react-tabs__tab--selected{
background-color: ${vars.colors.brand1};
color: ${vars.colors.white};
}
}
}
`;
const Main = styled.div`
margin: 100px auto 30px;

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
max-width: 1170px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  margin: 173px auto 65px;
  &:nth-child(odd){
    flex-direction: row-reverse;
    .imageWrapp{
     &:before{
        content: url("${decor2}");
        left: auto;
        right: -58px;
        top: -35px;
      }
      img{
        position: absolute;
        right: 0;
      }
  }
  }
  &:nth-child(4n+4){
  .imageWrapp{
  &:before{
    content: url("${decor3}");
    right: auto;
    left: -28px;
    top: -28px;
    position: absolute;
  }
  }
}
  &:nth-child(5n+5){
  .imageWrapp{
  &:before{
    display: none;
  }
  }
}
.imageWrapp{
  width: 600px;
  position: relative;
  height: 290px;
  &:before{
    content: url("${decor1}");
    position:absolute;
    left: -121px;
    top: -72px;
    z-index: -1;
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

const TabsCs = props => {
    const {tabs} = pagesData.csgoPage;

    return (
        <Container>
            <Tabs>
                <TabList>
                    {tabs.map((item, index)=>{
                        return(
                            <Tab
                                index={index}
                                key={index}
                            >
                                {item.button}
                            </Tab>
                    )})}
                </TabList>
                {tabs.map((item, index)=>{
                    return(
                        <TabPanel
                        index={index}
                        key={index}
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
                                            >
                                            { item2.mainHeading ?
                                                <h2>{item2.mainHeading}</h2>:
                                                null }
                                                { item2.image ?
                                            <div className="imageWrapp">
                                                <img src={item2.image} alt=""/>
                                            </div> : null }
                                            { item2.text && (
                                            <div className="text">
                                                    { item2.heading ? <h4>{item2.heading}</h4> : null }
                                                    { item2.text ? <p>{item2.text}</p> : null }
                                                </div> )}
                                            </Block>
                                )})}
                        </TabPanel>
                    )})}
            </Tabs>
        </Container>
    )
};
export default TabsCs