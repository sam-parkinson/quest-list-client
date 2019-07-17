import React, { Component } from 'react';
import QuestListContext from '../../contexts/QuestListContext';
import { demoQuests } from '../../contexts/store';
import Header from '../../components/Header/Header';
import QuestListItem from '../../components/QuestListItem/QuestListItem';
import './ProfilePage.css'

/*
  TODO:
    Wire up context
    List of quests should populate based on context - use forEach
    Sort buttons should work based on quest name, quest date started, and stretch goal for quest completion percentage
    Figure out how to implement sort buttons
*/

export default class ProfilePage extends Component {
  static contextType = QuestListContext;

  componentDidMount() {
    this.context.setQuestList(demoQuests)
  }

  renderQuests() {
    const { questList = [] } = this.context;
    return questList.map(quest => 
      <QuestListItem
        key={quest.id}
        quest={quest}
        url={this.props.match.url}
      />
    )
  }

  render() {
    return (
      <div>
        <Header />
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
        </section>
      </div>
    )
  }
}