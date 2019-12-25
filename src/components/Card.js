import React from 'react';
import styled from "styled-components";

import bg from "../assets/img/bgSmallCard.png"
import vars from "../assets/styles/varsStyles";
// import {device} from "../assets/styles/mediaVars";

const WrapImg=styled.div`
display: flex;
flex-flow: row wrap;
justify-content: center;
align-items: center;
width: 90%;
min-height: 106px ;
margin: auto;
&>*{
margin: auto;
}
`;
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
transition: .4s ease all;
margin: 20px;
*{
transition: .4s ease all;
max-height: 0;
}
}
&:hover{
*{
max-height: 100px;
}
${WrapImg}{
margin: 0;
}
p{
height: auto;
}
a{
height: auto;
}
h5{
height: auto;
}
}
h5{
height: 0;
transition: .4s ease all;
overflow: hidden;
}
p{
max-width: 85%;
margin: auto;
text-align: center;
height: 0;
overflow:hidden;
transition: .4s ease all;
}
a{
height: 0;
overflow:hidden;
transition: .4s ease all;
}
`;


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