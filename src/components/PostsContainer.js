import React from "react";
import Post from "./Post";

const PostsContainer = props => {
  return (
    <div style={styles.postsContainer}>
      {props.posts.map(post => {
        return <Post key={post.postID} post={post} />;
      })}
    </div>
  );
};

export default PostsContainer;

const styles = {
  postsContainer: {
    backgroundColor: "#f8f8f8",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingBottom: "50px"
  }
};
