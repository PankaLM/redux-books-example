import React, {PropTypes} from 'react'
import { Link } from 'react-router'

const Book = ({ post, comments, incrementLikes, index }) => {
  return (
    <div className="list-book-wrap">
      <Link to={`/view/${post.code}`}>
        <h2>{post.title}</h2>
        <h2>by {post.author}</h2>
      </Link>
      <div className="control-buttons">
        <button onClick={incrementLikes.bind(null, index)} className="likes">
            &hearts; {post.likes}
        </button>
        <Link to={`/view/${post.code}`} className="button">
          <span className="comment-count">
            <span> comments: {comments[post.code] ? comments[post.code].length : 0}</span>
          </span>
        </Link>
      </div>
    </div>
  );
};

Book.propTypes = {
  post: PropTypes.object.isRequired,
  comments: PropTypes.object.isRequired,
  incrementLikes: PropTypes.func.isRequired
};

export default Book;
