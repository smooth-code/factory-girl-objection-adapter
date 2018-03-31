# factory-girl-objection-adapter

[![travis][travis-image]][travis-url]
[![npm][npm-image]][npm-url]

[travis-image]: https://img.shields.io/travis/smooth-code/factory-girl-objection-adapter/master.svg
[travis-url]: https://travis-ci.org/smooth-code/factory-girl-objection-adapter
[npm-image]: https://img.shields.io/npm/v/factory-girl-objection-adapter.svg
[npm-url]: https://npmjs.org/package/factory-girl-objection-adapter

This module brings [objection](http://vincit.github.io/objection.js/) support to [factory-girl](https://github.com/aexmachina/factory-girl).

```
npm install factory-girl-objection-adapter
```

## Usage

```js
import { factory } from 'factory-girl'
import ObjectionAdapter from 'factory-girl-objection-adapter'
import User from './models/User'

factory.setAdapter(new ObjectionAdapter())

factory.define('user', User, {
  name: factory.chance('name'),
  email: factory.chance('email'),
})

export default factory
```

## License

MIT
