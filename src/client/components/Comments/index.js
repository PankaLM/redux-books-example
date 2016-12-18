import React, {PropTypes} from 'react'

export default class Comments  extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderComment = this.renderComment.bind(this);
  }

  renderComment(comment, index) {
    return (
      <div className="comment" key={index}>
        <p>
          <strong>{comment.user}</strong>
          {comment.text}
        </p>
      </div>
    )
  }

  handleSubmit(e) {
    e.preventDefault()

    const { id } = this.props.params
    const author = this.refs.author.value
    const comment = this.refs.comment.value

    this.props.addComment(id, author, comment)
    this.refs.commentForm.reset()
  }

  render() {
    return (
      <div className="comments">
        {this.props.comments.map(this.renderComment)}
        <form
          ref="commentForm"
          className="comment-form"
          onSubmit={this.handleSubmit}>
          <input type="text" ref="author" placeholder="author"/>
          <input type="text" ref="comment" placeholder="comment"/>
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
};

Comments.propTypes = {
  params: PropTypes.object.isRequired,
  addComment: PropTypes.func.isRequired
};
