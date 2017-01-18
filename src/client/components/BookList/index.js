import React, {PropTypes} from 'react'
import Book from '../Book'

const BookList = (props) => {
  return (
    <div className="books-list">
      {props.posts.map((post, i) => {
        return (
          <Book {...props} key={i} index={i} post={post}/>
        )
      })}
    </div>
  );
};

export default BookList;
