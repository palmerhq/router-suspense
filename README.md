# Router Suspense

A suspense-friendly minimalistic sister of React Router.

```
npm i router-suspense
```

As of now, this is a very basic router that works in async-land. 


<img src="https://user-images.githubusercontent.com/4060187/43965292-e15935fe-9c8c-11e8-80f5-a369fdbf568d.gif" width="500" />

## API

The API is basically the core of React Router 4.

### `<Router>`

Exactly the same as RR4's `<BrowserRouter>`

- `children: React.ReactNode`

```jsx
import React from 'react';
import { unstable_createRoot as createRoot } from 'react-dom';
import { Router } from 'router-suspense';
import App from './App';

const root = createRoot(document.getElementById('app'));

const render = Comp => {
  root.render(
   <Router>
     <Comp />
   </Router>
  );
};

render(App);
```

### `<Route>`

Render prop component to conditionally render based on the URL. If present, it uses `ReactDOM.unstable_deferredUpdates` to wait for any suspense jazz to happen on the next route before making the transition. 

#### Route Props

- `render: ((props) => React.ReactNode)`: Passes `history`, `location`, `match` as a render prop. Only renders when `path` matches the current location.
- `path: string` Path to match. Same as RR4.
- `exact: boolean = false` Same as RR4.


```jsx
import React from 'react'
import { Route, Link } from 'router-suspense'

export const Nav = () => (
  <nav>
    <Link to="/">Home</Link>
    <Link to="/dashboard">Dashboard</Link>
  </nav>
)

export const App = () => (
  <div>
    <nav>
     <Link to="/">Home</Link>
     <Link to="/dashboard">Dashboard</Link>
     <Link to="/user/123">User</Link>
    </nav>
    <Route path="/" exact render={() => <div>Home</div>} />
    <Route path="/dashboard" exact render={() => <div>Dashboard</div>} />
    <Route path="/user/:id" exact render={({ match }) => <div>User {match.params.id} </div>} />
  </div>
)
```

### `<Link>`

Link works like React Router 4's. You give it a `path`, it renders an `<a>`, but does a client-side transition by calling `history.push(path)` under the hood.

- `to: string` The relative path to link to

```jsx
import React from 'react'
import { Link } from 'router-suspense'

export const Nav = () => (
  <nav>
    <Link to="/">Home</Link>
    <Link to="/dashboard">Dashboard</Link>
  </nav>
)
```

### `withRouter(Comp: Component)`

A higher-order component that hooks into Router context. Same as RR4.

```jsx
import React from 'react'
import { Link } from 'router-suspense'

const BackButton = ({ history }) => (
  <div>
    <button onClick={() => history.goBack()}>Back</button>
  </div>
)

export default withRouter(BackButton)
```

## Playing with Suspense

This router will work in React 15+. However, If you want to play around with suspense features, you'll need to enable suspense somehow. That means either building React yourself. Or, using this handy dandy starter we made.

https://github.com/palmerhq/react-suspense-starter

## Inspiration

A lot of this code is taken straight from React Router and React Training's MiniRouter lecture.

## Authors

- Jack Cross ([@crosscompile](https://twitter.com/crosscompile))
- Jared Palmer ([@jaredpalmer](https://twitter.com/crosscompile))


Copyright © 2018 The Palmer Group.

---

MIT License
