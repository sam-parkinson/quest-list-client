import React from 'react';
import ReactDOM from 'react-dom';
import TaskListItem from './TaskListItem';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TaskListItem />, div);
  ReactDOM.unmountComponentAtNode(div);
});