import React from 'react';
import { createBrowserHistory } from 'history';
import { matchPath } from './matchPath';
import { RouterContext } from './RouterContext';
import { deferredUpdates } from './deferredUpdates';

export class Router extends React.Component {
  history = createBrowserHistory();

  state = {
    location: this.history.location,
    history: this.history,
  };

  componentDidMount() {
    this.unlisten = this.history.listen(() => {
      Promise.resolve().then(() =>
        deferredUpdates(() => {
          if (!this.unmounted) {
            this.setState({
              location: this.history.location,
            });
          }
        })
      );
    });
  }

  componentWillUnmount() {
    this.unmounted = true;
    this.unlisten();
  }

  render() {
    return (
      <RouterContext.Provider value={this.state}>
        {this.props.children}
      </RouterContext.Provider>
    );
  }
}
