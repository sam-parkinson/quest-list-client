import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import QuestListContext from '../../contexts/QuestListContext';
import './QuestListItem.css';

export default class QuestListItem extends Component {
  static contextType = QuestListContext

  handleSelectQuest = (id) => {
    this.context.selected = id
  }

  render() {
    const { quest, url } = this.props;
    return (
      <li>
        <h2>
          <Link 
            to={`${url}/${quest.id}`}
            onClick={() => {this.handleSelectQuest(quest.id)}}
          >
            {quest.questName}
          </Link>
        </h2>
        <p>{quest.questDesc}</p>
        <p>Quest Progress Goes Here</p>
      </li>
    )
  }
}