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

const Counter = styled.span`
    font-size: 15px;
    color: #8899a6;
    margin-left: 10px;
`;

interface ITweets {
    tweetData: ITweetData;
}

const Tweet: React.FC<ITweets> = (
        { tweetData },
    ) => {

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
                    {/*Comment*/}
                    <Row>
                        <InteractionIcon aria-hidden="true" focusable="false" data-prefix="far" data-icon="comment"
                                         role="img" xmlns="http://www.w3.org/2000/svg"
                                         viewBox="0 0 512 512">
                            <path fill="#8899a6"
                                  d="M256 32C114.6 32 0 125.1 0 240c0 47.6 19.9 91.2 52.9 126.3C38 405.7 7 439.1 6.5 439.5c-6.6 7-8.4 17.2-4.6 26S14.4 480 24 480c61.5 0 110-25.7 139.1-46.3C192 442.8 223.2 448 256 448c141.4 0 256-93.1 256-208S397.4 32 256 32zm0 368c-26.7 0-53.1-4.1-78.4-12.1l-22.7-7.2-19.5 13.8c-14.3 10.1-33.9 21.4-57.5 29 7.3-12.1 14.4-25.7 19.9-40.2l10.6-28.1-20.6-21.8C69.7 314.1 48 282.2 48 240c0-88.2 93.3-160 208-160s208 71.8 208 160-93.3 160-208 160z"/>
                        </InteractionIcon>
                        <Counter>
                            {tweetData.comments}
                        </Counter>
                    </Row>
                    {/*Retweet*/}
                    <Row>
                        <InteractionIcon aria-hidden="true" focusable="false" data-prefix="far" data-icon="clone"
                                         role="img" xmlns="http://www.w3.org/2000/svg"
                                         viewBox="0 0 512 512">
                            <path fill="#8899a6"
                                  d="M464 0H144c-26.51 0-48 21.49-48 48v48H48c-26.51 0-48 21.49-48 48v320c0 26.51 21.49 48 48 48h320c26.51 0 48-21.49 48-48v-48h48c26.51 0 48-21.49 48-48V48c0-26.51-21.49-48-48-48zM362 464H54a6 6 0 0 1-6-6V150a6 6 0 0 1 6-6h42v224c0 26.51 21.49 48 48 48h224v42a6 6 0 0 1-6 6zm96-96H150a6 6 0 0 1-6-6V54a6 6 0 0 1 6-6h308a6 6 0 0 1 6 6v308a6 6 0 0 1-6 6z"/>
                        </InteractionIcon>
                        <Counter>
                            {tweetData.retweets}
                        </Counter>
                    </Row>
                    {/*Like*/}
                    <Row>
                        <InteractionIcon aria-hidden="true" focusable="false" data-prefix="far" data-icon="heart"
                                         role="img" xmlns="http://www.w3.org/2000/svg"
                                         viewBox="0 0 512 512">
                            <path fill="#8899a6"
                                  d="M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z"/>
                        </InteractionIcon>
                        <Counter>
                            {tweetData.likes}
                        </Counter>
                    </Row>
                    {/*Share*/}
                    <InteractionIcon aria-hidden="true" focusable="false" data-prefix="far" data-icon="share-square"
                         className="svg-inline--fa fa-share-square fa-w-18" role="img"
                         xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                        <path fill="#8899a6"
    d="M561.938 158.06L417.94 14.092C387.926-15.922 336 5.097 336 48.032v57.198c-42.45 1.88-84.03 6.55-120.76 17.99-35.17 10.95-63.07 27.58-82.91 49.42C108.22 199.2 96 232.6 96 271.94c0 61.697 33.178 112.455 84.87 144.76 37.546 23.508 85.248-12.651 71.02-55.74-15.515-47.119-17.156-70.923 84.11-78.76V336c0 42.993 51.968 63.913 81.94 33.94l143.998-144c18.75-18.74 18.75-49.14 0-67.88zM384 336V232.16C255.309 234.082 166.492 255.35 206.31 376 176.79 357.55 144 324.08 144 271.94c0-109.334 129.14-118.947 240-119.85V48l144 144-144 144zm24.74 84.493a82.658 82.658 0 0 0 20.974-9.303c7.976-4.952 18.286.826 18.286 10.214V464c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V112c0-26.51 21.49-48 48-48h132c6.627 0 12 5.373 12 12v4.486c0 4.917-2.987 9.369-7.569 11.152-13.702 5.331-26.396 11.537-38.05 18.585a12.138 12.138 0 0 1-6.28 1.777H54a6 6 0 0 0-6 6v340a6 6 0 0 0 6 6h340a6 6 0 0 0 6-6v-25.966c0-5.37 3.579-10.059 8.74-11.541z"/>
                    </InteractionIcon>
                </Interactions>
            </Col>
        </TweetWrapper>
    )
};

export default Tweet;