import React, { Component } from 'react';

class PostFooter extends Component {
  state = {
    likes: this.props.post.likes,
    comments: this.props.post.comments,
    commentValue: ''
  }

  like = () => {
    this.setState({
      likes: this.state.likes + 1
    });
  }

  updateCommentBox = (event) => {
    let newCommentValue = event.target.value;
    this.setState({
      commentValue: newCommentValue
    });
  }

  addComment = (event) => {
    event.preventDefault();
    let newComment = {
      commentID: this.state.commentValue,
      commenter: 'Guest',
      comment: this.state.commentValue
    }
    let newComments = [...this.state.comments, newComment];
    this.setState({
      comments: newComments,
      commentValue: ''
    });
  }

  render () {
    return (
      <div style={styles.postFooter}>
        <div style={styles.row}>
          <button onClick={ () => {this.like()} }>like</button>
        </div>
        <div style={styles.likes}>{this.state.likes + (this.state.likes === 1 ? " like" : " likes")}</div>
        <div style={styles.row}>
          <div style={styles.commentRow}>
            <span style={styles.user}>{this.props.post.poster}</span>
            <span>{this.props.post.postCaption}</span>
          </div>
          {this.state.comments.map( (comment) => {
            return (
              <div key={comment.commentID} style={styles.commentRow}>
                <span style={styles.user}>{comment.commenter}</span>
                <span>{comment.comment}</span>
              </div>
            );
          })}
        </div>
        <div style={styles.border}></div>
        <form style={styles.commentBoxContainer} onSubmit={ (event) => {this.addComment(event)}}>
          <input
            style={styles.commentBox}
            name="commentBox"
            placeholder="Add a comment..."
            autoComplete="off"
            value={this.state.commentValue}
            onChange={ (event) => {this.updateCommentBox(event)} }
          />
        </form>
      </div>
    );
  }
}

export default PostFooter;

const bold = '600';
const styles = {
  postFooter: {
    width: '100%',
    fontSize: '15px',
  },
  row: {
    width: '95%',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  likes: {
    fontWeight: bold,
    width: '95%',
    margin: '5px auto'
  },
  user: {
    fontWeight: bold,
    marginRight: '10px'
  },
  commentRow: {
    marginBottom: '5px'
  },
  border: {
    height: '1px',
    width: '95%',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderBottom: '1px solid #dbdbdb',
    marginTop: '10px'
  },
  commentBoxContainer: {
    width: '95%',
    border: 'none',
    padding: '0',
    height: '50px',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  commentBox: {
    width: '100%',
    height: '100%',
    padding: '0',
    border: 'none',
    fontSize: '14px',
    outline: 'none'
  }
}