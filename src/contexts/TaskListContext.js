import React, { Component } from 'react';

const TaskListContext = React.createContext({
  taskList: [],
  error: null,
  setTaskList: () => {},
  updateComplete: () => {},
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