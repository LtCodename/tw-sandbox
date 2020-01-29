import styled from "styled-components";
import {Col, Row} from "../Layout";
import AdaptiveTextarea from "./AdaptiveTextarea";
import React, {useContext, useEffect, useState} from "react";
import {Context} from "../../App";

const Avatar = styled.img`
    border-radius: 50%;
    margin: 10px 15px;
    cursor: pointer;
    width: 50px;
    height: 50px;
`;

const AvatarAndText = styled(Row)`
    align-items: center;
`;

const UnderTweetRow = styled(Row)`
    justify-content: space-between;
    padding-left: 80px;
    margin-bottom: 15px;
    margin-right: 15px;
    align-items: center;
`;

const PostArea = styled(Col)`
    border-right: 1px solid #37444c;
    border-bottom: 10px solid #253341;
`;

const AddMediaIcon = styled.svg`
    width: 22.5px;
    height: 22.5px;
`;

const MediaButton = styled.button`
    cursor: pointer;
    border: none;
    background: none;
    border-radius: 50%;
    margin-right: 5px;
    padding: 10px;
    transition: all 0.2s;
    &:hover {
        background: #192D40;
        color: #1DA1F3;
    }
`;

const TweetButton = styled.button`
  font-size: 15px;
  font-weight: 700;
  padding: 10px 0;
  width: 75px;
  background-color: #1DA1F2;
  border: none;
  border-radius: 50px;
  color: #FFFFFF;
  cursor: pointer;
  outline: none;
  display: block;
  clear: both;
  &:hover {
    background-color: #1991DA;
  }
`;

const NewPost = () => {
    const { userInfo, addTweet } = useContext(Context);

    useEffect(() => {
        //console.log(userInfo.avatar)
    },        [userInfo]);



    const [tweetData, changeTweetData] = useState('');

    const handleTweet = () => {
        if (!tweetData.length) return;
        addTweet(tweetData);
        changeTweetData('');
    };

    return (
        <PostArea>
            <AvatarAndText>
                <Avatar src={userInfo.avatar}/>
                <AdaptiveTextarea/>
            </AvatarAndText>
            <UnderTweetRow>
                <Row>
                    <MediaButton type={'button'}>
                        <AddMediaIcon aria-hidden="true" focusable="false" data-prefix="far" data-icon="image"
                                      role="img" xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512">
                            <path fill="#1da1f2"
                                  d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm-6 336H54a6 6 0 0 1-6-6V118a6 6 0 0 1 6-6h404a6 6 0 0 1 6 6v276a6 6 0 0 1-6 6zM128 152c-22.091 0-40 17.909-40 40s17.909 40 40 40 40-17.909 40-40-17.909-40-40-40zM96 352h320v-80l-87.515-87.515c-4.686-4.686-12.284-4.686-16.971 0L192 304l-39.515-39.515c-4.686-4.686-12.284-4.686-16.971 0L96 304v48z"/>
                        </AddMediaIcon>
                    </MediaButton>
                    <MediaButton type={'button'}>
                        <AddMediaIcon aria-hidden="true" focusable="false" data-prefix="fas" data-icon="poll"
                             role="img" xmlns="http://www.w3.org/2000/svg"
                             viewBox="0 0 448 512">
                            <path fill="#1da1f2"
        d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM160 368c0 8.84-7.16 16-16 16h-32c-8.84 0-16-7.16-16-16V240c0-8.84 7.16-16 16-16h32c8.84 0 16 7.16 16 16v128zm96 0c0 8.84-7.16 16-16 16h-32c-8.84 0-16-7.16-16-16V144c0-8.84 7.16-16 16-16h32c8.84 0 16 7.16 16 16v224zm96 0c0 8.84-7.16 16-16 16h-32c-8.84 0-16-7.16-16-16v-64c0-8.84 7.16-16 16-16h32c8.84 0 16 7.16 16 16v64z"/>
                        </AddMediaIcon>
                    </MediaButton>
                    <MediaButton type={'button'}>
                        <AddMediaIcon aria-hidden="true" focusable="false" data-prefix="far" data-icon="sad-tear"
                             role="img" xmlns="http://www.w3.org/2000/svg"
                             viewBox="0 0 496 512">
                            <path fill="#1da1f2"
        d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 448c-110.3 0-200-89.7-200-200S137.7 56 248 56s200 89.7 200 200-89.7 200-200 200zm8-152c-13.2 0-24 10.8-24 24s10.8 24 24 24c23.8 0 46.3 10.5 61.6 28.8 8.1 9.8 23.2 11.9 33.8 3.1 10.2-8.5 11.6-23.6 3.1-33.8C330 320.8 294.1 304 256 304zm-88-64c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm160-64c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zm-165.6 98.8C151 290.1 126 325.4 126 342.9c0 22.7 18.8 41.1 42 41.1s42-18.4 42-41.1c0-17.5-25-52.8-36.4-68.1-2.8-3.7-8.4-3.7-11.2 0z"/>
                        </AddMediaIcon>
                    </MediaButton>
                    <MediaButton type={'button'}>
                        <AddMediaIcon aria-hidden="true" focusable="false" data-prefix="far" data-icon="calendar-check"
                             role="img"
                             xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path fill="#1da1f2"
        d="M400 64h-48V12c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v52H160V12c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v52H48C21.49 64 0 85.49 0 112v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm-6 400H54a6 6 0 0 1-6-6V160h352v298a6 6 0 0 1-6 6zm-52.849-200.65L198.842 404.519c-4.705 4.667-12.303 4.637-16.971-.068l-75.091-75.699c-4.667-4.705-4.637-12.303.068-16.971l22.719-22.536c4.705-4.667 12.303-4.637 16.97.069l44.104 44.461 111.072-110.181c4.705-4.667 12.303-4.637 16.971.068l22.536 22.718c4.667 4.705 4.636 12.303-.069 16.97z"/>
                        </AddMediaIcon>
                    </MediaButton>
                </Row>
                <TweetButton onClick={handleTweet}>Tweet</TweetButton>
            </UnderTweetRow>
        </PostArea>
    )
};

export default NewPost;