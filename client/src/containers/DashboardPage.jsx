import React from 'react';
import Auth from '../modules/Auth';
import Dashboard from '../components/DashboardPage.jsx';
import axios from 'axios';


class DashboardPage extends React.Component {

  /**
   * Class constructor.
   */
  constructor(props) {
    super(props);

    this.state = {
      secretData: ''
    };
  }

  /**
   * This method will be executed after initial rendering.
   */
  componentDidMount() {
    const xhr = new XMLHttpRequest();
    xhr.open('get', 'http://invoice-api.cse.party/api/v1/user/profile');
    xhr.setRequestHeader('Content-type', 'application/json');
    // set the authorization HTTP header
    xhr.setRequestHeader('Authorization', `bearer ${Auth.getToken()}`);
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
      if (xhr.status === 200) {
        this.setState({
          secretData: xhr.response.message
        });
      }
    });
    xhr.send();

    // Axios request
  //   axios.get('http://invoice-api.cse.party/api/v1/user/profile', {
  //     headers: { 
  //       Authorization: 'Bearer ' + Auth.getToken()
  //     }
  //   })
  //   .then(function (response) {
  //     console.log(response);
      
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   });
  }

  /**
   * Render the component.
   */
  render() {
    return (<Dashboard secretData={this.state.secretData} />);
  }

}

export default DashboardPage;