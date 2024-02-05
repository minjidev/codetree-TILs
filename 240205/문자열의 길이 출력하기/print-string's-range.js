const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split('\n')

let totalLen = 0

for (let str of input) {
    totalLen += str.length
}

console.log(totalLen)