import React from 'react';
import ReactDom from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import { browserHistory, Router } from 'react-router';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import routes from './routes.js';

import Base from './components/Base.jsx';
import HomePage from './components/HomePage.jsx';
import LoginPage from './containers/LoginPage.jsx';
import SignUpPage from './containers/SignUpPage.jsx';

// remove tap delay, essential for MaterialUI to work properly
injectTapEventPlugin();

ReactDom.render((
  <MuiThemeProvider muiTheme={getMuiTheme()}>
    {/* <Router history={browserHistory} routes={routes} /> */}
    
      {/* <Base path="/" component={Base}>
        <Route path="homepage" component={ HomePage }/>
        <Route path="login" component={ LoginPage }/>
        <Route path="signup" component={ SignUpPage }/>
      </Route> */}
      <Router>
          <div>
            <Route exact path="/" component={Base} />
            <Route exact path="/" component={HomePage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/signup" component={SignUpPage} />
          </div>
      </Router>
    {/* <HashRouter>
    <Base>
        
    </Base>
  </HashRouter> */}
  </MuiThemeProvider>), document.getElementById('react-app'));