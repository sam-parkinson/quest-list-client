import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class LinkButton extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {}
    },
    to: '',
    buttonText: ''
  }

  render() {
    return (
      <button 
        onClick={() => {
          this.props.history.push(this.props.to)
        }}
      >
        {this.props.buttonText}
      </button>
    )
  }
}

export default withRouter(LinkButton);