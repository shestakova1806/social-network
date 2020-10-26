const postsLoaded = (newPosts) => {
  return {
    type: "FETCH_POSTS_SUCCESS",
    payload: newPosts,
  };
};

export { postsLoaded };
