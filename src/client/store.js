import { createStore, applyMiddleware, compose } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import createLogger from 'redux-logger';
import rootReducer from './reducers/index'
import comments from './data/comments'
import posts from './data/posts'

const defaultState = { posts, comments }
const logger = createLogger();

const store = createStore(rootReducer, defaultState, applyMiddleware(logger));

export default store
