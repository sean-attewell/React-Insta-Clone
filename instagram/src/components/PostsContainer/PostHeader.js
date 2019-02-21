import React from 'react';
import styled from 'styled-components';

const PostHeaderWrapper = styled.div`
    display: flex;
    align-items: center;
    padding: 1.5%;
    div:last-child {
        margin-left: 2%;
        font-weight: bold;
    }
`;

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
            <div>{props.username}</div>
        </PostHeaderWrapper>
    );
};

export default PostHeader;