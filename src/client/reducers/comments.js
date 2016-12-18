function postComments(state = [], action) {
  if (action.type === 'ADD_COMMENT') {
    return [ ...state, {
      user: action.author,
      text: action.comment
    }]
  }

  return state
}

export default function comments(state = [], action) {
  if (action.type !== undefined) {
    return {
      ...state,
      [action.postId]: postComments(state[action.postId], action)
    }
  }

  return state
}
