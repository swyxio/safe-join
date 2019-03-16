export function safeJoin(...args: string[]) {
  return args.reduce(_safeJoin)
}

// thanks to https://twitter.com/swyx/status/1106839872096985088
function _safeJoin(a: string, b: string) {
  return a.replace(/\/$/, '') + '/' + b.replace(/^\//, '')
}
