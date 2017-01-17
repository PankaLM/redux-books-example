import React, {PropTypes} from 'react'
import Book from '../Book'

const BookList = ({ posts, comments, incrementLikes, incrementLikesAsync}) => {
  return (
    <div className="books-list">
      {posts.map((post, i) => {
        return (
          <Book incrementLikes={incrementLikes} incrementLikesAsync={incrementLikesAsync} key={i} post={post} index={i} comments={comments}/>
        )
      })}
    </div>
  );
};

export default BookList;
