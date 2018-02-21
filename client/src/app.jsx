import React from 'react';
import ReactDom from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { browserHistory } from 'react-router-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import routes from './routes.js';

import Base from './components/Base.jsx';
import HomePage from './components/HomePage.jsx';
import LoginPage from './containers/LoginPage.jsx';
import SignUpPage from './containers/SignUpPage.jsx';
import DashboardPage from './containers/DashboardPage.jsx';

import Auth from './modules/Auth';

// remove tap delay, essential for MaterialUI to work properly
injectTapEventPlugin();

function loggedIn() {
  return false;
}

function requireAuth(nextState, replace) {
  console.log('ffffffffffff');
  if (!loggedIn()) {
    replace({
      pathname: '/login'
    })
  }
}

ReactDom.render((
  <MuiThemeProvider muiTheme={getMuiTheme()}>
      <Router history={browserHistory}>
          <div>
            <Route exact path="/" component={Base} />
            <Route exact path="/" component={HomePage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/signup" component={SignUpPage} onEnter={requireAuth} />
          </div>
      </Router>
  </MuiThemeProvider>), document.getElementById('react-app'));