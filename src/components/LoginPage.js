import React, { Component } from 'react';
import PropTypes from 'prop-types';


class LoginPage extends Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.status === 'logged') {
      nextProps.onAuthenticationSuccess();
    }
    if (nextProps.status === 'invalid') {
      nextProps.onAuthenticationFailure(nextProps.redirectUrl);
    }
  }


  render() {
    return (
      <div>
        <div className="fullpage">
        </div>
      </div>
    );
  }
}

LoginPage.propTypes = {
  onAuthenticationSuccess: PropTypes.func,
  onAuthenticationFailure: PropTypes.func,
  redirectUrl: PropTypes.string,
  status: PropTypes.string
};

export default LoginPage;
