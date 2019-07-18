import React, { Component } from 'react';
import UserContext from '../../contexts/UserContext';
import QuestListContext from '../../contexts/QuestListContext';

/*
  TODO:
    Header should take context/path/?, change depending on what page is currently being displayed
    Use location to determine header text?
    rewrite logic to get questId from something other than passed in context?
*/

export default class Header extends Component {
  static defaultProps = {
    questId: null,
  }

  static contextType = QuestListContext

  getQuestName = id => {
    const name = this.context.questList[id].questName
    console.log(name)
    return name
  }

  setHeader() {
    let headText = {}

    switch(this.props.type) {
      case 'user':
        headText = { h1: 'Profile', span: `This string will have some user-determined variable` };
        break;
      case 'quest':
        headText = { h1: this.getQuestName(this.props.questId), span: `Maybe add a quest description, display it here?` };
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