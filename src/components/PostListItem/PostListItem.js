import React from "react";

import "./PostListItem.css";

export const PostListItem = ({ post }) => {
  const { author, postText } = post;
  return (
    <div className="postListItem">
      <div>{author}</div>
      <div>{postText}</div>
      <button>Like</button>
    </div>
  );
};
