import React, { Component } from "react";
import { connect } from "react-redux";

import { PostListItem } from "../PostListItem";

import "./PostList.css";

class PostList extends Component {
  render() {
    const { posts } = this.props;
    return (
      <ul className="postList">
        {posts.map((post) => {
          return (
            <li key={post.id}>
              <PostListItem post={post} />
            </li>
          );
        })}
      </ul>
    );
  }
}

const mapStateToProps = ({ posts }) => {
  return { posts };
};

export default connect(mapStateToProps)(PostList);
