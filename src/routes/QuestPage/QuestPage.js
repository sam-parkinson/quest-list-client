import React, { Component } from 'react';
import TaskListContext from '../../contexts/TaskListContext';
import { demoTasks } from '../../contexts/store';
import Header from '../../components/Header/Header';
import TaskListItem from '../../components/TaskListItem/TaskListItem';
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

  getId = () => {
    return this.props.match.params.questId
  }

  componentDidMount() {
    const id = this.getId()
    this.context.setTaskList(demoTasks.filter(
      task => task.questId.toString() === id.toString()
    ))
  }

  renderTasks() {
    const { taskList = [] } = this.context;
    return taskList.map(task =>
      <TaskListItem key={task.id} task={task} />
    )
  }

  render() {
    return (
      <div>
        <Header 
          type='quest'
          questId={Number(this.getId())}
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