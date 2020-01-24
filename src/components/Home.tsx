import React  from 'react';
import styled from "styled-components";
import Menu from "./Menu";
import {Col, Row} from "./Layout";

const Text = styled.p`
    font-weight: 800;
    font-size: 19px;
`;

const TimelineColumn = styled(Col)`
    width: 598px;
`;

const TitleWrapper = styled.div`
    border-right: 1px solid #37444c;
    border-bottom: 1px solid #37444c;
    padding: 20px 15px;
`;

const AllContent = styled(Row)`
`;

const Home = () => {
    return (
        <AllContent>
            <Menu/>
            <TimelineColumn>
                <TitleWrapper>
                    <Text>Home</Text>
                </TitleWrapper>
            </TimelineColumn>
            <Col>
            </Col>
        </AllContent>
    )
};

export default Home;