import React, { Component } from 'react';
import TaskListContext from '../../contexts/TaskListContext';
import './TaskListItem.css';

export default class TaskListItem extends Component {
  static contextType = TaskListContext;

  updateComplete = task => {
    task.completed = !task.completed;
    console.log(task.completed);
  }

  render() {
    const { task } = this.props;
    return (
      <li>
        <h2>
          {task.taskName}
        </h2>
        <p>{task.taskDesc}</p>
        {task.completed &&
        <p>Completed! (fancier indicator to come later)</p>
        }
        <span>
          <button
            onClick={() => {this.updateComplete(task)}}
          >
            Complete
          </button>
          <button>Delete</button>
        </span>
      </li>
    )
  }
}