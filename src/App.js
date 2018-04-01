import React, { Component } from 'react';
import Navbar from './components/Navbar';
import PostsContainer from './components/PostsContainer';

class App extends Component {
  posts = [
    {
      postID: 'bark bark',
      picture: 'pancake.jpg',
      poster: 'Pancake',
      postCaption: 'bark bark',
      likes: 1,
      comments: [
        {
          commentID: 'Bark Bark',
          commenter: 'Doge',
          comment: 'Bark Bark'
        }
      ]
    }
  ];  

  render() {
    return (
      <div className="App">
        <Navbar />
        <PostsContainer 
          posts={this.posts}
        />
      </div>
    );
  }
}

export default App;
