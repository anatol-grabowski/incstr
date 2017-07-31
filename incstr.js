function incstr (str, alph = incstr.alphabet, numlike = incstr.numberlike) {
  if (!str) return alph[0]

  // convert to array of digits
  const digs = str.split('').map(ch => alph.indexOf(ch))

  // increment digits starting from the rightmost
  const maxDigit = alph.length - 1
  for (var i = digs.length - 1; i >= 0; i--) { // !!! var not let
    if (digs[i] === -1) throw new RangeError(`Character "${str[i]}" is not in the alphabet "${alph}"`)
    if (digs[i] === maxDigit) {
      digs[i] = 0
      continue
    }
    digs[i]++
    break
  }
  if (i < 0) { digs.unshift(numlike ? 1 : 0) } // add new digit

  // convert back to string
  return digs.map(dig => alph[dig]).join('')
}

incstr.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
incstr.numberlike = false
// prefix and suffix don't make sense here cause str = incstr('id3') will produce 'idid4'

// generator syntax would be too cumbersome 'nextId.next().value'
incstr.idGenerator = function ({ lastId,
                                 alphabet = incstr.alphabet,
                                 numberlike = incstr.numberlike,
                                 prefix = '',
                                 suffix = '' }) {
  return function nextId () {
    lastId = incstr(lastId, alphabet, numberlike)
    return prefix + lastId + suffix
  }
}

if (this.window && this === window) this.incstr = incstr
else module.exports = incstr
