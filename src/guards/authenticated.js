import React, { Component } from 'react';


export default function authenticated(PureComponent) {
  class Authenticated extends Component {
    render() {
      return <PureComponent {...this.props} />;
    }
  }

  return Authenticated;
}
