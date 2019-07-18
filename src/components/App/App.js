import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import LandingPage from '../../routes/LandingPage/LandingPage';
import LoginPage from '../../routes/LoginPage/LoginPage';
import ProfilePage from '../../routes/ProfilePage/ProfilePage';
import QuestPage from '../../routes/QuestPage/QuestPage';
import './App.css';

// TODO: add routes for various views

/*
  TODO:
    Add private/public routes
*/

class App extends Component {

  render() {
    return (
      <div className='App'>
        <Nav />
        <main>
          <Switch>
            <Route 
              exact
              path={'/'}
              component={LandingPage}
            />
            <Route 
              exact
              path={'/login'}
              component={LoginPage}
            />
            <Route
              exact 
              path={'/profile'}
              component={ProfilePage}
            />
            <Route 
              path={'/profile/:questId'}
              component={QuestPage}
            />
          </Switch>
        </main>
        <Footer />
      </div>
    )
  }
}

export default App;