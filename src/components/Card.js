import React from 'react';
import styled from "styled-components";

import bg from "../assets/img/bgSmallCard.png"
import vars from "../assets/styles/varsStyles";

const Item = styled.div`
width: 90%;
max-width: 270px;
background-image: url("${bg}");
background-color: ${vars.colors.background};
background-position: top right;
background-repeat: no-repeat;
background-size: contain;
min-height: 305px;
border-radius: 8px;
display: flex;
flex-flow: column wrap;
justify-content: space-around;
align-items: center;
padding: 34px 0 20px;
p{
max-width: 85%;
margin: auto;
text-align: center;
}
`;
const WrapImg=styled.div`
display: flex;
flex-flow: row wrap;
justify-content: center;
align-items: center;
width: 90%;
min-height: 106px ;
&>*{
margin: auto;
}
`

const Card = ({logo, title, description,link}) => {
    return (
        <Item>
            <WrapImg>
                <img src={logo} alt={title}/>
            </WrapImg>
            <h5>{title}</h5>
            <p>{description}</p>
            <a href={link}>{link}</a>
        </Item>
    )
};

export default Card