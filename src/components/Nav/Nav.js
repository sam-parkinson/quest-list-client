import React, { Component } from 'react';
import LinkButton, { LogoutButton } from '../LinkButton/LinkButton';
import UserContext from '../../contexts/UserContext';
import './Nav.css';

class Nav extends Component {
  static contextType = UserContext

  renderLoggedIn = () => {
    return (
      <nav role='navigation'>
        <LinkButton to='/profile'>View Quests</LinkButton>
        <LogoutButton>Log Out</LogoutButton>
      </nav>
    )
  }

  renderNoToken = () => {
    return (
      <nav role='navigation'>
        <LinkButton to='/'>Home</LinkButton>
        <LinkButton to='/demo'>Demo</LinkButton>
      </nav>
    )
  }

  render() {
    return (
      this.context.loggedIn
        ? this.renderLoggedIn()
        : this.renderNoToken()        
    )
  }
}

export default Nav;