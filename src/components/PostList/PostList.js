import React, { Component } from "react";
import { connect } from "react-redux";
import { withNetworkService } from "../hoc";
import { postsLoaded } from "../../actions";
import { compose } from "../../utils";
import { PostListItem } from "../PostListItem";

import "./PostList.css";

class PostListItems extends Component {
  componentDidMount() {
    const { networkService } = this.props;
    const data = networkService.getPost();

    this.props.postsLoaded(data);
  }

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

const mapDispatchToProps = {
  postsLoaded,
};

export const PostList = compose(
  withNetworkService(),
  connect(mapStateToProps, mapDispatchToProps)
)(PostListItems);
