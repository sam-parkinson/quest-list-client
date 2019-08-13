import React, { Component } from 'react';
import { Switch } from 'react-router-dom';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import PublicOnlyRoute from '../Utils/PublicOnlyRoute';
import PrivateRoute from '../Utils/PrivateRoute';
import LandingPage from '../../routes/LandingPage/LandingPage';
import LoginPage from '../../routes/LoginPage/LoginPage';
import RegisterPage from '../../routes/RegisterPage/RegisterPage';
import DemoPage from '../../routes/DemoPage/DemoPage';
import ProfilePage from '../../routes/ProfilePage/ProfilePage';
import QuestWrapper from '../../routes/QuestPage/QuestPage';
import TokenService from '../../services/token-service';
import AuthApiService from '../../services/auth-api-service';
import IdleService from '../../services/idle-service'
import './App.css';

class App extends Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidMount() {
    IdleService.setIdleCallback(this.logoutFromIdle);
    if (TokenService.hasAuthToken()) {
      IdleService.registerIdleTimerResets();
      TokenService.queueCallbackBeforeExpiry(() => {
        AuthApiService.postRefreshToken();
      });
    }
  }

  componentWillUnmount() {
    IdleService.unRegisterIdleResets();
    TokenService.clearCallbackBeforeExpiry();
    TokenService.clearAuthToken();
  }

  logoutFromIdle = () => {
    TokenService.clearAuthToken();
    TokenService.clearCallbackBeforeExpiry();
    IdleService.unRegisterIdleResets();
    this.forceUpdate();
  }

  render() {
    return (
      <div className='App'>
        <Nav />
        <main className='content'>
          <Switch>
            <PublicOnlyRoute 
              exact
              path={'/'}
              component={LandingPage}
            />
            <PublicOnlyRoute 
              path={'/login'}
              component={LoginPage}
            />
            <PublicOnlyRoute 
              path={'/register'}
              component={RegisterPage}
            />
            <PublicOnlyRoute 
              path={'/demo'}
              component={DemoPage}
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
          <Footer />
        </main>        
      </div>
    )
  }
}

export default App;