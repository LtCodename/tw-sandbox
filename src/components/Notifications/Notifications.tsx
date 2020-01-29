import React, {useContext, useState} from 'react';
import styled from "styled-components";
import {Col, Row} from "../Layout";
import {Context} from "../../App";
import Tweet from "../Home/Tweet";
import {ITweetData} from "../Home/Home";
import Notification from "./Notification";

const Wrapper = styled(Col)`
    width: 598px;
`;

const TitleWrapper = styled.div`
    border-right: 1px solid #37444c;
    padding: 10px 15px;
    cursor: pointer;
`;

const HeaderRow = styled(Row)`
    justify-content: space-between;
    align-items: center;
`;

const Text = styled.p`
    font-weight: 800;
    font-size: 19px;
`;

const SVG = styled.svg`
    height: 20px;
`;

const IconAnchor = styled.div`
    padding: 10px;
    margin: 0;
    cursor: pointer;
    border-radius: 50%;
    :hover {
        background: #192D40;
    }
`;

const ButtonsRow = styled(Row)`
    border-bottom: 2px solid #37444c;
    border-right: 1px solid #37444c;
`;

const TabButtonAll = styled.button<{ activeTab: string }>`
    font-size: 15px;
    font-weight: 700;
    padding: 16px 10px;
    width: 50%;
    border: none;
    color: #8899A6;
    background: #14202a;
    cursor: pointer;
    transition: all .3s;
    outline: none;
    border-bottom: 2px solid ${props => props.activeTab === 'all' ? '#1da1f2' : 'transparent'};
    :hover {
        color: #1da1f2;
        background: #192D40;
    }
`;

const TabButtonMentions = styled(TabButtonAll)`
    border-bottom: 2px solid ${props => props.activeTab === 'mentions' ? '#1da1f2' : 'transparent'};
`;

const TabAll = styled(Col)<{ activeTab: string }>`
    display: ${props => props.activeTab === 'all' ? 'block' : 'none'};
`;

const TabMentions = styled(Col)<{ activeTab: string }>`
    display: ${props => props.activeTab === 'mentions' ? 'block' : 'none'};
`;

export interface INotificationData {
    avatar: string;
    name: string;
    text: string;
    type: 'like' | 'retweet' | 'comment';
    note: string;
}

const Notifications = () => {
    const { allTweets, notifications } = useContext(Context);
    const [tab, setTab] = useState('all');

    const toggleAllTab = () => {
        setTab('all');
    };

    const toggleMentionsTab = () => {
        setTab('mentions');
    };

    const tweets = (
        allTweets.map((tweetData: ITweetData, index: any) => {
                return (
                    <Tweet key={index} tweetData={tweetData}/>
                );
            },
        )
    );

    const notificationsToShow = (
        notifications.map((notificationsData: INotificationData, index: any) => {
                return (
                    <Notification key={index} notificationsData={notificationsData}/>
                );
            },
        )
    );

    return (
        <Wrapper>
            <TitleWrapper>
                <HeaderRow>
                    <Text>Notifications</Text>
                    <IconAnchor>
                        <SVG aria-hidden="true" focusable="false" data-prefix="fas" data-icon="cog"
                             role="img" xmlns="http://www.w3.org/2000/svg"
                             viewBox="0 0 512 512">
                            <path fill="#1da1f2"
    d="M487.4 315.7l-42.6-24.6c4.3-23.2 4.3-47 0-70.2l42.6-24.6c4.9-2.8 7.1-8.6 5.5-14-11.1-35.6-30-67.8-54.7-94.6-3.8-4.1-10-5.1-14.8-2.3L380.8 110c-17.9-15.4-38.5-27.3-60.8-35.1V25.8c0-5.6-3.9-10.5-9.4-11.7-36.7-8.2-74.3-7.8-109.2 0-5.5 1.2-9.4 6.1-9.4 11.7V75c-22.2 7.9-42.8 19.8-60.8 35.1L88.7 85.5c-4.9-2.8-11-1.9-14.8 2.3-24.7 26.7-43.6 58.9-54.7 94.6-1.7 5.4.6 11.2 5.5 14L67.3 221c-4.3 23.2-4.3 47 0 70.2l-42.6 24.6c-4.9 2.8-7.1 8.6-5.5 14 11.1 35.6 30 67.8 54.7 94.6 3.8 4.1 10 5.1 14.8 2.3l42.6-24.6c17.9 15.4 38.5 27.3 60.8 35.1v49.2c0 5.6 3.9 10.5 9.4 11.7 36.7 8.2 74.3 7.8 109.2 0 5.5-1.2 9.4-6.1 9.4-11.7v-49.2c22.2-7.9 42.8-19.8 60.8-35.1l42.6 24.6c4.9 2.8 11 1.9 14.8-2.3 24.7-26.7 43.6-58.9 54.7-94.6 1.5-5.5-.7-11.3-5.6-14.1zM256 336c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z"/>
                        </SVG>
                    </IconAnchor>
                </HeaderRow>
            </TitleWrapper>
            {/*Tabs*/}
            <ButtonsRow>
                <TabButtonAll activeTab={tab} onClick={toggleAllTab}>All</TabButtonAll>
                <TabButtonMentions activeTab={tab} onClick={toggleMentionsTab}>Mentions</TabButtonMentions>
            </ButtonsRow>
            <TabAll activeTab={tab}>
                {notificationsToShow}
                {notificationsToShow}
            </TabAll>
            <TabMentions activeTab={tab}>
                {tweets}
                {tweets}
            </TabMentions>
        </Wrapper>
    )
};

export default Notifications;