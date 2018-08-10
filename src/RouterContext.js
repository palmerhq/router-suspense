import React from 'react';
import createContext from 'create-react-context';

const createNamedContext = (name, defaultValue) => {
  const Ctx = createContext(defaultValue);
  Ctx.Consumer.displayName = `${name}.Consumer`;
  Ctx.Provider.displayName = `${name}.Provider`;
  return Ctx;
};

export const RouterContext = createNamedContext('Router', null);
