import React  from "react";
import styled from "styled-components";
import "./footer.scss";
import {Link} from "react-router-dom";
import pagesData from "../../assets/data/datatext";
import vars from "../../assets/styles/varsStyles";

const Container = styled.div`
border-top: 1px solid ${vars.colors.brand1};
max-width: 1440px;
width: 90%;
margin: 80px auto 30px;
display: flex;
flex-flow: column wrap;
justify-content: space-between;
align-items: center;
ul{
width: 90%;
max-width: 488px;
margin: 35px auto 21px;
display: flex;
flex-flow: row wrap;
justify-content: space-between;
align-items: center;
li{
font-family:${vars.fonts.releway};
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 19px;
a{
color: ${vars.colors.brand1};
position: relative;
&:hover{
&:before{
width: 110%;
}
}
&:before{
content: "";
transition: .4s ease all;
height: 4px;
width: 0;
position: absolute;
left: -5%;
bottom: -7px;
background-color: ${vars.colors.brand1};
}
}
}
}
`;
const TextFooter = styled.p`
margin: auto;
max-width: 200px;
text-align: center;
font-family: ${vars.fonts.releway};
font-style: normal;
font-weight: 300;
font-size: 14px;
line-height: 16px;
color: ${vars.colors.brand1};
`
const Bottom = styled.div`
width: 90%;
max-width: 1170px;
display: flex;
flex-flow: row wrap;
justify-content: space-between;
align-items: center;
p{
font-family: ${vars.fonts.releway};
font-style: normal;
font-weight: 300;
font-size: 10px;
line-height: 12px;
color: ${vars.colors.brand1};
}
`
const Footer = props => (
        <footer className="footer">
            <Container>
                <ul>
                    <li>
                        <Link to={`/cs-go/`}>
                            CS:GO
                        </Link>
                    </li>
                    <li>
                        <a rel="noopener noreferrer" target="_blank" href="https://medium.com/">
                            Media
                        </a>
                    </li>
                    <li>
                        <Link to={`/pricing/`}>
                            Pricing
                        </Link>
                    </li>
                    <li>
                        <Link to={`/about-us/`}>
                            About Us
                        </Link>
                    </li>
                    <li>
                        <Link  to={`/privacy/`}>
                            Privacy & Terms
                        </Link>
                    </li>
                </ul>
                <TextFooter>{pagesData.homeData.footer.text}</TextFooter>
                <Bottom>
                    <p>{pagesData.homeData.footer.madeBy}</p>
                    <p>{pagesData.homeData.footer.right}</p>
                </Bottom>
            </Container>
        </footer>
);

export default Footer;