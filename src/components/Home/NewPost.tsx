import styled from "styled-components";
import {Col, Row} from "../Layout";
import React, {useState} from "react";

const Avatar = styled.img`
    border-radius: 50%;
    margin: 10px 15px;
    cursor: pointer;
    width: 50px;
    height: 50px;
`;

const Textarea = styled.textarea`
    color: #9197a3;
    font-size: 20px;
    font-weight: 500;
    color: #bdc1c8;
    font-size: 20px;
    font-weight: 500;
    border: none;
    background-color: inherit;
    width: 505px;
    resize: none;
    outline: none;
`;

const AvatarAndText = styled(Row)`
    align-items: center;
`;

const UnderTweetRow = styled(Row)`
    justify-content: space-between;
    padding-left: 80px;
    margin-bottom: 10px;
    margin-right: 15px;
    align-items: center;
`;

const PostArea = styled(Col)`
    border-right: 1px solid #37444c;
    border-bottom: 10px solid #253341;
`;

const AddMediaIcon = styled.svg`
    width: 18.75px;
    height: 18.75px;
    cursor: pointer;
    border-radius: 50%;
    margin-right: 10px;
    :hover {
        background-color: #192D40;
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
  :hover {
    background-color: #1991DA;
  }
`;

const NewPost = () => {
    const inputValuesChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        changeTweetData(event.target.value);
    };

    const [tweetData, changeTweetData] = useState('');

    return (
        <PostArea>
            <AvatarAndText>
                <Avatar src={'https://placebear.com/500/500'}/>
                <Textarea
                    placeholder={'What is happening?'}
                    rows={1}
                    value={tweetData}
                    onChange={inputValuesChange}
                    required>
                </Textarea>
            </AvatarAndText>
            <UnderTweetRow>
                <Row>
                    <AddMediaIcon aria-hidden="true" focusable="false" data-prefix="fas" data-icon="hashtag"
                                  role="img" xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 448 512">
                        <path fill="#1d95df"
                              d="M440.667 182.109l7.143-40c1.313-7.355-4.342-14.109-11.813-14.109h-74.81l14.623-81.891C377.123 38.754 371.468 32 363.997 32h-40.632a12 12 0 0 0-11.813 9.891L296.175 128H197.54l14.623-81.891C213.477 38.754 207.822 32 200.35 32h-40.632a12 12 0 0 0-11.813 9.891L132.528 128H53.432a12 12 0 0 0-11.813 9.891l-7.143 40C33.163 185.246 38.818 192 46.289 192h74.81L98.242 320H19.146a12 12 0 0 0-11.813 9.891l-7.143 40C-1.123 377.246 4.532 384 12.003 384h74.81L72.19 465.891C70.877 473.246 76.532 480 84.003 480h40.632a12 12 0 0 0 11.813-9.891L151.826 384h98.634l-14.623 81.891C234.523 473.246 240.178 480 247.65 480h40.632a12 12 0 0 0 11.813-9.891L315.472 384h79.096a12 12 0 0 0 11.813-9.891l7.143-40c1.313-7.355-4.342-14.109-11.813-14.109h-74.81l22.857-128h79.096a12 12 0 0 0 11.813-9.891zM261.889 320h-98.634l22.857-128h98.634l-22.857 128z"/>
                    </AddMediaIcon>
                    <AddMediaIcon aria-hidden="true" focusable="false" data-prefix="fas" data-icon="hashtag"
                                  role="img" xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 448 512">
                        <path fill="#1d95df"
                              d="M440.667 182.109l7.143-40c1.313-7.355-4.342-14.109-11.813-14.109h-74.81l14.623-81.891C377.123 38.754 371.468 32 363.997 32h-40.632a12 12 0 0 0-11.813 9.891L296.175 128H197.54l14.623-81.891C213.477 38.754 207.822 32 200.35 32h-40.632a12 12 0 0 0-11.813 9.891L132.528 128H53.432a12 12 0 0 0-11.813 9.891l-7.143 40C33.163 185.246 38.818 192 46.289 192h74.81L98.242 320H19.146a12 12 0 0 0-11.813 9.891l-7.143 40C-1.123 377.246 4.532 384 12.003 384h74.81L72.19 465.891C70.877 473.246 76.532 480 84.003 480h40.632a12 12 0 0 0 11.813-9.891L151.826 384h98.634l-14.623 81.891C234.523 473.246 240.178 480 247.65 480h40.632a12 12 0 0 0 11.813-9.891L315.472 384h79.096a12 12 0 0 0 11.813-9.891l7.143-40c1.313-7.355-4.342-14.109-11.813-14.109h-74.81l22.857-128h79.096a12 12 0 0 0 11.813-9.891zM261.889 320h-98.634l22.857-128h98.634l-22.857 128z"/>
                    </AddMediaIcon>
                    <AddMediaIcon aria-hidden="true" focusable="false" data-prefix="fas" data-icon="hashtag"
                                  role="img" xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 448 512">
                        <path fill="#1d95df"
                              d="M440.667 182.109l7.143-40c1.313-7.355-4.342-14.109-11.813-14.109h-74.81l14.623-81.891C377.123 38.754 371.468 32 363.997 32h-40.632a12 12 0 0 0-11.813 9.891L296.175 128H197.54l14.623-81.891C213.477 38.754 207.822 32 200.35 32h-40.632a12 12 0 0 0-11.813 9.891L132.528 128H53.432a12 12 0 0 0-11.813 9.891l-7.143 40C33.163 185.246 38.818 192 46.289 192h74.81L98.242 320H19.146a12 12 0 0 0-11.813 9.891l-7.143 40C-1.123 377.246 4.532 384 12.003 384h74.81L72.19 465.891C70.877 473.246 76.532 480 84.003 480h40.632a12 12 0 0 0 11.813-9.891L151.826 384h98.634l-14.623 81.891C234.523 473.246 240.178 480 247.65 480h40.632a12 12 0 0 0 11.813-9.891L315.472 384h79.096a12 12 0 0 0 11.813-9.891l7.143-40c1.313-7.355-4.342-14.109-11.813-14.109h-74.81l22.857-128h79.096a12 12 0 0 0 11.813-9.891zM261.889 320h-98.634l22.857-128h98.634l-22.857 128z"/>
                    </AddMediaIcon>
                </Row>
                <TweetButton>Tweet</TweetButton>
            </UnderTweetRow>
        </PostArea>
    )
};

export default NewPost;