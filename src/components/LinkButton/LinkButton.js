import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import TokenService from '../../services/token-service';
import IdleService from '../../services/idle-service';

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
    to: '',
  }

  handleLogoutClick = () => {
    TokenService.clearAuthToken();
    TokenService.clearCallbackBeforeExpiry();
    IdleService.unRegisterIdleResets();
  }

  render() {
    return (
      <button 
        onClick={() => {
          this.handleLogoutClick()
          this.props.history.push(this.props.to)
        }}
      >
        {this.props.children}
      </button>
    )
  }
}

export default withRouter(LinkButton);

export { LogoutButton }