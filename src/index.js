import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './index.css';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { promiseMiddleware } from './middleware';

const defaultState = {
  appName: 't-conduit',
  articles: null
};

const reducer = function (state=defaultState, action) {
  switch (action.type) {
    case 'HOME_PAGE_LOADED':
      return { ...state, articles: action.payload.articles}
    default:
      return state;
  }
};

const store = createStore(reducer, applyMiddleware(promiseMiddleware));

ReactDOM.render((
  <Provider store={ store }>
    <App />
  </Provider>
), document.getElementById('root'));
