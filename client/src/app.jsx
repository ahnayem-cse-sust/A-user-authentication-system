import React from 'react';
import ReactDom from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { browserHistory } from 'react-router-dom';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import routes from './routes.js';

import Base from './components/Base.jsx';
import HomePage from './components/HomePage.jsx';
import LoginPage from './containers/LoginPage.jsx';
import SignUpPage from './containers/SignUpPage.jsx';
import Dashboard from './containers/DashboardPage.jsx';

import Auth from './modules/Auth';
// import Dashboard from './components/DashboardPage.js';

// remove tap delay, essential for MaterialUI to work properly
injectTapEventPlugin();


ReactDom.render((
  <MuiThemeProvider muiTheme={getMuiTheme()}>
      <Router history={browserHistory}>
          <div>
            <Route exact path="/" component={Base} />
            <Route exact path="/" component={HomePage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/signup" component={SignUpPage} />
            <Route path="/dashboard" 
            render={() => (
              Auth.deauthenticateUser() ? (
                <Redirect to="/login"/>
              ) : (
                <Dashboard />
              )
            )}
            />
            {/* <Route path="/signup" 
            render={() => (
              Auth.isUserAuthenticated() ? (
                <Redirect to="/login"/>
              ) : (
                <Redirect to="/login"/>
              )
            )}
            /> */}
            <Route path="/logout" 
            render={() => (
              Auth.deauthenticateUser() ? (
                <Redirect to="/login"/>
              ) : (
                <Redirect to="/login"/>
              )
            )}
            />
          </div>
      </Router>
  </MuiThemeProvider>), document.getElementById('react-app'));