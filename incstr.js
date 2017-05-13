function incstr(id, alph) {
	if (!alph) alph = incstr.alphabet
	if (!id) return alph[0]

	//convert to array of digits
	id = id.split('')
	for (let i=0; i<id.length; i++) { id[i] = alph.indexOf(id[i]) }
	let maxDigit = alph.length-1

	//increment digits starting from the rightmost
	let i
	for (i=id.length-1; i>=0; i--) {
		if (id[i] == maxDigit) { id[i] = 0; continue }
		id[i]++;
		break
	}
	if (i < 0) { id.unshift(1) } //add new digit if all existing were incremented

	//convert back to string
	for (let i=0; i<id.length; i++) { id[i] = alph[id[i]] }
	id = id.join('')
	return id
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
