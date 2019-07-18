import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class LinkButton extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {}
    },
    to: '',
  }

  render() {
    return (
      <button 
        onClick={() => {
          this.props.history.push(this.props.to)
        }}
      >
        {this.props.children}
      </button>
    )
  }
}

export default withRouter(LinkButton);