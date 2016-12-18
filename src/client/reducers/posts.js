export default function posts(state = [], action) {
  if (action.type === 'INCREMENT_LIKES') {
    const i = action.index

    return [
      ...state.slice(0, i),
      { ...state[i], likes: state[i].likes + 1 },
      ...state.slice(i + 1)
    ]
  } else {
    return state;
  }
}
