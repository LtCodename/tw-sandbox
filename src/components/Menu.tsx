import React  from 'react';
import styled from "styled-components";
import {NavLink} from "react-router-dom";
import {Col} from "./Layout";

const Tab = styled.span`
    margin: 0;
    padding: 0;
    cursor: pointer;
`;

const MenuWrapper = styled(Col)`
    border-right: 1px solid #37444c;
    min-height: 100vh;
`;

const MenuInnerWrapper = styled.div`
    padding: 0 20px;
`;

const MenuIcon = styled.svg`
  width: 26.25px;
  height: 26.25px;
  margin-right: 25px;
`;

const TwitterLogo = styled.svg`
  width: 28.38px;
  margin: 13px 13px 10px 13px;
`;

const MenuLink = styled(NavLink)`
  padding: 10px 25px 10px 10px;
  border-radius: 25px;
  text-decoration: none;
  color: white;
  font-size: 19px;
  font-weight: 700;
  display: block;
  float: left;
  clear: both;
  :hover {
    background-color: #192D40;
    color: #1DA1F3;
  }
  &.active {
    color: #1DA1F3;
  }
`;

const LogoLink = styled(NavLink)`
  border-radius: 25px;
  text-decoration: none;
  color: white;
  font-size: 19px;
  font-weight: 700;
  display: block;
  float: left;
  clear: both;
  :hover {
    background-color: #192D40;
    color: #1DA1F3;
  }
  
`;

const TweetButton = styled.button`
  font-size: 15px;
  font-weight: 700;
  padding: 18px 0;
  width: 211.5px;
  background-color: #1DA1F2;
  border: none;
  border-radius: 50px;
  color: #FFFFFF;
  cursor: pointer;
  margin-top: 15px;
  outline: none;
  display: block;
  clear: both;
  :hover {
    background-color: #1991DA;
  }
`;

const MenuItem = styled.span`
  display: flex;
  align-items: center;
`;

const Menu = () => {
    return (
        <MenuWrapper>
            <MenuInnerWrapper>
                <LogoLink to="/home">
                    <TwitterLogo aria-hidden="true" focusable="false" data-prefix="fab" data-icon="twitter"
                                 role="img" xmlns="http://www.w3.org/2000/svg"
                                 viewBox="0 0 512 512">
                        <path fill="#FFFFFF"
                              d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/>
                    </TwitterLogo>
                </LogoLink>
                <MenuLink to="/home">
                    <MenuItem>
                        <MenuIcon aria-hidden="true" focusable="false" data-prefix="fas" data-icon="home"
                              role="img" xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 576 512">
                        <path fill="#FFFFFF"
                              d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"/>
                        </MenuIcon>
                        <Tab className="navigationButton">Home</Tab>
                    </MenuItem>
                </MenuLink>
                <MenuLink to="/notifications">
                    <MenuItem>
                        <MenuIcon aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bell"
                             role="img" xmlns="http://www.w3.org/2000/svg"
                             viewBox="0 0 448 512">
                            <path fill="#FFFFFF"
    d="M224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64zm215.39-149.71c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71z"/>
                        </MenuIcon>
                        <Tab className="navigationButton">Notifications</Tab>
                    </MenuItem>
                </MenuLink>
                <TweetButton>Tweet</TweetButton>
            </MenuInnerWrapper>
        </MenuWrapper>
    )
};

export default Menu;