import React, { Component } from 'react';

const UserContext = React.createContext({
  loggedIn: false,
  logInTrue: () => {},
  logInFalse: () => {},
});

export default UserContext;

export class UserProvider extends Component {
  state = {
    loggedIn: false,
  };

  logInTrue = () => {
    this.setState({
      loggedIn: true,
    })
  }

  logInFalse = () => {
    this.setState({
      loggedIn: false,
    })
  }

  render() {
    const value = {
      loggedIn: this.state.loggedIn,
      logInTrue: this.logInTrue,
      logInFalse: this.logInFalse
    }
    return (
      <UserContext.Provider value={value}>
        {this.props.children}
      </UserContext.Provider>
    )
  }
}