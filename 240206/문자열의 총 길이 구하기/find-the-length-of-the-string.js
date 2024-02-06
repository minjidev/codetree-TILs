const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split(' ')
let sum = 0
for (let word of input) {
    sum += word.length
}

console.log(sum)