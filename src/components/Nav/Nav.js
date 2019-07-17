import React, { Component } from 'react';
import LinkButton from '../LinkButton/LinkButton';

/*
  TODO:
    Add more nav components
    Login/logout button
    Switches?
*/

class Nav extends Component {

  render() {
    return (
      <nav role='navigation'>
        <LinkButton to='/' buttonText='Home' />
        <LinkButton to='/profile' buttonText='Profile' />
      </nav>
    )
  }
}

export default Nav;