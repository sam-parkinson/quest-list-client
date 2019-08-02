import React, { Component } from 'react';
import LinkButton from '../LinkButton/LinkButton';
import TokenService from '../../services/token-service';
import IdleService from '../../services/idle-service';

/*
  TODO:
    Add more nav components
    Switches?
*/

class Nav extends Component {
  handleLogoutClick = () => {
    TokenService.clearAuthToken();
    TokenService.clearCallbackBeforeExpiry();
    IdleService.unRegisterIdleResets();
  }

  renderLogout = () => {
    return (
      <button
        onClick={this.handleLogoutClick}
      >
        Log Out
      </button>
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