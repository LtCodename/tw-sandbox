import React  from 'react';
import styled from "styled-components";
import Menu from "./Menu";
import {Row} from "./Layout";

const TestText = styled.p`
    font-weight: 700;
    font-size: 20px;
`;

const Explore = () => {
    return (
        <Row>
            <Menu/>
            <TestText>Explore Page</TestText>
        </Row>
    )
};

export default Explore;