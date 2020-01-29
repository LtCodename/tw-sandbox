import styled from "styled-components";
import {Col, Row} from "../Layout";
import React from "react";
import {INotificationData} from "./Notifications";

const TweetWrapper = styled(Row)`
    border-right: 1px solid #37444c;
    border-bottom: 1px solid #37444c;
`;

const Avatar = styled.img`
    border-radius: 50%;
    margin-top: 10px;
    cursor: pointer;
    width: 30px;
    height: 30px;
`;

const TweetHeader = styled(Row)`
    margin-top: 10px;
    padding-right: 10px;
`;

const Username = styled.span`
    font-size: 15px;
    font-weight: 800;
    color: #ffffff;
    margin-right: 5px;
`;

const Note = styled.span`
    font-size: 15px;
    font-weight: 500;
    color: #ffffff;
`;

const Text = styled.span`
    font-size: 15px;
    color: #8899A6;
    font-weight: 500;
    padding-right: 10px;
    padding-bottom: 10px;
    margin-top: 10px;
`;

const SVG = styled.svg`
    height: 30px;
    margin: 10px 10px 0 30px;
`;

interface INotifications {
    notificationsData: INotificationData;
}

const Notification: React.FC<INotifications> = (
    { notificationsData },
) => {

    const icons = {
        like: (<SVG aria-hidden="true" focusable="false" data-prefix="far" data-icon="heart"
                    role="img" xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512">
                <path fill="#e0245e"
    d="M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z"/>
            </SVG>
        ),
        retweet: (<SVG aria-hidden="true" focusable="false" data-prefix="far" data-icon="clone"
                       role="img" xmlns="http://www.w3.org/2000/svg"
                       viewBox="0 0 512 512">
                <path fill="#794ac4"
    d="M464 0H144c-26.51 0-48 21.49-48 48v48H48c-26.51 0-48 21.49-48 48v320c0 26.51 21.49 48 48 48h320c26.51 0 48-21.49 48-48v-48h48c26.51 0 48-21.49 48-48V48c0-26.51-21.49-48-48-48zM362 464H54a6 6 0 0 1-6-6V150a6 6 0 0 1 6-6h42v224c0 26.51 21.49 48 48 48h224v42a6 6 0 0 1-6 6zm96-96H150a6 6 0 0 1-6-6V54a6 6 0 0 1 6-6h308a6 6 0 0 1 6 6v308a6 6 0 0 1-6 6z"/>
            </SVG>
        ),
        comment: (<SVG aria-hidden="true" focusable="false" data-prefix="far" data-icon="comment"
                       role="img" xmlns="http://www.w3.org/2000/svg"
                       viewBox="0 0 512 512">
                <path fill="#1da1f2"
    d="M256 32C114.6 32 0 125.1 0 240c0 47.6 19.9 91.2 52.9 126.3C38 405.7 7 439.1 6.5 439.5c-6.6 7-8.4 17.2-4.6 26S14.4 480 24 480c61.5 0 110-25.7 139.1-46.3C192 442.8 223.2 448 256 448c141.4 0 256-93.1 256-208S397.4 32 256 32zm0 368c-26.7 0-53.1-4.1-78.4-12.1l-22.7-7.2-19.5 13.8c-14.3 10.1-33.9 21.4-57.5 29 7.3-12.1 14.4-25.7 19.9-40.2l10.6-28.1-20.6-21.8C69.7 314.1 48 282.2 48 240c0-88.2 93.3-160 208-160s208 71.8 208 160-93.3 160-208 160z"/>
            </SVG>
        ),
    };

    return (
        <TweetWrapper>
            <Col>
                {icons[notificationsData.type]}
            </Col>
            <Col>
                <Avatar src={notificationsData.avatar}/>
                <TweetHeader>
                    <Username>{notificationsData.name}</Username>
                    <Note>{notificationsData.note}</Note>
                </TweetHeader>
                <Text>{notificationsData.text}</Text>
            </Col>
        </TweetWrapper>
    )
};

export default Notification;