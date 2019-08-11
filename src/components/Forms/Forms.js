import React, { Component } from 'react';
import AuthApiService from '../../services/auth-api-service';
import QuestsApiService from '../../services/quests-api-service';
import TaskListContext from '../../contexts/TaskListContext';
import QuestListContext from '../../contexts/QuestListContext';
import UserContext from '../../contexts/UserContext';
import './Forms.css'

class AddTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task_name: '',
      task_desc: '',
    }
  }

  static defaultProps = {
    questId: null
  }

  static contextType = TaskListContext;

  state = { error: null }

  handleNameChange(task_name) {
    this.setState({task_name});
  }

  handleDescChange(task_desc) {
    this.setState({task_desc});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({ error: null });
    const { task_name, task_desc } = e.target;

    QuestsApiService.postTask(
      task_name.value,
      task_desc.value,
      this.props.questId
    )
      .then(res => {
        task_name.value = '';
        task_desc.value = '';
        this.context.addTask(res);
      })
    
  }

  render() {
    return (
      <form 
        className='task_form'
        onSubmit={e => this.handleSubmit(e)}
      >
        <h2>Add Task</h2>
        <div>
          <label html="task_name">Task Name: </label>
          <input type="text" id="task_name" onChange={(e) => this.handleNameChange(e.target.value)} required />
        </div>
        <div>
          <label htmlFor="task_desc">Task Description: </label>
          <textarea type="text" id="task_desc" onChange={(e) => this.handleDescChange(e.target.value)} required />
        </div>
        <button 
          className='add_or_edit'
          type="submit"
        >
          Submit
        </button>
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
    
    QuestsApiService.postQuest(
      quest_name.value,
      quest_desc.value
    )
      .then(res => {
        quest_name.value = '';
        quest_desc.value = '';
        this.context.addQuest(res)
      })
  }

  render() {
    return (
      <form 
        className='quest_form'
        onSubmit={e => this.handleSubmit(e)}
      >
        <h2>Start a new quest</h2>
        <div>
          <label htmlFor="quest_name">Quest Name: </label>
          <input type="text" id="quest_name" onChange={(e) => this.handleNameChange(e.target.value)} required />
        </div>
        <div>
          <label htmlFor="quest_desc">Quest Description: </label>
          <textarea type="text" id="quest_desc" onChange={(e) => this.handleDescChange(e.target.value)} required />
        </div>
        <button 
          className='add_or_edit'
          type='submit'
        >
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

  static contextType = UserContext;

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
        this.context.logInTrue()
      })
      .catch(res => {
        this.setState({ error: res.error })
      })
  }

  render() {
    const { error } = this.state;
    return (
      <form
        className='login_form'
        onSubmit={this.handleSubmitJwtAuth}
      >
        <div role='alert'>
          {error && <p>{error}</p>}
        </div>
        <div>
          <label htmlFor='user_name'>
            User name:
          </label>
          <input
            required
            name='user_name'
            id='user_name'
          />
        </div>
        <div>
          <label htmlFor='password'>
            Password:
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

class RegisterForm extends Component {
  static defaultProps = {
    onRegisterSuccess: () => {}
  }

  static contextType = UserContext

  state = { error: null }

  handleSubmit = e => {
    e.preventDefault();
    const { user_name, password, repeat_password } = e.target;

    this.setState({ error: null })

    if (password.value !== repeat_password.value) 
      return this.setState({ error: `Passwords do not match` })

    AuthApiService.postUser({
      user_name: user_name.value,
      password: password.value,
    })
      .then(user => {
        user_name.value = '';        
        AuthApiService.postLogin({
          user_name: user.user_name,
          password: password.value,
        })
          .then(res => {
            password.value = '';
            this.props.onRegisterSuccess();
            this.context.logInTrue();
          })     
      })
      .catch(res => {
        this.setState({ error: res.error })
      })
  }

  render() {
    const { error } = this.state;
    return (
      <form
        className='register_form'
        onSubmit={this.handleSubmit}
      >
        <div role='alert'>
          {error && <p>{error}</p>}
        </div>
        <div>
          <label htmlFor='user_name'>
            Username:
          </label>
          <input
            required
            name='user_name'
            id='user_name'
          />
        </div>
        <div>
          <label htmlFor='password'>
            Password:
          </label>
          <input
            required
            name='password'
            type='password'
            id='password'
          />
        </div>
        <div>
          <label htmlFor='repeat_password'>
            Repeat Password:
          </label>
          <input
            required
            name='repeat_password'
            type='password'
            id='repeat_password'
          />
        </div>
        <button type='submit'>
          Register
        </button>
        <br />
        <span className='password_req'>
          Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character, must not start or end with empty space, and must be at least eight characters long
        </span>
        
      </form>
    )
  }
}

export { AddTask, AddQuest, LoginForm, RegisterForm }