import React  from 'react';
import styled from "styled-components";
import {NavLink} from "react-router-dom";
import {Col, Row} from "./Layout";

const Tab = styled(Row)`
    margin: 0;
    padding: 0;
    cursor: pointer;
`;

const MenuWrapper = styled(Col)`
    border-right: 1px solid #37444c;
`;

const MenuInnerWrapper = styled(Col)`
    padding: 0 20px;
`;

const SVG = styled.svg`
  width: 26.25px;
  height: 26.25px;
  margin-right: 25px;
`;

const MenuLink = styled(NavLink)`
  padding: 10px 25px 10px 10px;
  border-radius: 25px;
  text-decoration: none;
  color: white;
  font-size: 19px;
  font-weight: 700;
  :hover {
    background-color: #192D40;
    color: #1DA1F3;
  }
`;

const Menu = () => {
    return (
        <MenuWrapper>
            <MenuInnerWrapper>
                <p>Logo</p>
                <MenuLink to="/home">
                    <Row>
                        <SVG aria-hidden="true" focusable="false" data-prefix="fas" data-icon="home"
                              role="img" xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 576 512">
                        <path fill="#FFFFFF"
                              d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"/>
                        </SVG>
                        <Tab className="navigationButton">Home</Tab>
                    </Row>
                </MenuLink>
                <MenuLink to="/explore">
                    <Row>
                        <SVG aria-hidden="true" focusable="false" data-prefix="fas" data-icon="home"
                             role="img" xmlns="http://www.w3.org/2000/svg"
                             viewBox="0 0 576 512">
                            <path fill="#FFFFFF"
                                  d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"/>
                        </SVG>
                        <Tab className="navigationButton">Explore</Tab>
                    </Row>
                </MenuLink>
                <MenuLink to="/notifications">
                    <Row>
                        <SVG aria-hidden="true" focusable="false" data-prefix="fas" data-icon="home"
                             role="img" xmlns="http://www.w3.org/2000/svg"
                             viewBox="0 0 576 512">
                            <path fill="#FFFFFF"
                                  d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"/>
                        </SVG>
                        <Tab className="navigationButton">Notifications</Tab>
                    </Row>
                </MenuLink>
                <p>Tweet Button</p>
            </MenuInnerWrapper>
        </MenuWrapper>
    )
};

export default Menu;