# Next.js demo miniserver

_This repo was used as a material for the "Next.js - making websites made simple (again)" presentation by [Rafał Ruciński](https://fatfisz.com)._

## Requirements

Node version should be at least 6.

## Usage

```
node index.js
```

## What is this?

This is a REST-style server that serves data for a blog. All of the data is formatted in JSON.

### Available endpoints

#### /blog

Returns an array of available blog posts:

```js
[
  { id: 'first', title: 'The first page' },
  { id: 'second', title: 'The second page' },
  { id: 'third', title: 'The third page' },
  ...
]
```

#### /blog/{id}

Returns an object with blog post contents:

```js
{
  title: 'The first page',
  text: 'Apple pie donut cheesecake...',
}
```

## License

Copyright (c) 2017 Rafał Ruciński. Licensed under the MIT license.
