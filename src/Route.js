import React from 'react';
import { withRouter } from './withRouter';
import { matchPath } from './matchPath';
import { deferredUpdates } from './deferredUpdates';

class RouteImpl extends React.Component {
  state = {
    match: matchPath(this.props.location.pathname, {
      path: this.props.path,
      exact: this.props.exact,
    }),
  };

  componentDidUpdate(prevProps) {
    if (
      this.props.location.pathname !== prevProps.location.pathname ||
      this.props.path !== prevProps.path
    ) {
      deferredUpdates(() => {
        this.setState({
          match: matchPath(this.props.location.pathname, {
            path: this.props.path,
            exact: this.props.exact,
          }),
        });
      });
    }
  }

  render() {
    const {
      path,
      location,
      history,
      render,
      component: Component,
      exact,
      children,
    } = this.props;
    const { match } = this.state;
    const props = { location, history, match };
    if (match !== null && match.isExact) {
      if (render) {
        return render(props);
      } else if (Component) {
        return <Component {...props} />;
      } else if (children) {
        return children(props);
      }
    } else {
      // normally we would do this....
      return children ? children(props) : null;
      // return null;
    }
  }
}

export const Route = withRouter(RouteImpl);
