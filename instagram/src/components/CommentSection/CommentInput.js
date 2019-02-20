import React from 'react';

const CommentInput = props => {
    return (
        <form onSubmit={props.handleAddNewComment}>
            <input 
                onChange={props.handleCommentChange}
                type="text"
                name="comment"
                value={props.value}
                placeholder="Add comment... " 
            />
            <input
                type="submit"
            />
        </form>
    );
};

export default CommentInput;