# telling-stories-dashboard
[![Build Status](https://travis-ci.org/mvdwg/telling-stories-dashboard.svg?branch=master)](https://travis-ci.org/mvdwg/telling-stories-dashboard)
![Ember versions](https://embadge.io/v1/badge.svg?start=2.8.0)

Dashboard for [telling-stories](https://github.com/mvdwg/telling-stories#readme).

This addon is part of [telling-stories](https://github.com/mvdwg/telling-stories#readme) addon and is not supposed to be use directly.

## Usage

```
$ ember install telling-stories-dashboard
```

Edit app/router.js to mount the new engine

```js
Router.map(function() {
  this.mount('telling-stories-engine', { as: 'feature' });
  ...
});
```

Access http://localhost:4200/features

### Mirage

If you're using mirage you need to add a passthrough rule for `/telling-stories.json` route.

`mirage/config.js`

```js
export default function() {
  this.passthrough('/telling-stories.json');
  ...
});
```
__Note that we are registering the passthrough rule before any `this.namespace` call`__

## Development

```
$ ember install telling-stories-dashboard
```

### Running

```
$ ember serve
```

Building the app with logger enabled

```
$ DEBUG=telling-stories DEBUG_LEVEL=trace ember build
```

and then visit your app at http://localhost:4200.

### Tests

```
$ npm test
```

## License

telling-stories is licensed under the MIT license.

See [LICENSE](./LICENSE.md) for the full license text.
