import React, { Component } from 'react';
import QuestListContext from '../../contexts/QuestListContext';
import TaskListContext from '../../contexts/TaskListContext';
import Header from '../../components/Header/Header';
import TaskListItem from '../../components/TaskListItem/TaskListItem';
import { AddTask } from '../../components/Forms/Forms';
import QuestsApiService from '../../services/quests-api-service';
import './QuestPage.css';

class QuestPage extends Component {
  static defaultProps = {
    match: { params: {} },
    questId: null,
    tasks: {},
  }


  componentDidMount() {
    const tasks = this.props.tasks
    const questId = this.props.questId
    QuestsApiService.getQuestAndTasks(questId)
      .then(res => {
        tasks.setTaskList(res.tasks)
      })
  }

  renderTasks() {
    return this.props.tasks.taskList.map(task =>
      <TaskListItem key={task.id} taskId={task.id} />
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