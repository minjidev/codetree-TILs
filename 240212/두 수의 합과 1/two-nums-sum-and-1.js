const fs = require('fs')
const [a, b] = fs.readFileSync(0).toString().trim().split(' ').map(Number)

const sum = a + b
const numStr = sum.toString()
let count = 0

for (let ch of numStr) {
    if (ch === '1') count += 1
}
console.log(count)