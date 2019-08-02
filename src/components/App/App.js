import React, { Component } from 'react';
import { Switch } from 'react-router-dom';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import PublicOnlyRoute from '../Utils/PublicOnlyRoute';
import PrivateRoute from '../Utils/PrivateRoute';
import LandingPage from '../../routes/LandingPage/LandingPage';
import LoginPage from '../../routes/LoginPage/LoginPage';
import ProfilePage from '../../routes/ProfilePage/ProfilePage';
import QuestWrapper from '../../routes/QuestPage/QuestPage';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className='App'>
        <Nav />
        <main>
          <Switch>
            <PublicOnlyRoute 
              exact
              path={'/'}
              component={LandingPage}
            />
            <PublicOnlyRoute 
              exact
              path={'/login'}
              component={LoginPage}
            />
            <PrivateRoute
              exact 
              path={'/profile'}
              component={ProfilePage}
            />
            <PrivateRoute
              path={'/profile/:questId'}
              component={QuestWrapper}
            />
          </Switch>
        </main>
        <Footer />
      </div>
    )
  }
}

export default App;