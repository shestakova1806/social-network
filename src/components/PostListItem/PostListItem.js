import React from "react";
import Like from "../../icons/Like.svg";

import "./PostListItem.css";

export const PostListItem = ({ post }) => {
  const { author, postText, avatar } = post;
  return (
    <div className="postListItem">
      <div>
        <img src={avatar} alt="avatar" className="avatar" />
      </div>
      <div className="postContent">
        <div className="author">{author}</div>
        <div className="postText">{postText}</div>
        <button className="likeButton">
          <img src={Like} alt="Like" className="like" />
          <div className="counter">0</div>
        </button>
      </div>
    </div>
  );
};
