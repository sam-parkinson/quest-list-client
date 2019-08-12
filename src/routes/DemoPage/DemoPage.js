import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import './DemoPage.css';

const demoStore = {
  demoQuests: [
    {
      quest_name: 'Finish Novel',
      quest_desc: 'You\'ve been putting it off long enough...',
      id: 1,
      completed_tasks: 2,
      total_tasks: 3
    },
    {
      quest_name: 'Paint Fence',
      quest_desc: 'Or, convice other people to do it for you',
      id: 2,
      completed_tasks: 1,
      total_tasks: 3
    },
  ],
  demoTasks: [
    {
      task_name: 'Come up with title',
      task_desc: 'A great book needs a great title',
      quest_id: 1,
      completed: true,
      id: 1
    },
    {
      task_name: 'Rewrite opening sentence',
      task_desc: '"It was a dark and stormy night" is overused',
      quest_id: 1,
      completed: false,
      id: 2
    },
    {
      task_name: 'Persuade self novel is actually good',
      task_desc: 'I have to overcome my own insecurity and have confidence in my work!',
      quest_id: 1,
      completed: true,
      id: 3
    },
    {
      task_name: 'Find white paint',
      task_desc: 'I think there was some in the shed',
      quest_id: 2,
      completed: true,
      id: 4
    },
    {
      task_name: 'Convince friends to do work for me',
      task_desc: 'Look, it\'s really fun to paint the fence, you should pay me for the privilege!',
      quest_id: 2,
      completed: false,
      id: 5
    },
    {
      task_name: 'Eat apple',
      task_desc: 'I have to make sure I eat healthy while watching my friends do my work for me',
      quest_id: 2,
      completed: false,
      id: 6
    },
  ],
};

class DemoQuestItem extends Component {
  static defaultProps = {
    quest: {}
  }

  render() {
    const quest = this.props.quest
    return (
      <li className='quest_card'>
        <h2>
          {quest.quest_name}
        </h2>
        <p>{quest.quest_desc}</p>
        <Progress 
          completed={quest.completed_tasks}
          total={quest.total_tasks}
        />
      </li>
    )
  }
};

class Progress extends Component {
  static defaultProps = {
    tasks: {},
    completed: '',
    total: '',
  }

  makeProgressBar = (total, completed) => {
    const filledArray = []
    const emptyArray = []

    for (let i = 0; i < completed; i++) {
      filledArray[i] = <li className='filled' key={i}></li>
    }

    if (total - completed > 0) {
      for (let i = 0; i < (total - completed); i++) {
        emptyArray[i] = <li className='empty' key={-(i+1)}></li>
      }
    }  
    
    return ( total > 0 
      ? <ul className='progress_bar'>
          {filledArray}
          {emptyArray}
        </ul>
      : <p>No tasks added yet!</p>
    )
  }

  render() {
    return(
      <div className='progress'>
        <h3>Progress:</h3>
        {this.makeProgressBar(this.props.total, this.props.completed)}
      </div>
    )
  }
}

class DemoTaskItem extends Component {
  static defaultProps = {
    task: {}
  }

  render() {
    const task = this.props.task
    return (
      <li className='task_card'>
        <h2>
          {task.task_name}
        </h2>
        <p>{task.task_desc}</p>
      </li>
    )
  }
};

export default class DemoPage extends Component {
  static defaultProps = {
    quests: demoStore.demoQuests,
    tasks: demoStore.demoTasks,
  }

  makeDemoQuests = () => {
    return this.props.quests.map(quest => 
      <DemoQuestItem 
        key={quest.id}
        quest={quest}
      /> 
    )
  }

  makeDemoTasks = (id) => {
    return this.props.tasks
      .filter(task => task.quest_id === id)
      .map(task => 
        <DemoTaskItem 
          key={task.id}
          task={task}
        />  
      )
  }

  render() {
    return (
      <div>
        <Header type='demo' />
        <section>
          <h2>Quests</h2>
          <ul>
            {this.makeDemoQuests()}
          </ul>
          <br />
          <h2>{this.props.quests[0].quest_name}</h2>
          <ul>
            {this.makeDemoTasks(1)}
          </ul>
          <br />
          <h2>{this.props.quests[1].quest_name}</h2>
          <ul>
            {this.makeDemoTasks(2)}
          </ul>  
        </section>
      </div>
    )
  }
}