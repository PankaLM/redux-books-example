import React from 'react'
import Book from '../Book'
import Comments from '../Comments'

const Single = (props) => {
  const { id } = props.params;
  const i = props.posts.findIndex((post) => post.code === id);
  const post = props.posts[i];

  const comments = props.comments[id] || [];

  return (
    <div className="single-book">
      <Book {...props} key={i} index={i} post={post}/>
      <Comments {...props} comments={comments} />
    </div>
  )
}


export default Single;
