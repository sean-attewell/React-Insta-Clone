import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CommentText = styled.div`
    padding: 5px 0;
`;

const CommentSpan = styled.span`
font-weight: 300;
font-size: 14px;
`;

const UserSpan = styled.span`
font-weight: 500;
font-size: 12px;
`;

const Comment = props => {
    return (
        <CommentText>
            <CommentSpan>{props.comment.text}</CommentSpan>{' '}
            <UserSpan>-{props.comment.username}</UserSpan>
        </CommentText>
    );
};

Comment.propTypes = {
    comment: PropTypes.shape({
        text: PropTypes.string,
        username: PropTypes.string
    })
};

export default Comment;