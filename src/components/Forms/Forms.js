import React, { Component } from 'react';
import shortid from 'shortid';
import AuthApiService from '../../services/auth-api-service';
import QuestsApiService from '../../services/quests-api-service';
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
      quest_name: '',
      quest_desc: '',
    }
  }

  static contextType = QuestListContext;

  state = { error: null };

  handleNameChange(quest_name) {
    this.setState({quest_name});
  }

  handleDescChange(quest_desc) {
    this.setState({quest_desc});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({ error: null });
    const { quest_name, quest_desc } = e.target;
    
    QuestsApiService.postQuest({
      quest_name: quest_name.value,
      quest_desc: quest_desc.value,
    })
      .then(res => {
        quest_name.value = '';
        quest_desc.value = '';
        console.log(res);
      })
  }

  render() {
    return (
      <form onSubmit={e => this.handleSubmit(e)}>
        <h2>Start a new quest</h2>
        <p>
          <label htmlFor="quest_name">Quest Name: </label>
          <input type="text" id="quest_name" onChange={(e) => this.handleNameChange(e.target.value)} required />
        </p>
        <p>
          <label htmlFor="quest_desc">Quest Description: </label>
          <textarea type="text" id="quest_desc" onChange={(e) => this.handleDescChange(e.target.value)} required />
        </p>
        <button type='submit'>
          Begin quest!
        </button>
      </form>
    )
  }
}

class LoginForm extends Component {
  static defaultProps = {
    onLoginSuccess: () => {}
  }

  state = { error: null };

  handleSubmitJwtAuth = ev => {
    ev.preventDefault();
    this.setState({ error: null });
    const { user_name, password } = ev.target;

    AuthApiService.postLogin({
      user_name: user_name.value,
      password: password.value,
    })
      .then(res => {
        user_name.value = ''
        password.value = ''
        this.props.onLoginSuccess()
      })
      .catch(res => {
        this.setState({ error: res.error })
      })
  }

  render() {
    const { error } = this.state;
    return (
      <form
        onSubmit={this.handleSubmitJwtAuth}
      >
        {/* <div role='alert'>
          {error && <p>{error}</p>}
        </div> */}
        <div>
          <label htmlFor='user_name'>
            User name: {' '}
          </label>
          <input
            required
            name='user_name'
            id='user_name'
          />
        </div>
        <div>
          <label htmlFor='password'>
            Password: {' '}
          </label>
          <input
            required
            name='password'
            type='password'
            id='password'
          />
        </div>
        <button type='submit'>
          Log In
        </button>
      </form>
    )
  }
}

export { AddTask, AddQuest, LoginForm }