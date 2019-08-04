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
  };

  updateComplete = (id) => {
    const index = this.state.taskList.findIndex(task => task.id === id)
    const newList = this.state.taskList

    newList[index].completed = !newList[index].completed

    this.setState({
      taskList: newList
    })
  };

  removeTask = (id) => {
    const newList = this.state.taskList.filter(task => task.id !== id);
    this.setState({
      taskList: newList,
    });
  }

  render() {
    const value = {
      taskList: this.state.taskList,
      error: this.state.error,
      setTaskList: this.setTaskList,
      updateComplete: this.updateComplete,
      removeTask: this.removeTask,
    }
    return (
      <TaskListContext.Provider value={value}>
        {this.props.children}
      </TaskListContext.Provider>
    )
  }
}