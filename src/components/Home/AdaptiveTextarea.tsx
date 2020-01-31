import React, { Component } from "react";
import autosize from "autosize";
import styled from "styled-components";

const Textarea = styled.textarea`
    color: #9197a3;
    font-size: 20px;
    font-weight: 500;
    color: #bdc1c8;
    font-size: 20px;
    font-weight: 500;
    border: none;
    background-color: inherit;
    width: 100%;
    resize: none;
    outline: none;
`;

type TweetState = {
    tweetText: ''
}

export class AdaptiveTextarea extends Component<{}, TweetState> {
    private textarea: any;

    componentWillMount() {
        this.setState({
            tweetText: ''
        });
    }

    componentDidMount() {
        this.textarea.focus();
        autosize(this.textarea);
    }

    inputValuesChange = (event: { target: { value: any; }; }) => {
        this.setState({
            tweetText: event.target.value
        });
    };

    render() {
        return (
            <Textarea
                ref={c => (this.textarea = c)}
                placeholder={'What is happening?'}
                value={this.state.tweetText}
                onChange={this.inputValuesChange}
                required>
            </Textarea>
        );
    }
}

export default AdaptiveTextarea;
