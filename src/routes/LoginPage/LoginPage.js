import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import { LoginForm } from '../../components/Forms/Forms';

export default class LoginPage extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {},
    },
  }

  handleLoginSuccess = () => {
    const { location, history } = this.props;
    const destination = (location.state || {}).from || '/'
    history.push(destination)
  }

  render() {
    return (
      <div>
        <Header 
          type='login'
        />
        <section>
          <LoginForm 
            onLoginSuccess={this.handleLoginSuccess}
          />
        </section>
      </div>
    )
  }
}