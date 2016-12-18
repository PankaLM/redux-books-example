import React from 'react'
import Book from '../Book'
import Comments from '../Comments'

const Single = React.createClass({
  render() {
    const { id } = this.props.params
    const i = this.props.posts.findIndex((post) => post.code === id)
    const post = this.props.posts[i]

    const comments = this.props.comments[id] || []

    return (
      <div className="single-book">
        <Book {...this.props} key={i} index={i} post={post} />
        <Comments {...this.props} comments={comments} />
      </div>
    )
  }
})

export default Single
