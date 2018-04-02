import React, { Component } from "react";
import PostFooter from "./PostFooter";

class Post extends Component {
  state = {
    show: false,
    liked: this.props.post.liked,
    likes: this.props.post.likes
  };

  like = () => {
    if (this.state.liked) {
      this.setState({
        liked: false,
        likes: this.state.likes - 1
      });
    } else {
      this.setState({
        liked: true,
        likes: this.state.likes + 1,
        show: true
      });
      setTimeout(this.hideIcon, 500);
    }
  };

  hideIcon = () => {
    this.setState({
      show: false
    });
  };

  render() {
    return (
      <div style={styles.post}>
        <div style={styles.postHeader}>{this.props.post.poster}</div>
        <div style={styles.pictureContainer}>
          <div style={styles.bigIconContainer} 
            onDoubleClick={() => {
              this.like();
            }}>
            <img
              id="liked-icon-big"
              style={this.state.show ? styles.show : styles.noShow}
              src={require("../icons/pawprint-no-border.png")}
              alt="liked icon big"
            />
          </div>
          <img
            style={styles.picture}
            src={require("../pictures/" + this.props.post.picture)}
            alt={this.props.post.caption}
          />
        </div>
        <PostFooter
          post={this.props.post}
          likes={this.state.likes}
          liked={this.state.liked}
          like={this.like}
        />
      </div>
    );
  }
}

export default Post;

const styles = {
  post: {
    backgroundColor: "white",
    border: "1px solid #dbdbdb",
    width: "600px",
    maxWidth: "95%",
    marginTop: "50px"
  },
  postHeader: {
    width: "100%",
    height: "50px",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingLeft: "20px",
    fontWeight: "600",
    boxSizing: "border-box"
  },
  pictureContainer: {
    width: "100%",
    objectFit: "contain",
    position: "relative"
  },
  picture: {
    width: "100%",
    cursor: 'pointer'
  },
  bigIconContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  show: {
    height: "30%",
    width: "auto",
    display: "block",
    userSelect: "none"
  },
  noShow: {
    display: "none"
  }
};
