/* eslint-disable no-unused-vars */
import React from 'react'
import { render } from 'react-dom'

// import components
import App from './components/App'
import Single from './components/Single'
import BookList from './components/BookList'
// import react router
import { Router, Route, IndexRoute } from 'react-router'

import { Provider } from 'react-redux'
import store, { history } from './store'

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={BookList} />
        <Route path="view/:id" component={Single} />
      </Route>
    </Router>
  </Provider>
)

render(router, document.getElementById('root'))
