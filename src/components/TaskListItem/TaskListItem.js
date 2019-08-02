import React, { Component } from 'react';
import TaskListContext from '../../contexts/TaskListContext';
import './TaskListItem.css';

export default class TaskListItem extends Component {
  static contextType = TaskListContext;

  static defaultProps = {
    taskId: null,
  }

  componentWillMount() {
    const task = this.context.taskList.filter(task => task.id === this.props.taskId);
    this.setState({
      task: task[0],
    });
  }

  updateComplete = task => {
    this.setState({
      task: {
        ...task,
        completed: !task.completed
      }
    })
  }

  render() {
    const task = this.state.task;
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