import { createStore, compose, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducer from '../store/reducers';

const enhancer = compose(
  applyMiddleware(thunkMiddleware)
);

const store = createStore(reducer(),{}, enhancer);

export default store