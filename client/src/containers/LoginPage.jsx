import React, { PropTypes } from 'react';
import LoginForm from '../components/LoginForm.jsx';
import axios from 'axios';
import Auth from '../modules/Auth';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Base from '../components/Base.jsx';


class LoginPage extends React.Component {

  /**
   * Class constructor.
   */
  constructor(props) {
    super(props);

    // set the initial component state
    this.state = {
      errors: {},
      user: {
        email: '',
        password: ''
      }
    };

    this.processForm = this.processForm.bind(this);
    this.changeUser = this.changeUser.bind(this);
  }

  /**
   * Process the form.
   *
   * @param {object} event - the JavaScript event object
   */
  processForm(event) {
    // prevent default action. in this case, action is the form submission event
    event.preventDefault();

    var that = this;

    // Axios request
    axios.post('http://invoice-api.cse.party/api/v1/login', {
      email: this.state.user.email,
      password: this.state.user.password
    })
    .then(function (response) {
      console.log(response);
      Auth.authenticateUser(response.data.data, that.tokenExecuted(Event));
      
    })
    .catch(function (error) {
      const errors = {
        email: 'Credantials are not correct.',
        password: 'Credantials are not correct.'
      }
      that.setState({
        errors
      });
    });

  }

  tokenExecuted(){
      this.props.history.push('/dashboard');    
  }

  /**
   * Change the user object.
   *
   * @param {object} event - the JavaScript event object
   */
  changeUser(event) {
    const field = event.target.name;
    const user = this.state.user;
    user[field] = event.target.value;

    this.setState({
      user
    });
  }

  /**
   * Render the component.
   */
  render() {
    return (
      <LoginForm
        onSubmit={this.processForm}
        onChange={this.changeUser}
        errors={this.state.errors}
        user={this.state.user}
      />
    );
  }

}

export default LoginPage;