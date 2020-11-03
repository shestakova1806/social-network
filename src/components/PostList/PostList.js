import React, { Component } from "react";
import { connect } from "react-redux";

import { PostListItem } from "../PostListItem";

import "./PostList.css";

class PostListItems extends Component {
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

export const PostList = connect(mapStateToProps)(PostListItems);
