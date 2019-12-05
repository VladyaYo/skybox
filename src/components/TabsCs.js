import React from 'react';
import styled from "styled-components";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import pagesData from "../assets/data/datatext";
import vars from "../assets/styles/varsStyles";


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
}
`;
const Block = styled.div`

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
                                    <p className="legend">{item.subheading}</p> :
                                    null
                                }
                                { item.heading ?
                                    <p className="heading">{item.heading}</p> :
                                    null
                                }
                                { item.subheading2 ?
                                    <p className="subheading">{item.subheading2}</p> :
                                    null
                                }
                            </Main>
                            {item.block && item.block.map((item2, index)=>{
                                return(
                            <Block
                                index={index}
                                key={index}
                            >
                                { item2.image ?
                                <div>
                                    <img src={item2.image} alt=""/>
                                </div> :
                                    null }
                                <div>
                                    { item2.heading ? <h4>{item2.heading}</h4> : null }
                                    { item2.text ? <h4>{item2.text}</h4> : null }
                                </div>
                            </Block>
                            )})}
                        </TabPanel>
                    )})}
            </Tabs>
        </Container>
    )
};

export default TabsCs