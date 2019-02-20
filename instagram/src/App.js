import React, { Component } from 'react';
import './App.css';
import PostsPage from './components/PostsContainer/PostsPage';
import authenticate from './components/Authentication/Authenticate';
import Login from './components/Login/Login';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <PostsPage />
      </div>
    );
  }
}

const WrappedApp = authenticate(App, Login);

export default WrappedApp;