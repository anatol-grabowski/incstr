function incstr(str, alph) {
	if (!alph) alph = incstr.alphabet
	if (!str) return alph[0]

	//convert to array of digits
	str = str.split('')
	for (let i=0; i<str.length; i++) {
		str[i] = alph.indexOf(str[i])
		if (str[i] == -1) throw new Error('Char in input string is not in alphabet')
	}
	let maxDigit = alph.length-1

	//increment digits starting from the rightmost
	let i
	for (i=str.length-1; i>=0; i--) {
		if (str[i] == maxDigit) { str[i] = 0; continue }
		str[i]++;
		break
	}
	if (i < 0) { str.unshift(0) } //add new digit if all existing were incremented

	//convert back to string
	for (let i=0; i<str.length; i++) { str[i] = alph[str[i]] }
	str = str.join('')
	return str
}

incstr.alphabet = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'

incstr.idGenerator = function(opts={}) {
	if (!opts.lastId) opts.lastId = undefined
	if (!opts.alphabet) opts.alphabet = incstr.alphabet //to keep it independent from is.alph
	return function() {
		opts.lastId = incstr(opts.lastId, opts.alphabet)
		id = opts.lastId
		if (opts.prefix) { id = opts.prefix + id }
		if (opts.suffix) { id = id + opts.suffix }
		return id
	}
}

module.exports = incstr
