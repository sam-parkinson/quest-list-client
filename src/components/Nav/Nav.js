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
        <LinkButton to='/'>Home</LinkButton>
        <LinkButton to='/profile'>Profile</LinkButton>
      </nav>
    )
  }
}

export default Nav;