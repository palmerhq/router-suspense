# Router Suspense

A suspense-friendly minimalistic sister of React Router.

For demonstration purposes only. For now. :-)

```
npm i router-suspense
```

As of now, this is a very basic router that works in async-land.

## API

The API is basically the core of React Router 4.

### `<Router>`

- `children: React.ReactNode`

### `<Route>`

- `render: ((props) => React.ReactNode)`
- `path: string`
- `exact: boolean = false`

### `<Link>`

- `to: string`

### `withRouter(Comp: Component)`

Same as RR4.

## Playing with Suspense

This router will work in React 15+. However, If you want to play around with suspense features, you'll need to enable suspense somehow. That means either building React yourself. Or, using this handy dandy starter we made.

https://github.com/palmerhq/react-suspense-starter

## Inspiration

A lot of this code is taken straight from React Router and React Training's MiniRouter lecture.

## Authors

- Jack Cross (@crosscompile)
- Jared Palmer (@jaredpalmer)

---

MIT License
