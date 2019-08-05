import React, { Component } from 'react';

const QuestListContext = React.createContext({
  questList: [],
  selected: null,
  error: null,
  setError: () => {},
  clearError: () => {},
  setQuestList: () => {},
  addQuest: () => {},
  handleSelectQuest: () => {},
});
export default QuestListContext;

export class QuestListProvider extends Component {
  state = {
    questList: [],
    error: null,
  };

  setQuestList = questList => {
    this.setState({ questList })
  }
  
  addQuest = (quest) => {
    const newList = this.state.questList.concat(quest);
    this.setState({ 
      questList: newList, 
    });
  }

  setError = error => {
    this.setState({ error })
  }

  clearError = () => {
    this.setState({ error: null })
  }

  render() {
    const value = {
      questList: this.state.questList,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setQuestList: this.setQuestList,
      addQuest: this.addQuest,
    }
    return (
      <QuestListContext.Provider value={value}>
        {this.props.children}
      </QuestListContext.Provider>
    )
  }
}