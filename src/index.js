import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import {
  applyMiddleware,
  combineReducers,
  compose,
  createStore,
} from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import App from './App';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const loggerMiddleware = createLogger({ collapsed: true });

const store = createStore(
  composeEnhancers(
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware,
    ),
  ),
);


render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

