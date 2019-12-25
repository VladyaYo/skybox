import React from 'react';
import styled from "styled-components";
import pagesData from "../assets/data/datatext";
import vars from "../assets/styles/varsStyles";
import {device} from "../assets/styles/mediaVars";

const NewsBlock = styled.div`
display: flex;
flex-flow: row wrap;
justify-content: space-between;
align-items: center;
width: 100%;
`;
const NewsCard = styled.a`
position:relative;
display: flex;
flex-flow: column wrap;
justify-content: flex-start;
align-items: center;
width: 90%;
max-width: 570px;
border-radius: 10px;
background-color: ${vars.colors.white};
min-height: 533px;
box-shadow: 2px 3px 10px rgba(0, 0, 0, 0.1);
 @media ${device.laptop} {
 margin: 30px auto;
 max-width: 330px;
 }
 h5{
 max-width: 90%;
 margin: 10px auto;
 }
font-weight: 600;
font-size: 18px;
line-height: normal;
margin: 30px 0 10px;
width: 90%;
color: ${vars.colors.brand1};
}
p{
width: 90%;
margin: 0 auto;
font-weight: 300;
font-size: 14px;
line-height: 16px;
}
.learnMore{
position:absolute;
bottom: 0;
left: 0;
right: 0;
border-top: 1px solid #eee;
padding: 16px 0;
text-transform: uppercase;
color: ${vars.colors.brand1};
}
`;
const ImgWrap = styled.div`

`;

const News = props => {
    return (
        <NewsBlock>
            {pagesData.homeData.news.map((item, index)=>{
                return(
                    <NewsCard
                        index={index}
                        key={index}
                        href={item.link}
                        target="_blank"
                    >
                        <ImgWrap>
                            <img src={item.img} alt={item.title}/>
                        </ImgWrap>
                        <h5>{item.title}</h5>
                        <p>{item.text}</p>
                        <p className="learnMore">Learn more</p>
                    </NewsCard>
                )
            })}
        </NewsBlock>
    )
};
export default News;