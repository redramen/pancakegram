import React, { Component } from 'react';
import Navbar from './components/Navbar';
import PostsContainer from './components/PostsContainer';

class App extends Component {
  posts = [
    {
      postID: 'bark bark',
      picture: 'before-and-after.jpg',
      poster: 'Pancake',
      dogCaption: 'bark bark',
      postCaption: 'Before and after!',
      likes: 555,
      liked: false,
      comments: [
        {
          commentID: 'Bark1',
          commenter: 'Doge',
          comment: 'Bark Bark'
        },
        {
          commentID: 'Bark2',
          commenter: 'Doggy',
          comment: 'Woof woof!'
        },
        {
          commentID: 'Bark3',
          commenter: 'Dawg',
          comment: 'Bow wow wow bow!!'
        }
      ]
    },
    {
      postID: 'bark barky bark bark!',
      picture: 'black-panther.jpeg',
      poster: 'Pancake',
      dogCaption: 'bark barky bark bark',
      postCaption: 'Black Panther was awesome!',
      likes: 301,
      liked: false,
      comments: [
        {
          commentID: 'Bark4',
          commenter: 'Dawg',
          comment: 'Bow... Bow wow wowow'
        },
        {
          commentID: 'Bark5',
          commenter: 'Mein',
          comment: 'chau chau!'
        },
        {
          commentID: 'Bark6',
          commenter: 'Taftaf',
          comment: 'Woofy woooooof'
        }
      ]
    },
    {
      postID: 'barkbark!',
      picture: 'daycare.JPG',
      poster: 'Pancake',
      dogCaption: 'barkbark!',
      postCaption: 'Daycare!',
      likes: 642,
      liked: false,
      comments: [
        {
          commentID: 'Bark7',
          commenter: 'Doge',
          comment: 'Barky bark. Barrrrrrrkkkkkkk???'
        },
        {
          commentID: 'Bark8',
          commenter: 'Brittany',
          comment: 'Wow my little boy is so cute!'
        },
        {
          commentID: 'Bark9',
          commenter: 'Pancake',
          comment: 'Baaaaaaark! ❤'
        }
      ]
    },
    {
      postID: 'bark bark bar ba bark, bark bark...',
      picture: 'early-bird.JPG',
      poster: 'Pancake',
      dogCaption: 'bark bark bar ba bark, bark bark...',
      postCaption: 'Early bird gets the worm, but I\'m a dog...',
      likes: 777,
      liked: false,
      comments: [
        {
          commentID: 'Bark10',
          commenter: 'Doggy',
          comment: 'Bow Bow!'
        },
        {
          commentID: 'Bark11',
          commenter: 'Charlie',
          comment: 'Meow meow... Meoooooow...'
        },
        {
          commentID: 'Bark12',
          commenter: 'Chicky',
          comment: 'Peck peck. Cluck peck.'
        }
      ]
    },
    {
      postID: 'bark bark ba bark!',
      picture: 'good-day.JPG',
      poster: 'Pancake',
      dogCaption: 'bark bark ba bark!',
      postCaption: 'Today was a good day!',
      likes: 201,
      liked: false,
      comments: [
        {
          commentID: 'ghau ghau',
          commenter: 'Scooby',
          comment: 'Ruh roh'
        }
      ]
    },
    {
      postID: 'bark bark!',
      picture: 'king-of-relaxation.JPG',
      poster: 'Pancake',
      dogCaption: 'bark bark!',
      postCaption: 'Fresh Cut!',
      likes: 321,
      liked: false,
      comments: [
        {
          commentID: 'ghau ghau',
          commenter: 'Buster',
          comment: 'Woof woof'
        }
      ]
    },
    {
      postID: 'bark',
      picture: 'nap.jpeg',
      poster: 'Pancake',
      dogCaption: 'bark',
      postCaption: 'naptime',
      likes: 472,
      liked: false,
      comments: [
        {
          commentID: 'ghau ghau',
          commenter: 'Baguette',
          comment: 'Arf arf. Hon hon hon.'
        }
      ]
    },
    {
      postID: 'baaaark!',
      picture: 'outdoors.JPG',
      poster: 'Pancake',
      dogCaption: 'baaaark!',
      postCaption: 'Outdoors!',
      likes: 813,
      liked: false,
      comments: [
        {
          commentID: 'ghau ghau',
          commenter: 'Kukur',
          comment: 'Ghao ghao ghao.'
        }
      ]
    },
    {
      postID: 'baaaark bark!',
      picture: 'outdoors2.JPG',
      poster: 'Pancake',
      dogCaption: 'baaaark bark!',
      postCaption: 'Outdoors again!',
      likes: 931,
      liked: false,
      comments: [
        {
          commentID: 'ghau ghau',
          commenter: 'Doggy',
          comment: 'Wooooooooooof!'
        }
      ]
    },
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
