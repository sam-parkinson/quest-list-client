import React, { Component } from 'react';

/*
  TODO:
    Header should take context/path/?, change depending on what page is currently being displayed
    Use location to determine header text?
*/

export default class Header extends Component {
  render() {
    return (
      <header>
        <h1>Questify</h1>
        <span>Turn your mundane tasks into epic quests!</span>
      </header>
    )
  }
}