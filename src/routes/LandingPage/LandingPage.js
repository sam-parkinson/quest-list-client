import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import LinkButton from '../../components/LinkButton/LinkButton';
import './LandingPage.css';

export default class LandingPage extends Component {
  render () {
    return (
      <div>
        <Header />
        <section>
          <h2>What is Questify?</h2>
          <p className='desc_text'>
            Capture the satisfaction of completing missions and quests in a video game, 
            while getting more things done in your everyday life!
            <br />
            Do you have something you've been meaning to get done? Turn it into a quest!
            Then, break it down into smaller tasks. Once you've got your quest assigned, get to work!
            <br />
            As you finish tasks, make sure to mark them down as such so you can watch as 
            another chapter in your personal epic inches closer to completion!
            <br />
            This app is still in development, expect it to become much more feature-rich 
            over time.
          </p>
        </section>
        <section className='usage_buttons'>
          <LinkButton to='/login'>Log in</LinkButton>
          <LinkButton to='/register'>Register</LinkButton>
        </section>       
      </div>
    )
  }
}