import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter }from 'react-router-dom';
import LinkButton, { LogoutButton } from './LinkButton';

it('link button renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(
    <BrowserRouter>
      <LinkButton />
    </BrowserRouter>,
    div
    );
  ReactDOM.unmountComponentAtNode(div);
});

it('logout button renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(
    <BrowserRouter>
      <LogoutButton />
    </BrowserRouter>,
    div
    );
  ReactDOM.unmountComponentAtNode(div);
});
