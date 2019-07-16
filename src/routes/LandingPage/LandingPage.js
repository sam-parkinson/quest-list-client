import React, { Component } from 'react';
import Header from '../../components/Header/Header';

/*
  TODO:
    Replace HTML with components
    Wire up temporary login/register buttons which just direct to user page for dummy user
    Header component should have text that changes depending on the context
    Have actual text describing what the app does instead of Lorem Ipsum in bottom section
*/

export default class LandingPage extends Component {
  render () {
    return (
      <div>
        <Header />
        <section>
          <h2>Log in or register</h2>
          <button>Log in</button>
          <button>Register</button>
        </section>
        <section>
          <h2>About</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </section>
      </div>
    )
  }
}