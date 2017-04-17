import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';

const defaultState = {
  appName: 't-conduit',
  articles: null
};

const reducer = function (state=defaultState, action) {
  return state;
};

ReactDOM.render((
  <Provider store={ store }>
    <App />
  </Provider>
), document.getElementById('root'));
