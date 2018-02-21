import React from 'react';
import { Link, IndexLink } from 'react-router-dom';
import PropTypes from 'prop-types';


const Base = () => (
  <div>
    <div className="top-bar">
      <div className="top-bar-left">
        <Link to="/">React App</Link>
      </div>

      <div className="top-bar-right">
        <Link to="/login">Log in</Link>
        <Link to="/signup">Sign up</Link>
      </div>

    </div>


  </div>
);


export default Base;