import React from 'react'
import Book from '../Book'

const BookList = React.createClass({
  render() {
    return (
      <div className="photo-grid">
        {this.props.posts.map((post, i) => {
          return (
            <Book {...this.props} key={i} index={i} post={post} />
          )
        })}
      </div>
    )
  }
})

export default BookList
