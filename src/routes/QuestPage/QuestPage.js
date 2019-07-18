import React, { Component } from 'react';
import TaskListContext from '../../contexts/TaskListContext';
import { demoTasks } from '../../contexts/store';
import Header from '../../components/Header/Header';
import './QuestPage.css';

/*
  This will work by making a GET request to the API for tasks
  User ID matches current user logged in
  Quest ID maches the clicked quest
    BUT!
      Don't expose quest IDs to users directly, use combo of user ID and quest ID
      Don't expose user ID, get user ID by user name
      Quest ID will be made of User ID + sequence for quests
      Handle this on the backend
*/

export default class QuestPage extends Component {
  static defaultProps = {
    match: { params: {} },
  }

  static contextType = TaskListContext;

  componentDidMount() {
    const { questId } = this.props.match.params
    this.context.setTaskList(demoTasks.filter(
      task => task.questId.toString() === questId.toString()
    ))
  }

  renderTasks() {
    const { taskList = [] } = this.context;
    return taskList.map(task =>
      <li key={task.id}>
        <span>{task.taskName}</span>
        <p>{task.taskDesc}</p>
      </li>  
    )
  }

  render() {
    
    return (
      <div>
        <Header 
          type='quest'
          questId={this.props.match.params.questId}
        />
        <section className='tasks'>
          <ul>
            {this.renderTasks()}
          </ul>
        </section> 
      </div>
    )
  }
}