import React, {useState} from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import styled from "styled-components";
import {TransitionGroup, CSSTransition} from "react-transition-group";
// import 'react-tabs/style/react-tabs.css';


import pagesData from "../assets/data/datatext";
import vars from "../assets/styles/varsStyles";
import {device} from "../assets/styles/mediaVars"

const TabsButtons = styled.div`
position: absolute;
left: 50px;
top: 80px;
z-index: 20;
ul{
min-height: 468px;
display: flex;
flex-flow: column wrap;
justify-content: space-between;
align-items: center;
width: 90%;
}
li{
width: 340px; 
height: 140px;
border-radius: 8px;
display: flex;
flex-flow: row wrap;
justify-content: center;
align-items: center;
border: 3px solid ${vars.colors.black};
cursor: pointer;
background-size: cover;
background-repeat: no-repeat;
transition: .3s ease all;
img{
border-radius: 8px;
}
&.react-tabs__tab--selected{
border: 3px solid ${vars.colors.brand1};
}
p{
font-family: ${vars.fonts.releway};
font-style: normal;
font-weight: 600;
font-size: 24px;
line-height: 28px;
text-align: center;
color: ${vars.colors.white};
}
}
`;
const Container = styled.div`
width: 90%;
max-width: 1140px;
display: flex;
flex-flow: row wrap;
justify-content: flex-end;
align-items: center;
width: 90%;
margin: auto;
min-height: 674px;

`;
const Content = styled.div`
width: 90%;
max-width: 402px;
 @media ${device.tablet} {
 max-width:300px;
 }
p{
text-align: left;
color: ${vars.colors.white};
font-family:  ${vars.fonts.releway};
font-style: normal;
font-weight: 900;
font-size: 2.250em;
line-height: normal;
text-transform: uppercase;
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
}
a{
display: flex;
align-items: center;
justify-content: center;
border: 1px solid #FFFFFF;
border-radius: 4px;
max-width: 230px;
min-height: 40px;
font-family: ${vars.fonts.releway};
font-style: normal;
font-weight: 500;
font-size: .75em;
line-height: normal;
text-align: center;
text-transform: uppercase;
color: ${vars.colors.white};
margin-top: 40px;
`;


const FullScreenTabs = props => {
    const [inProp, setInProp] = useState(false);
    return (
        <Tabs>
            <TabsButtons>
                <TabList>
                    {pagesData.homeData.tabs.map((item, index)=>{
                        return(
                            <Tab
                                index={index}
                                key={index}
                                style={{
                                    backgroundImage: `url('${item.tabButtonBg}')`
                                }}
                                onClick={() => setInProp(true)}
                            >
                                <p>{item.tabButtonText}</p>
                            </Tab>
                        )
                    })}
                </TabList>
            </TabsButtons>
            <TransitionGroup>
            {pagesData.homeData.tabs.map((item, index)=>{
                return(
                  <TabPanel
                      index={index}
                      key={index}
                  >
                    <CSSTransition
                      timeout={200}
                      in={inProp}
                      classNames="page"
                    >
                      <div
                        style={{
                          backgroundImage: `url('${item.bg}')`
                        }}
                      >
                        <Container>
                          <Content>
                            <p><span><strong>{item.span}</strong></span>{item.text}</p>
                            <a href="/">learn more</a>
                          </Content>
                        </Container>
                      </div>
                    </CSSTransition>
                  </TabPanel>
                )
            })}
            </TransitionGroup>
        </Tabs>
    )
};

export default FullScreenTabs
