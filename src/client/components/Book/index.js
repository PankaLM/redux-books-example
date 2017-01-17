import React, {PropTypes} from 'react'
import { Link } from 'react-router'

const Book = ({ post, comments, incrementLikes, incrementLikesAsync, index }) => {
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
        <button onClick={incrementLikesAsync.bind(null, index)} className="likec">
            &hearts; {post.likes} async
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
  incrementLikes: PropTypes.func.isRequired,
  incrementLikesAsync: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired
};

export default Book;
