import React, { Component } from 'react';
import QuestListContext from '../../contexts/QuestListContext';
import QuestsApiService from '../../services/quests-api-service';
import Header from '../../components/Header/Header';
import QuestListItem from '../../components/QuestListItem/QuestListItem';
import { AddQuest } from '../../components/Forms/Forms';
import './ProfilePage.css'

export default class ProfilePage extends Component {
  static contextType = QuestListContext;

  componentDidMount() {
    this.context.clearError()
    QuestsApiService.getQuests()
      .then(this.context.setQuestList)
      .catch(this.context.setError)
  }

  renderQuests() {
    const { questList = [] } = this.context;
    return questList.map((quest, index) => 
      <QuestListItem
        key={index}
        urlAdd={index}
        quest={quest}
        url={this.props.match.url}
      />
    )
  }

  render() {
    return (
      <div>
        <Header 
          type='user'
        />
        <section className="sort">
          <ul>
            <li><button>Sort option</button></li>
            <li><button>Sort option</button></li>
            <li><button>Sort option</button></li>
          </ul>
        </section>
        <section className="quests">
          <ul>
            {this.renderQuests()}
          </ul>
          <AddQuest />
        </section>
      </div>
    )
  }
}