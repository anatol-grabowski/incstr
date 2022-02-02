/* global describe, it */
let chai = require('chai')
let expect = chai.expect
let incstr = require('../incstr.js')

describe('incstr()', () => {
  it('incstr() returns incstr.alphabet[0]', () => {
    expect(incstr()).to.equal(incstr.alphabet[0])
  })
  it('incstr("a", "ab") returns "b"', () => {
    expect(incstr('a', 'ab')).to.equal('b')
  })
  it('incstr("b", "ab") returns "aa"', () => {
    expect(incstr('b', 'ab')).to.equal('aa')
  })
  it('incstr("ccc", "abc") returns "aaaa"', () => {
    expect(incstr('ccc', 'abc')).to.equal('aaaa')
  })
  it('incstr("111", "10", true) returns "1000"', () => {
    expect(incstr('111', '01', true)).to.equal('1000')
  })
  it('incstr("cc", "ab") throws', () => {
    expect(incstr.bind(incstr, 'cc', 'ab')).to.throw(RangeError)
  })
})

describe('nextId = incstr.idGenerator(opts)', () => {
  it('nextId() returns "a" if opts={alphabet:"abc"}', () => {
    let nextId = incstr.idGenerator({alphabet: 'abc'})
    expect(nextId()).to.equal('a')
  })
  it('nextId() returns "id_a", then "id_b", then "id_aa" if opts={alphabet:"ab", prefix:"id_"}', () => {
    let nextId = incstr.idGenerator({alphabet: 'ab', prefix: 'id_'})
    expect(nextId()).to.equal('id_a')
    expect(nextId()).to.equal('id_b')
    expect(nextId()).to.equal('id_aa')
  })
  it('nextId() returns "aaa" if opts={lastId:"cc",alphabet:"abc"}', () => {
    let nextId = incstr.idGenerator({lastId: 'cc', alphabet: 'abc'})
    expect(nextId()).to.equal('aaa')
  })
  it('nextId() throws if opts={lastId:"cc",alphabet:"ab"}', () => {
    let nextId = incstr.idGenerator({ lastId: "cc", alphabet: "ab" });

    expect(nextId).to.throw(RangeError);
  });
})
