import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './index.css';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

const history = createBrowserHistory();

import App from './components/App';
import Home from './components/Home';
import Login from './components/Login';
import store from './store';

const appWithRouter = withRouter(App);

ReactDOM.render((
  <Provider store={ store }>
    <appWithRouter>
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
        </Switch>
      </Router>
    </appWithRouter>
  </Provider>
), document.getElementById('root'));
