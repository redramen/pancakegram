import React from 'react';
import PostFooter from './PostFooter';

const Post = (props) => {
  return (
    <div style={styles.post}>
      <div style={styles.postHeader}>{props.post.poster}</div>
      <div style={styles.pictureContainer}>
        <img
          style={styles.picture}
          src={require("../" + props.post.picture)}
          alt={props.post.caption}
        />
      </div>
      <PostFooter post={props.post}/>
    </div>
  );
};

export default Post;

const styles = {
  post: {
    backgroundColor: 'white',
    border: '1px solid #dbdbdb',
    width: '600px',
    marginTop: '50px'
  },
  postHeader: {
    width: '100%',
    height: '50px',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginLeft: '20px',
    fontWeight: '600'
  },
  pictureContainer: {
    width: '100%',
    objectFit: 'contain'
  },
  picture: {
    width: '100%',
  },
};