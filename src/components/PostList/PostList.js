import React, { Component } from "react";

import { PostListItem } from "../PostListItem";

import "./postList.css";

export class PostList extends Component {
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
