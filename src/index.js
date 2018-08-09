import React from 'react';
import { createBrowserHistory } from 'history';
import { matchPath } from './matchPath';

export class Router extends React.Component {
  history = createBrowserHistory();

  state = {
    location: this.history.location,
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
      <RouterContext.Provider
        value={{
          location: this.state.location,
          history: this.history,
        }}
      >
        {this.props.children}
      </RouterContext.Provider>
    );
  }
}
