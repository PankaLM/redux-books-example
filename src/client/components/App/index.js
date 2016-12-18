import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import React from 'react'
import { Link } from 'react-router';
import * as actionCreators from '../../actions/actionCreators'

class Main extends React.Component {
  render() {
    return (
      <div>
        <h1>
          <Link to="/">Home</Link>
        </h1>
        {React.cloneElement(this.props.children, { ...this.props })}
      </div>
    )
  }
};

function mapStateToProps(state) {
  return {
    posts: state.posts,
    comments: state.comments
  }
}

function mapDispachToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispachToProps)(Main)
