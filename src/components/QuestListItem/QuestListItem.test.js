import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter }from 'react-router-dom';
import QuestListItem from './QuestListItem';

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(
    <BrowserRouter>
      <QuestListItem />
    </BrowserRouter>,
    div
    );
  ReactDOM.unmountComponentAtNode(div);
});