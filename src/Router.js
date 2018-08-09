import React from 'react';
import { createBrowserHistory } from 'history';
import { matchPath } from './matchPath';
import { RouterContext } from './RouterContext';

export class Router extends React.Component {
  history = createBrowserHistory();

  state = {
    location: this.history.location,
    history: this.history,
  };

  componentDidMount() {
    this.history.listen(() => {
      this.setState({
        location: this.history.location,
      });
    });
  }

  render() {
    return (
      <RouterContext.Provider value={this.state}>
        {this.props.children}
      </RouterContext.Provider>
    );
  }
}
