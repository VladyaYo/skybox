import React from 'react';
import styled from "styled-components";

import vars from "../assets/styles/varsStyles";

const Item = styled.div`
width: 90%;
max-width: 500px;
min-height: 370px;
background-color: rgba(255, 255, 255, 0.9);
margin: auto;
padding: 40px;

`;
const Top = styled.div`
display: flex;
flex-flow: row wrap;
justify-content: space-between;
align-items: center;
width: 90%;
.text{
max-width: 170px;
}
h5{
font-family: ${vars.fonts.releway};
font-style: normal;
font-weight: 600;
font-size: 1.500em;
line-height: normal;
}
`;
const WrapPhoto = styled.div`
width: 90px;
height: 90px;
border-radius: 50%;

`;
const Position = styled.p`
color: ${vars.colors.textBlack};
font-family: ${vars.fonts.releway};
font-style: normal;
font-weight: 300;
font-size: .875em;
line-height: normal;

`;
const WrapLogo = styled.div`
width: 80px;
height: 80px;
`;


const TestimonialCard = ({photo, logo, name,info,testimonial}) => {
    return (
        <Item>
            <Top>
                <WrapPhoto>
                    <img src={photo} alt={name}/>
                </WrapPhoto>
                <div className="text">
                    <h5>{name}</h5>
                    <Position>{info}</Position>
                </div>
                <WrapLogo>
                    <img src={logo} alt="logo"/>
                </WrapLogo>
            </Top>
            <p>{testimonial}</p>
        </Item>
    )
};

export default TestimonialCard