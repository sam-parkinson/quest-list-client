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
    // send PATCH request for task to API HERE
    // upon 204, taskListContext executes this.context.updateComplete with task's ID
    this.context.updateComplete(task.id)
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
          <button>Delete</button>
        </span>
      </li>
    )
  }
}