import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import { RegisterForm } from '../../components/Forms/Forms';

export default class RegisterPage extends Component {
  static defaultProps = {
    history: {
      push: () => {},
    },
  }

  handleRegisterSucess = () => {
    const { history } = this.props;
    history.push('/')
  }

  render() {
    return (
      <div>
        <Header />
        <section>
          <RegisterForm 
            onRegisterSuccess={this.handleRegisterSucess}
          />
        </section>
      </div>
    )
  }
}