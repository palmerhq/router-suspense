import React from 'react';
import { withRouter } from './withRouter';

class LinkImpl extends React.Component {
  handleClick = e => {
    e.preventDefault();
    this.props.history.push(this.props.to);
  };

  render() {
    return (
      <a {...this.props} onClick={this.handleClick}>
        {this.props.children}
      </a>
    );
  }
}

export const Link = withRouter(LinkImpl);
