import React, { Component } from 'react';

const TaskListContext = React.createContext({
  taskList: [],
  allTasks: [],
  error: null,
  setTaskList: () => {},
  updateComplete: () => {},
  addTask: () => {},
  deleteTask: () => {},
});
export default TaskListContext;

export class TaskListProvider extends Component {
  state = {
    taskList: [],
    error: null,
  };

  setTaskList = taskList => {
    this.setState({ taskList })
  };

  setAllTasks = allTasks => {
    this.setState({ allTasks })
  }

  render() {
    const value = {
      taskList: this.state.taskList,
      error: this.state.error,
      setTaskList: this.setTaskList,
    }
    return (
      <TaskListContext.Provider value={value}>
        {this.props.children}
      </TaskListContext.Provider>
    )
  }
}