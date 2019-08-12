import React from 'react';
import ReactDOM from 'react-dom';
import { AddTask, AddQuest, LoginForm, RegisterForm } from './Forms';

it('renders AddTask without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AddTask />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders AddQuest without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AddQuest />, div);
  ReactDOM.unmountComponentAtNode(div);
}); 

it('renders LoginForm without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<LoginForm />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders RegisterForm without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<RegisterForm />, div);
  ReactDOM.unmountComponentAtNode(div);
}); 