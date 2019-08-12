import React from 'react';
import ReactDOM from 'react-dom';
import QuestPage from './QuestPage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<QuestPage />, div);
  ReactDOM.unmountComponentAtNode(div);
});