import { applyMiddleware, createStore } from 'redux';
import { promiseMiddleware } from './middleware';

const defaultState = {
  appName: 't-conduit',
  arcitles: null
};

const reducer = function (state=defaultState, action) {
  switch (action.type) {
    case 'HOME_PAGE_LOADED':
      if (action.error) return state;
      return {...state, articles: action.payload.articles};
      break;
    default:
      return state;
  }
};

const middleware = applyMiddleware(promiseMiddleware);

const store = createStore(reducer, middleware);

export default store;
