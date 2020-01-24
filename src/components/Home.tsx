import React  from 'react';
import styled from "styled-components";
import Menu from "./Menu";
import {Row} from "./Layout";

const TestText = styled.p`
    font-weight: 700;
    font-size: 20px;
`;

const AllContent = styled(Row)`
`;

const Home = () => {
    return (
        <AllContent>
            <Menu/>
            <TestText>Home Page</TestText>
        </AllContent>
    )
};

export default Home;