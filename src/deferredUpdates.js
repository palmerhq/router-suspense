import React from 'react';
import ReactDOM from 'react-dom';

////////////////////////////////////////////////////////////////////////////////
// React polyfill
let { unstable_deferredUpdates } = ReactDOM;
if (unstable_deferredUpdates === undefined) {
  unstable_deferredUpdates = fn => fn();
}

export const deferredUpdates = unstable_deferredUpdates;
