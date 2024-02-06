const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split('\n')

let totalLen = 0
let startWithA = 0

for (let w of input) {
    if (isNaN(w)) {
        totalLen += w.length
        if (w[0] === 'a') {
            startWithA += 1
        }
    }
}

console.log(totalLen, startWithA)