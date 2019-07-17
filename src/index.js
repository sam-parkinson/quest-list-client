import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { QuestListProvider } from './contexts/QuestListContext';
import { TaskListProvider } from './contexts/TaskListContext';
import App from './components/App/App';
import './index.css';

ReactDOM.render(
  <BrowserRouter>
    <QuestListProvider>
      <TaskListProvider>
        <App />
      </TaskListProvider>
    </QuestListProvider>    
  </BrowserRouter>, 
  document.getElementById('root')
);