import React from 'react'
import { Link } from 'react-router';

const Main = React.createClass({
  render() {
    return (
      <div class="bg-danger">
        <h1>
          <Link to="/">Home</Link>
        </h1>
        {React.cloneElement(this.props.children, { ...this.props, key: undefined, ref: undefined })}
      </div>
    )
  }
})

export default Main
