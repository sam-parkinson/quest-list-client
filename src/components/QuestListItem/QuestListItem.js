import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import QuestListContext from '../../contexts/QuestListContext';
import TaskListContext from '../../contexts/TaskListContext';
import { demoTasks } from '../../contexts/store'
import './QuestListItem.css';

/*
  TODO:
    Implement percentage tracking function
    Maybe figure out some new progress tracker or figure out why the ANT component not working
*/

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
        <Progress questId={quest.id} />
      </li>
    )
  }
}

class Progress extends Component {  
  static defaultProps = {
    tasks: {},
  }

  static contextType = TaskListContext

  /*
    Figure out how to wire this up
  */

  render() {
    return(
      <p>Progress for quest with id {this.props.questId} goes here</p>
    )
  }
}