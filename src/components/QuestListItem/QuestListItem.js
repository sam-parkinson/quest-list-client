import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './QuestListItem.css';

export default class QuestListItem extends Component {
  render() {
    const { quest, url } = this.props;
    return (
      <li>
        <Link to={`${url}/${quest.id}`}>
          {quest.questName}
        </Link>
      </li>
    )
  }
}