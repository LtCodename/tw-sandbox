import styled from "styled-components";
import {Col, Row} from "../Layout";
import React from "react";
import {ITweetData} from "./Home";
import moment from "moment";

const TweetWrapper = styled(Row)`
    border-right: 1px solid #37444c;
    border-bottom: 1px solid #37444c;
`;

const Avatar = styled.img`
    border-radius: 50%;
    margin: 10px 15px;
    cursor: pointer;
    width: 50px;
    height: 50px;
`;

const TweetHeader = styled(Row)`
    justify-content: space-between;
    width: 517px;
    margin-top: 10px;
    padding-right: 10px;
`;

const HeaderLeftElements = styled(Row)`
    align-items: center;
`;

const Username = styled.a`
    font-size: 15px;
    font-weight: 800;
    color: #ffffff;
    margin-right: 5px;
    text-decoration-color: transparent;
    :hover {
        text-decoration-color: #ffffff;
    }
`;

const Handle = styled.span`
    font-size: 15px;
    color: #8899a6;
    margin-right: 5px;
`;

const Dot = styled.span`
    height: 3px;
    width: 3px;
    background-color: #8899a6;
    border-radius: 50%;
    display: inline-block;
    margin-right: 5px;
    margin-top: 3px;
`;

const Time = styled.a`
    font-size: 15px;
    color: #8899a6;
    text-decoration-color: transparent;
    :hover {
        text-decoration-color: #8899a6;
    }
`;

const Context = styled.svg`
    width: 11px;
    cursor: pointer;
    border-radius: 50%;
    :hover {
        background-color: #192D40;
        color: #1DA1F3;
    }
`;

const Text = styled.span`
    font-size: 15px;
    color: #ffffff;
    font-weight: 500;
    width: 517px;
    padding-right: 10px;
    padding-bottom: 10px;
`;

const InteractionIcon = styled.svg`
    width: 19px;
    cursor: pointer;
    :hover {
        background-color: #2f2939;
        color: #1DA1F3;
    }
`;

const Interactions = styled(Row)`
    justify-content: space-between;
    padding-right: 130px;
    padding-bottom: 10px;
`;

interface ITweets {
    tweetData: ITweetData;
}

const Tweet: React.FC<ITweets> = (
        { tweetData },
    ) => {

    //const dateToShow = (moment.unix(tweetData.time).format("MM/DD/YYYY"));
    const dateToShow = (moment.unix(tweetData.time).startOf('day').fromNow());

    return (
        <TweetWrapper>
            <Col>
                <Avatar src={tweetData.avatar}/>
            </Col>
            <Col>
                <TweetHeader>
                    <HeaderLeftElements>
                        <Username href={''}>{tweetData.name}</Username>
                        <Handle>{tweetData.handle}</Handle>
                        <Dot/>
                        <Time href={''}>{dateToShow}</Time>
                    </HeaderLeftElements>
                    <Context aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-down"
                         role="img"
                         xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <path fill="#8899a6"
    d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"/>
                    </Context>
                </TweetHeader>
                <Row>
                    <Text>{tweetData.text}</Text>
                </Row>
                <Interactions>
                    <InteractionIcon aria-hidden="true" focusable="false" data-prefix="far" data-icon="heart"
                         role="img" xmlns="http://www.w3.org/2000/svg"
                         viewBox="0 0 512 512">
                        <path fill="#8899a6"
    d="M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z"/>
                    </InteractionIcon>
                    <InteractionIcon aria-hidden="true" focusable="false" data-prefix="far" data-icon="heart"
                                     role="img" xmlns="http://www.w3.org/2000/svg"
                                     viewBox="0 0 512 512">
                        <path fill="#8899a6"
                              d="M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z"/>
                    </InteractionIcon>
                    <InteractionIcon aria-hidden="true" focusable="false" data-prefix="far" data-icon="heart"
                                     role="img" xmlns="http://www.w3.org/2000/svg"
                                     viewBox="0 0 512 512">
                        <path fill="#8899a6"
                              d="M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z"/>
                    </InteractionIcon>
                    <InteractionIcon aria-hidden="true" focusable="false" data-prefix="far" data-icon="heart"
                                     role="img" xmlns="http://www.w3.org/2000/svg"
                                     viewBox="0 0 512 512">
                        <path fill="#8899a6"
                              d="M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z"/>
                    </InteractionIcon>
                </Interactions>
            </Col>
        </TweetWrapper>
    )
};

export default Tweet;