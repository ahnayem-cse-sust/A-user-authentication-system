import React, { PropTypes } from 'react';
import SignUpForm from '../components/SignUpForm.jsx';
import axios from 'axios';
import Auth from '../modules/Auth';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import validator from 'validator';


class SignUpPage extends React.Component {

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
        password: '',
        password_confirmation: ''
      }
    };

    this.processForm = this.processForm.bind(this);
    this.changeUser = this.changeUser.bind(this);
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
   * Process the form.
   *
   * @param {object} event - the JavaScript event object
   */
  processForm(event) {
    // prevent default action. in this case, action is the form submission event
    event.preventDefault();

    if(this.checkValidity()){
      var that = this;

      // create an Axios request
      axios.post('http://invoice-api.cse.party/api/v1/register', {
        email: this.state.user.email,
        password: this.state.user.password,
        password_confirmation: this.state.user.password_confirmation
      })
      .then(function (response) {
        console.log(response);
          // make a redirect
          that.props.history.push('/login');
      })
      .catch(function (error) {
        console.log(error);
      });
    }
    
  }

  checkValidity(){
    var flag = true;
    var errors= {
      email: '',
      password: '',
      password_confirmation: ''
    };

    if(this.state.user.email === '' || !validator.isEmail(this.state.user.email)){
      flag = false;
      errors.email = 'Please input a valid email';
    }
    if(this.state.user.password.trim().length < 8 || this.state.user.password.trim().length > 16){
      flag = false;
      errors.password = 'Password must have 8 to 16 carecter.';
      errors.password_confirmation = 'Password must have 8 to 16 carecter.';
    }
    if(this.state.user.password_confirmation !== this.state.user.password){
      flag = false;
      errors.password_confirmation = 'Password confirmation should me same as password';
    }

    this.setState({
      errors
    });
    return flag;
  }

  /**
   * Render the component.
   */
  render() {
    return (
      <SignUpForm
        onSubmit={this.processForm}
        onChange={this.changeUser}
        errors={this.state.errors}
        user={this.state.user}
      />
    );
  }

}

export default SignUpPage;