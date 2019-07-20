import React, { Component } from 'react';
import shortid from 'shortid';
import TaskListContext from '../../contexts/TaskListContext';
import QuestListContext from '../../contexts/QuestListContext';
import './Forms.css'

class AddTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskName: '',
      taskDesc: '',
    }
  }

  static contextType = TaskListContext;

  postTask(task) {
    /*
    fetch('to be wired up to server', {
      method: 'POST',
      body: JSON.stringify(task)
    })
     
      TODO: add posting to server functionality
    */
   console.log(task)
  }

  handleNameChange(taskName) {
    this.setState({taskName});
  }

  handleDescChange(taskDesc) {
    this.setState({taskDesc});
  }

  makeTask = () => {
    const newTask = {
      taskName: this.state.taskName,
      taskDesc: this.state.taskDesc,
      questId: this.props.questId,
      id: shortid.generate()
    }

    return newTask;
  }

  handleSubmit(e) {
    e.preventDefault();
    this.postTask(this.makeTask())
  }

  render() {
    return (
      <form onSubmit={e => this.handleSubmit(e)}>
        <h2>Add Task</h2>
        <p>
          <label html="taskName">Task Name: </label>
          <input type="text" id="taskName" onChange={(e) => this.handleNameChange(e.target.value)} required />
        </p>
        <p>
          <label htmlFor="taskDesc">Task Description: </label>
          <textarea type="text" id="taskDesc" onChange={(e) => this.handleDescChange(e.target.value)} required />
        </p>
        <button type="submit">Submit</button>
      </form>
    )
  }
}

class AddQuest extends Component {
  constructor(props) {
    super(props)
    this.state = {
      questName: '',
      questDesc: '',
    }
  }

  static contextType = QuestListContext;

  postQuest(quest) {
    console.log(quest)
    // wire up to post to server
  }

  handleNameChange(questName) {
    this.setState({questName});
  }

  handleDescChange(questDesc) {
    this.setState({questDesc});
  }

  makeQuest = () => {

  }

  handleSubmit(e) {
    e.preventDefault();
    this.postQuest(this.makeQuest())
  }

  render() {
    return (
      <form onSubmit={e => this.handleSubmit(e)}>
        <h2>Start a new quest</h2>
        <p>
          <label html="questName">Quest Name: </label>
          <input type="text" id="questName" onChange={(e) => this.handleNameChange(e.target.value)} required />
        </p>
        <p>
          <label htmlFor="questDesc">Quest Description: </label>
          <textarea type="text" id="questDesc" onChange={(e) => this.handleDescChange(e.target.value)} required />
        </p>
        <button type='submit'>
          Begin quest!
        </button>
      </form>
    )
  }
}

export { AddTask, AddQuest }