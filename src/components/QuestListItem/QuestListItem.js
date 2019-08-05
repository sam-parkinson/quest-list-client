import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import QuestListContext from '../../contexts/QuestListContext';
import TaskListContext from '../../contexts/TaskListContext';
import './QuestListItem.css';

/*
  TODO:
    Implement percentage tracking function
*/

export default class QuestListItem extends Component {
  static contextType = QuestListContext

  handleSelectQuest = (id) => {
    this.context.selected = id
  }

  render() {
    const { quest, url, urlAdd } = this.props;
    return (
      <li>
        <h2>
          <Link 
            to={`${url}/${urlAdd}`}
            onClick={() => {this.handleSelectQuest(quest.id)}}
          >
            {quest.quest_name}
          </Link>
        </h2>
        <p>{quest.quest_desc}</p>
        <Progress 
          completed={quest.completed_tasks}
          total={quest.total_tasks}
        />
      </li>
    )
  }
}

class Progress extends Component {  
  static defaultProps = {
    tasks: {},
    completed: '',
    total: '',
  }

  static contextType = TaskListContext

  render() {
    return(
      <p>Progress: {this.props.completed} tasks completed out of {this.props.total}</p>
    )
  }
}