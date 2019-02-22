import React from 'react';
import CommentSection from '../CommentSection/CommentSectionContainer';
import PostHeader from './PostHeader';
import styled from 'styled-components';


const PostBorder = styled.div`
    border: 1px solid #d3d3d3;
    margin: 20px 0;
    box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
`;

const PostImage = styled.img`
    width: 100%;
`;

const Post = props => {
    return (
        <PostBorder>
            <PostHeader
                username={props.post.username}
                thumbnailUrl={props.post.thumbnailUrl}
            />
            <div>
                <PostImage
                    alt="post thumbnail"
                    className="post-image"
                    src={props.post.imageUrl}
                />
            </div>
            <CommentSection 
            comments={props.post.comments} 
            likes={props.post.likes}
            />
        </PostBorder>
    );
};

export default Post;