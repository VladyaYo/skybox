import React, {useState} from "react";
import { Link, NavLink } from "react-router-dom";
import "./header.scss";
import Logo from "../Logo/Logo";
import styled from "styled-components";

import vars from "../../assets/styles/varsStyles"
import {device} from "../../assets/styles/mediaVars";

const Header = props => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const burgerClasses = [
        'header-burger',
        isMenuOpen ? 'open' : null
    ];
    const headerClasses = [
        'header',
        isMenuOpen ? 'open' : null
    ];
    const menuClasses = [
        'header-nav',
        isMenuOpen ? 'open' : null
    ];
    const onBurgerClick = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <ContainerHeader className={headerClasses.join(' ')}>
                <div
                    className={burgerClasses.join(' ')}
                    onClick={onBurgerClick}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <Nav as="nav" className={menuClasses.join(' ')}>
                    <Logo></Logo>
                    <div className="wrapper">
                    <LinkList className="menu header-menu">
                        <li className="menu-item">
                            <NavLink
                                activeClassName="selected"
                                className="menu-link"
                                to={`/about-us/`}
                            >
                                About Us
                            </NavLink>

                        </li>
                        <li className="menu-item">
                            <NavLink
                                activeClassName="selected"
                                className="menu-link"
                                to={`/cs-go/`}
                            >
                                CS:GO
                            </NavLink>
                        </li>
                        <DropDown className="menu-item menu-dropdown">
                            <Link to={`/pricing-player/`} className="menu-link">
                                Pricing
                            </Link>
                            <DropList>
                                <li className="submenu-item">
                                    <Link className="submenu-link" to={`/pricing-player/`}>
                                        Player
                                    </Link>
                                </li>
                                <li className="submenu-item">
                                    <Link className="submenu-link" to={`/pricing-team/`}>
                                        Team
                                    </Link>
                                </li>
                                <li className="submenu-item">
                                    <Link className="submenu-link" to={`/pricing-tournament/`}>
                                        Tournament
                                    </Link>
                                </li>
                            </DropList>
                        </DropDown>
                        <li className="menu-item">
                            <NavLink
                                activeClassName="selected"
                                className="menu-link"
                                to={`/blog/`}
                            >
                                Blog
                            </NavLink>
                        </li>
                    </LinkList>
                    <Buttons>
                    <Button >
                        Log In
                    </Button>
                    <Button >
                        Sign Up
                    </Button>
                    </Buttons>
                    </div>
                </Nav>
        </ContainerHeader>
    );
};
const ContainerHeader = styled.header`
//background-color: rgba(67, 0, 209, 0.6);
background-color: ${vars.colors.brand1};
display: flex; 
flex-flow: row;
justify-content: space-between;
align-items: center;
z-index: 100;
//position: absolute;
position: fixed;
top: 0;
width: 100%;
 backdrop-filter: blur(0px);
transition: .5s ease-in-out all;
&.open{
    background-color: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(14px);
}
.header-burger{
width: 34px;
height: 24px;
position: absolute;
right: 5%;
display: none;
top: 23px;
z-index: 120;

@media ${device.tablet}{
display: block;
}
span{
position:absolute;
width: 100%;
height: 3px;
transition: .4s ease all;
background-color: ${vars.colors.white};
&:nth-child(1){
top: 0;
}
&:nth-child(2){
top: 48%;
}
&:nth-child(3){
top: 96%;
}
}
&.open{
span{
&:nth-child(1){
transform: rotate(45deg);
top: 11px;}
&:nth-child(2){
transform: rotate(-45deg);
}
&:nth-child(3){
width: 0
}
}
}
}
`;
const Nav = styled.nav`
 display: flex;
 flex-flow: row wrap;
 align-items: center;
 justify-content: space-between;
 max-width: 1173px;
 width: 100%;
 margin: 10px auto;
 position: relative;
 min-height: 60px;
 opacity: 1;
 z-index: -1;
 transition: .4s ease all;
 @media ${device.mobileL}{
 margin:10px;
 }

 .wrapper{
 opacity: 1;

 }
 &.open{
 height: 100vh;
 z-index: 100;
 .wrapper{
  z-index: 100;
  opacity: 1;
  width: auto;
  ul{
      display: flex;
      }
 }
 }
 @media (max-width: ${vars.size.laptop}) {
 width: 90%;
 }
   @media ${device.tablet}{
  flex-flow: column wrap;
  
  }
  .logo{
   @media ${device.tablet}{
   position: absolute;
   left:0;
   }
  }
  .wrapper{
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
      width: 65%;
       @media ${device.desktopL}{
 width:75%;
 }
     @media ${device.tablet}{
  position: absolute;
  top: 70px;
  opacity: 0; 
    height:0;
    z-index: -1;
      width: 0;
      ul{
      display: none;
      }
  }
  }
`;
const LinkList = styled.ul`
width: 100%;
max-width: 275px;
display: flex;
 flex-flow: row wrap;
 align-items: center;
 justify-content: space-between;
 //margin-left: 200px;
 @media ${device.laptop} {
 //margin-left: 5%;
 }
 @media ${device.tablet}{
flex-flow: column wrap;
margin: auto;
 }
 & > li{
  @media ${device.tablet}{
  margin: 30px auto;
  }
 
 & > a{
 color: #ffffff;
 font-family: ${vars.fonts.releway};
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: normal;
text-align: center;
position: relative;
&:before{
content: "";
height: 4px;
width: 0%;
position: absolute;
left: -5%;
bottom: -7px;
background-color: ${vars.colors.white};
transition: .4s ease-in-out;
z-index: 50;
}
&:hover:before{
width: 110%;
}
&.selected:before{
width: 110%;
}
 }
 }
`;
const DropList = styled.ul`
  min-width: 170px;
  position: absolute;
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  left: -115%;
  top: 20px;
  height: 0;
  background-color: rgba(67, 0, 209, 0.6);
  transition: .5s ease all;
  @media ${device.tablet}{
  display: none;
  }
  & > li{
  margin: 10px auto;
  &:first-child{
  margin-top: 43px;
  }
 & > a{
 color: #ffffff;
  font-family: ${vars.fonts.releway};
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: normal;
text-align: center;
position: relative;
&:before{
content: "";
height: 4px;
width: 0%;
position: absolute;
left: -5%;
bottom: -7px;
background-color: ${vars.colors.white};
transition: .4s ease-in-out;
}
&:hover:before{
width: 110%;
}
 }
  }
`;
const DropDown = styled.li`
  color: #ffffff;
  position: relative;
  & > span{
  font-family: ${vars.fonts.releway}
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
 &:hover{
  cursor: pointer;
 }
 }
   &:hover ${DropList} {
   height: auto;
 background-color: rgba(67, 0, 209, 0.6);
 }
`;
const Buttons = styled.div`
display: flex;
 flex-flow: row wrap;
 align-items: center;
 justify-content: space-between;
 max-width: 370px;
 width: 100%;
 @media ${device.tablet}{
 flex-flow: column;
 margin: auto;
 }
`;
const Button = styled.button`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  border: 1px solid #FFFFFF;
  box-sizing: border-box;
  border-radius: 4px;
  background-color: transparent;
  width: 169px;
  height: 37px;
  font-family: ${vars.fonts.releway};
  color: #ffffff;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: normal;
  text-transform: uppercase;
  transition: .4s ease all;
  @media ${device.tablet}{
  margin: 30px auto 10px
  }
  &:hover{
  cursor:pointer;
  background-color: rgba(0,0,0,.3);
  }
`;

export default Header;