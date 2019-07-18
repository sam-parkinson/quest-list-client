import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { UserProvider } from './contexts/UserContext';
import { QuestListProvider } from './contexts/QuestListContext';
import { TaskListProvider } from './contexts/TaskListContext';
import App from './components/App/App';
import './index.css';

ReactDOM.render(
  <BrowserRouter>
    <UserProvider>
      <QuestListProvider>
        <TaskListProvider>
          <App />
        </TaskListProvider>
      </QuestListProvider>   
    </UserProvider>    
  </BrowserRouter>, 
  document.getElementById('root')
);