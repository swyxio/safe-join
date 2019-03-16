# Safe Join

a tiny zero dependency library to join strings with slashes in them that isn't too smart about it!

## Install

```
yarn add safe-join # or npm i safe-join
```

## Usage

```ts
import join from 'safe-join'
join('foo', 'bar') // 'foo/bar'
join('foo/', 'bar') // 'foo/bar'
join('foo/', '/bar') // 'foo/bar'
join('foo', '/bar') // 'foo/bar'
join('http://foo/', '/bar') // 'http://foo/bar'

// works on multiple args too
join('foo', '/bar/', '/baz') // 'foo/bar/baz'
// etc
```

You might normally use path.join for this in Node but this works in the browser, also it doesnt swallow `/`'s when you need `//`.

Uses typescript because why not.

It does NOT handle query strings for you e.g. `join("https://foo", "bar", "&search=baz")` so be sure to handle those on your own. or use https://github.com/jfromaniello/url-join

## entire source code

so you know exactly what this

```ts
export default function safeJoin(...args: string[]) {
  return args.reduce(_safeJoin)
}

function _safeJoin(a: string, b: string) {
  let isTrailingSlash, isLeadingSlash
  if (a.length > 1 && a.slice(-1)[0] === '/') isTrailingSlash = true
  if (b.length > 1 && b[0] === '/') isLeadingSlash = true
  if (isTrailingSlash && isLeadingSlash) return a + b.slice(1)
  else if (!isTrailingSlash && !isLeadingSlash) return a + '/' + b
  else return a + b
}
```

## alternatives

https://github.com/jfromaniello/url-join

## TSDX Bootstrap

This project was bootstrapped with [TSDX](https://github.com/jaredpalmer/tsdx).
