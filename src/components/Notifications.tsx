import React  from 'react';
import styled from "styled-components";
import {Row} from "./Layout";

const TestText = styled.p`
    font-weight: 700;
    font-size: 20px;
`;

const Notifications = () => {
    return (
        <Row>
            <TestText>Notifications Page</TestText>
        </Row>
    )
};

export default Notifications;