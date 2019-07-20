import React, { Component } from 'react';
import QuestListContext from '../../contexts/QuestListContext';
import TaskListContext from '../../contexts/TaskListContext';
import { demoTasks } from '../../contexts/store';
import Header from '../../components/Header/Header';
import TaskListItem from '../../components/TaskListItem/TaskListItem';
import { AddTask } from '../../components/Forms/Forms';
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


class QuestPage extends Component {
  static defaultProps = {
    match: { params: {} },
    questId: null,
    tasks: {},
  }


  componentDidMount() {
    const tasks = this.props.tasks
    const questId = this.props.questId
    tasks.setTaskList(demoTasks.filter(task => task.questId === questId))
  }

  renderTasks() {
    return this.props.tasks.taskList.map(task =>
      <TaskListItem key={task.id} task={task} />
    )
  }

  render() {
    return (
      <>
        <Header 
          type='quest'
          questId={this.props.questId}
        />
        <section className='tasks'>
          <ul>
            {this.renderTasks()}
          </ul>
          <AddTask 
            questId={this.props.questId}

          />
        </section>
      </>
    )
  }
}

function QuestWrapper() { 
  return (
    <QuestListContext.Consumer>
      {quests => (
        <TaskListContext.Consumer>
          {tasks => (
            <QuestPage questId={quests.selected} tasks={tasks} />
          )}
        </TaskListContext.Consumer>
      )}
    </QuestListContext.Consumer>
  )
}

export default QuestWrapper;