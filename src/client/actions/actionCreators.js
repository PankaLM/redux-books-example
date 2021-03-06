export function addComment(postId, author, comment) {
  return {
    type: 'ADD_COMMENT',
    postId,
    author,
    comment
  }
}

export function incrementLikes(index) {
  return {
    type: 'INCREMENT_LIKES',
    index
  }
}

export function incrementLikesAsync(index) {
  return dispatch => {
    setTimeout(() => {
      dispatch(incrementLikes(index));
    }, 2000);
  };
}
