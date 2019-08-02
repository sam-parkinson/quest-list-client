import React, { Component } from 'react';

const QuestListContext = React.createContext({
  questList: [],
  selected: null,
  error: null,
  setError: () => {},
  setQuestList: () => {},
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
    }
    return (
      <QuestListContext.Provider value={value}>
        {this.props.children}
      </QuestListContext.Provider>
    )
  }
}