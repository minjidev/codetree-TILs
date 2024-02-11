const fs = require('fs')
const input = fs.readFileSync(0).toString().trim()
let sum = 0
for (let ch of input) {
    if (!isNaN(ch)) sum += Number(ch)
}

console.log(sum)