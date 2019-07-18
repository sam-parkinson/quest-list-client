import React, { Component } from 'react';

const UserContext = React.createContext({
  username: '',
  loggedIn: false,
  handleLogIn: () => {},
  handleLogOut: () => {},
});

export default UserContext;

export class UserProvider extends Component {
  state = {
    username: '',
    loggedIn: false,
  };

  handleLogIn = username => {
    this.setState({
      username: username,
      loggedIn: true,
    })
  }

  /* 
  setLoggedOut = () => {
    whatever this function ends up being
  }
  */

  render() {
    const value = {
      username: this.state.username,
      loggedIn: this.state.loggedIn,
      handleLogIn: this.handleLogIn,
    }
    return (
      <UserContext.Provider value={value}>
        {this.props.children}
      </UserContext.Provider>
    )
  }
}