export function safeJoin(...args: string[]) {
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
