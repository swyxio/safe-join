import { safeJoin } from '../src'

describe('join', () => {
  it('works in the basic case', () => {
    expect(safeJoin('foo', 'bar')).toEqual('foo/bar')
    expect(safeJoin('foo/', 'bar')).toEqual('foo/bar')
    expect(safeJoin('foo', '/bar')).toEqual('foo/bar')
    expect(safeJoin('foo/', '/bar')).toEqual('foo/bar')
  })
  it('works with http', () => {
    expect(safeJoin('http://foo', 'bar')).toEqual('http://foo/bar')
  })
  it('works with multiple args', () => {
    expect(safeJoin('foo', '/bar', '/baz')).toEqual('foo/bar/baz')
  })
})
