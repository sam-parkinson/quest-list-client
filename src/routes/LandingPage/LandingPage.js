import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import LinkButton from '../../components/LinkButton/LinkButton';

/*
  TODO:
    Replace HTML with components
    Header component should have text that changes depending on the context
    Have actual text describing what the app does instead of Lorem Ipsum in bottom section
  
  Long-term TODO:
    Replace fake login button with login form and real login button
    Replace Login or Register section with component that changes if user is logged in to a 'View Profile' or 'Logout' set of buttons
*/

export default class LandingPage extends Component {
  render () {
    return (
      <div>
        <Header />
        <section>
          <h2>Log in or register</h2>
          <LinkButton to='/login' buttonText='Log In' />
          <LinkButton to='/profile' buttonText='Register' />
        </section>
        <section>
          <h2>About</h2>
          <p>
            This is a bunch of text describing what Questify is, and how it works.
          </p>
        </section>
      </div>
    )
  }
}