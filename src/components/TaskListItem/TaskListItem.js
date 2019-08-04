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

  postComplete = (task) => {
    QuestsApiService.updateTask(task.id, {completed: !this.props.task.completed,})
    .then(res => 
      this.context.updateComplete(task.id)
    )
  };

  deleteTask = (id) => {
    QuestsApiService.deleteTask(id)
    .then(res =>
      this.context.removeTask(id)
    )
  }

  render() {
    const task = this.props.task;
    return (
      <li> 
        <h2>
          {task.task_name}
        </h2>
        <p>{task.task_desc}</p>
        {task.completed &&
        <p>Completed! (fancier indicator to come later)</p>
        }
        <span>
          <button
            onClick={() => {this.postComplete(task)}}
          >
            Complete
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