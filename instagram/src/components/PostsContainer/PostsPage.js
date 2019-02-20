import React, { Component } from 'react';
import '../../App.css';
import dummyData from '../../dummy-data';
import PostsContainer from './PostsContainer';
import SearchBar from '../SearchBar/SearchBarContainer';

class PostsPage extends Component {
    constructor() {
        super();
        this.state = {
            posts: [],
            search: ''
        };
    }

    filterPost = e => {
        e.preventDefault();
        const posts = this.state.posts.slice();
        const filteredPosts = posts.filter(post => post.username === this.state.search);
        this.setState({ posts: filteredPosts, search: '' });
    }

    searchChange = e => this.setState({ [e.target.name]: e.target.value })

    componentDidMount() {
        this.setState({ posts: dummyData });
    }


    render() {
        return (
            <div className="App">
                <SearchBar
                    value={this.state.search}
                    handleFilterPost={this.filterPost}
                    handleSearchChange={this.searchChange}
                />

                <PostsContainer posts={this.state.posts} />
            </div>
        );
    }
}

export default PostsPage;