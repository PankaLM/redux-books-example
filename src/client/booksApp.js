/* eslint-disable no-unused-vars */
import React from 'react'
import { render } from 'react-dom'
import css from './styles/style.styl'
import App from './components/App'
import Single from './components/Single'
import BookList from './components/BookList'
import { Router, Route, IndexRoute } from 'react-router'
import { Provider } from 'react-redux'
import { browserHistory } from 'react-router'
import store from './store'

const router = (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={BookList} />
        <Route path="view/:id" component={Single} />
      </Route>
    </Router>
  </Provider>
)

render(router, document.getElementById('root'))
