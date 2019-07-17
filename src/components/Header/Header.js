import React, { Component } from 'react';

/*
  TODO:
    Header should take context/path/?, change depending on what page is currently being displayed
    Use location to determine header text?
*/

export default class Header extends Component {

  setHeader() {
    let headText = {}

    switch(this.props.type) {
      case 'user':
        headText = { h1: 'Profile', span: `This string will have some user-determined variable` };
        break;
      case 'quest':
        headText = { h1: `Variable Quest Name`, span: `Maybe add a quest description, display it here?` };
        break;
      default:
        headText = { h1: 'Questify', span: 'Turn your mundante tasks into epic quests!' }
    }

    return (
      <header>
        <h1>{headText.h1}</h1>
        <span>{headText.span}</span>
      </header>
    )
  }

  render() {
    return (
      this.setHeader()
    )
  }
}