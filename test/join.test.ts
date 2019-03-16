import join from '../src'

describe('join', () => {
  it('works in the basic case', () => {
    expect(join('foo', 'bar')).toEqual('foo/bar')
    expect(join('foo/', 'bar')).toEqual('foo/bar')
    expect(join('foo', '/bar')).toEqual('foo/bar')
    expect(join('foo/', '/bar')).toEqual('foo/bar')
  })
  it('works with http', () => {
    expect(join('http://foo', 'bar')).toEqual('http://foo/bar')
  })
  it('works with multiple args', () => {
    expect(join('foo', '/bar', '/baz')).toEqual('foo/bar/baz')
  })
})
