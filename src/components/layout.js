import React, { Component } from 'react';
import Menu from './Menu';
import Footer from './footer';
import PropTypes from 'prop-types';

export default class Layout extends Component {
  render() {
    return(
      <div id="wrapper">
          <Menu />
          <div className="bg_dfdfdf absoluteMar">
          </div>
          {this.props.children}
          <Footer />
      </div>);
  }
}
Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
