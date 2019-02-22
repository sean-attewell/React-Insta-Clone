import React from 'react';
import styled from 'styled-components';
import StyledUsername from '../Styles/Reusables'

const PostHeaderWrapper = styled.div`
    display: flex;
    align-items: center;
    padding: 1.5%;
    /* div:last-child {
        margin-left: 2%;
        font-weight: bold;
    } */
`;

const BigStyledUsername = styled(StyledUsername)`
    font-size: 16px;
`

const ThumbWrapper = styled.div`
    height: 75px;
    width: 75px;
`;

const ThumbImage = styled.img`
    height: 100%;
    border-radius: 50%;
`;

const PostHeader = props => {
    return (
        <PostHeaderWrapper>
            <ThumbWrapper>
                <ThumbImage
                    alt="post header"
                    src={props.thumbnailUrl}
                />
            </ThumbWrapper>
            <BigStyledUsername>{props.username}</BigStyledUsername>
        </PostHeaderWrapper>
    );
};

export default PostHeader;