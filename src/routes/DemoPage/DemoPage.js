import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import './DemoPage.css';

/*
  Demo Page needs:
    Dummy quest list
    Dummy task list
    Any important views in actual app
*/

export default class DemoPage extends Component {
  render() {
    return (
      <div>
        <Header type='demo' />
        <section>
          <h2>Under Construction</h2>
        </section>
      </div>
    )
  }
}