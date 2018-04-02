import React, { Component } from "react";

class PostFooter extends Component {
  state = {
    dogCaption: true,
    comments: this.props.post.comments,
    commentValue: ""
  };

  like = () => {
    this.props.like();
  };

  toggleCaption = () => {
    this.setState({
      dogCaption: !this.state.dogCaption
    });
  };

  updateCommentBox = event => {
    let newCommentValue = event.target.value;
    this.setState({
      commentValue: newCommentValue
    });
  };

  addComment = event => {
    event.preventDefault();
    let newComment = {
      commentID: this.state.commentValue,
      commenter: "Guest",
      comment: this.state.commentValue
    };
    let newComments = [...this.state.comments, newComment];
    this.setState({
      comments: newComments,
      commentValue: ""
    });
  };

  render() {
    return (
      <div style={styles.postFooter}>
        <div style={styles.row}>
          {this.props.liked ? (
            <img
              style={styles.likeIcon}
              onClick={() => {
                this.like();
              }}
              src={require("../icons/pawprint-red.png")}
              alt="liked icon"
            />
          ) : (
            <img
              style={styles.likeIcon}
              onClick={() => {
                this.like();
              }}
              src={require("../icons/pawprint-white.png")}
              alt="not liked icon"
            />
          )}
        </div>
        <div style={styles.likes}>
          {this.props.likes + (this.props.likes === 1 ? " like" : " likes")}
        </div>
        <div style={styles.row}>
          <div style={styles.commentRow}>
            <span style={styles.user}>{this.props.post.poster}</span>
            <span>
              {this.state.dogCaption
                ? this.props.post.dogCaption
                : this.props.post.postCaption}
            </span>
            <div
              style={styles.captionToggle}
              onClick={() => {
                this.toggleCaption();
              }}
            >
              {this.state.dogCaption ? "Show Translation" : "Show Original"}
            </div>
          </div>
          {this.state.comments.map(comment => {
            return (
              <div key={comment.commentID} style={styles.commentRow}>
                <span style={styles.user}>{comment.commenter}</span>
                <span>{comment.comment}</span>
              </div>
            );
          })}
        </div>
        <div style={styles.border} />
        <form
          style={styles.commentBoxContainer}
          onSubmit={event => {
            this.addComment(event);
          }}
        >
          <input
            style={styles.commentBox}
            name="commentBox"
            placeholder="Add a comment..."
            autoComplete="off"
            value={this.state.commentValue}
            onChange={event => {
              this.updateCommentBox(event);
            }}
          />
        </form>
      </div>
    );
  }
}

export default PostFooter;

const bold = "600";
const styles = {
  postFooter: {
    width: "100%",
    fontSize: "14px"
  },
  row: {
    width: "95%",
    marginLeft: "auto",
    marginRight: "auto"
  },
  likes: {
    fontWeight: bold,
    width: "95%",
    margin: "5px auto"
  },
  likeIcon: {
    height: "30px",
    width: "30px"
  },
  user: {
    fontWeight: bold,
    marginRight: "10px"
  },
  captionToggle: {
    fontSize: "12px",
    color: "grey",
    cursor: "pointer"
  },
  commentRow: {
    marginBottom: "7px"
  },
  border: {
    height: "1px",
    width: "95%",
    marginLeft: "auto",
    marginRight: "auto",
    borderBottom: "1px solid #dbdbdb",
    marginTop: "10px"
  },
  commentBoxContainer: {
    width: "95%",
    border: "none",
    padding: "0",
    height: "50px",
    marginLeft: "auto",
    marginRight: "auto"
  },
  commentBox: {
    width: "100%",
    height: "100%",
    padding: "0",
    border: "none",
    fontSize: "14px",
    outline: "none"
  }
};
