import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import LinkButton from '../../components/LinkButton/LinkButton';

export default class LoginPage extends Component {
  render() {
    return (
      <div>
        <Header />
        <section>
          <form>
            <label labelfor='Username'>Username: </label>
            <input></input>
            <br />
            <label>Password: </label>
            <input></input>
            <br />
            <LinkButton to='/profile'>
              Log In
            </LinkButton>
          </form>
        </section>
      </div>
    )
  }
}