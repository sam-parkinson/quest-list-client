import React, { Component } from 'react';
import LinkButton, { LogoutButton } from '../LinkButton/LinkButton';
import TokenService from '../../services/token-service';

/*
  TODO:
    Add more nav components
    Switches?
*/

class Nav extends Component {
  renderLogout = () => {
    return (
      <LogoutButton to='/'>Log Out</LogoutButton>
    )
  }

  renderDemo = () => {
    return (
      <button>
        Demo
      </button>
    )
  }

  render() {
    return (
      <nav role='navigation'>
        <LinkButton to='/'>Home</LinkButton>
        <LinkButton to='/profile'>Profile</LinkButton>
        {TokenService.hasAuthToken()
          ? this.renderLogout()
          : this.renderDemo()
        }
      </nav>
    )
  }
}

export default Nav;