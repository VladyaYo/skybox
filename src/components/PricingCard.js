import React from 'react';
import styled from "styled-components";

// import vars from "../assets/styles/varsStyles";
import bg1 from "../assets/img/base1.svg";
import bg2 from "../assets/img/base2.svg"
import bg3 from "../assets/img/base3.svg"
import bg4 from "../assets/img/base4.svg"
import vars from "../assets/styles/varsStyles";


const Item = styled.div`
max-width: 240px;
min-height: 277px;
display: flex;
flex-flow: column wrap;
justify-content: space-between;
align-items: center;
width: 90%;
text-align: center;
padding: 15px;
background-color: #F5F4F4;
background-image: url("${bg1}");
background-repeat: no-repeat;
background-size: contain;
border-radius: 8px;
h2{
text-transform: capitalize;
}
p{
max-width: 206px;
margin: auto;
}
&:nth-child(2){
background-image: url("${bg2}");
}
&:nth-child(3){
background-image: url("${bg3}");
}
&:nth-child(4){
background-image: url("${bg4}");
}
a{
border: 1px solid ${vars.colors.brand1};
border-radius: 4px;
min-width: 170px;
min-height: 40px;
display: flex;
flex-flow: column wrap;
justify-content: center;
align-items: center;
width: 90%;
color: ${vars.colors.brand1};
font-weight: 500;
font-size: 0.750em;
line-height: 1;
text-align: center;
text-transform: uppercase;
}
`;
const Price = styled.p`
color: ${vars.colors.brand1};
span{
font-family: ${vars.fonts.releway};
font-style: normal;
font-weight: 600;
font-size: 24px;
line-height: 28px;
text-align: center;
color: ${vars.colors.brand1};
text-transform: uppercase;
}
`;

const PricingCard = ({heading,about,price,button}) => {
    return (
        <Item>
            <h2>{heading}</h2>
            <p>{about}</p>
            { typeof price == "number" ?
                <Price>from<span> € {price} </span>per month</Price> :
                <Price><span>{price}</span></Price>
            }
            <a href="/">{button}</a>
        </Item>
    )
};

export default PricingCard