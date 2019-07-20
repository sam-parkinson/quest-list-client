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
          <LinkButton to='/login'>Log in</LinkButton>
          <LinkButton to='/profile'>Register</LinkButton>
        </section>
        <section>
          <h2>What is Questify?</h2>
          <p>
            Capture the satisfaction of completing missions and quests in a video game, 
            while getting more things done in your everyday life!
            <br />
            Do you have something you've been meaning to get done? Turn it into a quest!
            Then, break it down into smaller tasks. Once you've got your quest assigned, get to work!
            <br />
            As you finish tasks, make sure to mark them down as such so you can watch as 
            another chapter in your personal epic inches closer to completion!
            <br />
            This app is still in what I'll call pre-alpha, expect it to become much more feature-rich 
            over time.
          </p>
        </section>
      </div>
    )
  }
}