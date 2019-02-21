import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';
import CommentInput from './CommentInput';
import styled from 'styled-components';

const CommentWrapper = styled.div`
    padding: 1.5%;
`;

class CommentSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: props.comments,
            comment: '',
            likes: props.likes
        };
    }

    addNewComment = (e, i) => {
        e.preventDefault();
        const comments = this.state.comments.slice();
        comments.push({ username: localStorage.getItem('userName'), text: this.state.comment });
        this.setState({ comments, comment: '' });
    }

    commentChange = e => this.setState({ [e.target.name]: e.target.value })
    
    addLike = () => {
        this.setState(prevState => ({ likes: prevState.likes + 1 }))
    }

    render() {
        return (
            <CommentWrapper>
                <div>
                    <i className="fa fa-heart fa-2x" onClick={this.addLike} />
                </div>

                <div>
                    likes: {this.state.likes}
                </div>

                {this.state.comments.map((c, i) => <Comment key={i} comment={c} />)}
                
                <CommentInput 
                value={this.state.comment}
                handleCommentChange={this.commentChange}
                handleAddNewComment={this.addNewComment}
                />

            </CommentWrapper>
        );
    }
}

CommentSection.propTypes = {
    comments: PropTypes.arrayOf(
        PropTypes.shape({ text: PropTypes.string, username: PropTypes.string })
    )
};

export default CommentSection;