import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import UserContext from '../../contexts/UserContext';
import TokenService from '../../services/token-service';
import IdleService from '../../services/idle-service';
import './LinkButton.css';

class LinkButton extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {}
    },
    to: '',
  }

  render() {
    return (
      <button 
        onClick={() => {
          this.props.history.push(this.props.to)
        }}
      >
        {this.props.children}
      </button>
    )
  }
}

class LogoutButton extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {}
    },
  }

  static contextType = UserContext;

  handleLogoutClick = () => {
    TokenService.clearAuthToken();
    TokenService.clearCallbackBeforeExpiry();
    IdleService.unRegisterIdleResets();
    this.context.logInFalse();
  }

  render() {
    return (
      <button 
        onClick={() => {
          this.handleLogoutClick();
          this.props.history.push('/login');
        }}
      >
        {this.props.children}
      </button>
    )
  }
}

export default withRouter(LinkButton);

export { LogoutButton }