const incstr = require('..')

let maxStr = 'AAAA'

let str
console.time()
while (str !== maxStr) {
  str = incstr(str)
}
console.log('incstr benchmark')
console.timeEnd()


let id
let nextId = incstr.idGenerator()
console.time()
while (id !== maxStr) {
  id = nextId()
}
console.log('idGenerator benchmark')
console.timeEnd()
