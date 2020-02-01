// @flow weak

import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from '../store/reducers';

const loggerMiddleware = createLogger({
  level: 'info',
  collapsed: true,
});

const enhancer = composeWithDevTools(
  applyMiddleware(thunkMiddleware, loggerMiddleware)
)

const store = createStore(reducer(),{}, enhancer);

export default store
