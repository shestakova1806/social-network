import React from "react";

import "./postListItem.css";

export const PostListItem = ({ post }) => {
  const { author, postText, postImage } = post;
  return (
    <div className="postListItem">
      <div>{author}</div>
      <div>{postText}</div>
      <div>{postImage}</div>
      <button>Like</button>
      <button>Share</button>
    </div>
  );
};
