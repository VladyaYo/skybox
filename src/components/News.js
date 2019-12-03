import React from 'react';
import styled from "styled-components";
import pagesData from "../assets/data/datatext";


const NewsCard = styled.div`
display: flex;
flex-flow: row wrap;
justify-content: space-between;
align-items: center;
width: 90%;
`

const News = props => {
    return (
        <News>
            {pagesData.homeData.news.map((item, index)=>{
                return(
                    <NewsCard
                        index={index}
                        key={index}
                    >
                        <p>{item.text}</p>
                    </NewsCard>
                )
            })}
        </News>
    )
};

export default News