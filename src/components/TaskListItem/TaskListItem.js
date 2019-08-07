import React, { Component } from 'react';
import TaskListContext from '../../contexts/TaskListContext';
import QuestsApiService from '../../services/quests-api-service';
import './TaskListItem.css';

export default class TaskListItem extends Component {
  static contextType = TaskListContext;

  static defaultProps = {
    taskId: null,
    task: {},
  }

  postComplete = (id) => {
    QuestsApiService.updateTask(
      id, 
      {completed: 
        this.props.task.completed === false 
          ? true 
          : false,
      }
    )
    .then(res => 
      this.context.updateComplete(id)
    )
  };

  deleteTask = (id) => {
    QuestsApiService.deleteTask(id)
    .then(res =>
      this.context.removeTask(id)
    )
  };

  completeButtonText = (bool) => {
    return bool === true
      ? 'Reopen'
      : 'Complete'
  };

  render() {
    const task = this.props.task;
    return (
      <li> 
        <h2>
          {task.task_name}
        </h2>
        <p>{task.task_desc}</p>
        {task.completed &&
        <p>Completed!</p>
        }
        <span>
          <button
            onClick={() => {this.postComplete(task.id)}}
          >
            {this.completeButtonText(task.completed)}
          </button>
          <button
            onClick={() => this.deleteTask(task.id)}
          >
            Delete
          </button>
        </span>
      </li>
    )
  }
}