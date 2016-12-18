import React from 'react'
import { Link } from 'react-router'

const Book = React.createClass({
  render() {
    const { post, index, comments } = this.props;

    return (
      <div>
        <Link to={`/view/${post.code}`}>
          <h2>{post.title}</h2>
          <h2>by {post.author}</h2>
        </Link>

        <div className="control-buttons">
          <Link to={`/view/${post.code}`} className="button">
            <span className="comment-count">
              <span> comments: {comments[post.code] ? comments[post.code].length : 0}</span>
            </span>
          </Link>
        </div>
      </div>
    )
  }
})

export default Book
