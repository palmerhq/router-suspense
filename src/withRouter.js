import React from 'react';
import { RouterContext } from './RouterContext';

export const withRouter = Comp => props => (
  <RouterContext.Consumer>
    {routeProps => <Comp {...props} {...routeProps} />}
  </RouterContext.Consumer>
);
