import React, {useState} from "react";
import { Link, NavLink } from "react-router-dom";
import "./header.scss";
import Logo from "../Logo/Logo";
import styled from "styled-components";

import vars from "../../assets/styles/varsStyles"

const ContainerHeader = styled.header`
background-color: rgba(67, 0, 209, 0.6);
display: flex; 
flex-flow: row;
justify-content: space-between;
align-items: center;
z-index: 100;
position:relative;
`;
const Nav = styled.nav`
 display: flex;
 flex-flow: row wrap;
 align-items: center;
 justify-content: space-between;
 max-width: 1173px;
 width: 100%;
 margin: 10px auto;
`;
const LinkList = styled.ul`
width: 100%;
max-width: 275px;
display: flex;
 flex-flow: row wrap;
 align-items: center;
 justify-content: space-between;
 margin-left: 200px;
 & > li{
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
  &:hover{
  cursor:pointer;
  background-color: rgba(0,0,0,.3);
  }
`;


const Header = props => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const burgerClasses = [
        'header-burger',
        isMenuOpen ? 'open' : null
    ];
    const menuClasses = [
        'header-nav',
        isMenuOpen ? 'open' : null
    ];
    const overlayClasses = [
        'overlay',
        isMenuOpen ? 'open' : null
    ];
    const onBurgerClick = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    const onOverlayClick = () => {
        setIsMenuOpen(false);
    };
    return (
        <ContainerHeader className="header">
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
                            <span className="menu-link">
                                Pricing
                            </span>
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
                </Nav>
                <div
                    className={overlayClasses.join(' ')}
                    onClick={onOverlayClick}
                />
        </ContainerHeader>
    );
}

export default Header;