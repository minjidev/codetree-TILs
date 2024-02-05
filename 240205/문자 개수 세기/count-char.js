const fs = require('fs')
const [input, c] = fs.readFileSync(0).toString().trim().split('\n')
let count = 0


for (let ch of input) {
    if (ch === c) count += 1
}

console.log(count)