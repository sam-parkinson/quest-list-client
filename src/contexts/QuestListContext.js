import React, { Component } from 'react';

const QuestListContext = React.createContext({
  questList: [],
  error: null,
  setQuestList: () => {},
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

  render() {
    const value = {
      questList: this.state.questList,
      error: this.state.error,
      setQuestList: this.setQuestList,
    }
    return (
      <QuestListContext.Provider value={value}>
        {this.props.children}
      </QuestListContext.Provider>
    )
  }
}