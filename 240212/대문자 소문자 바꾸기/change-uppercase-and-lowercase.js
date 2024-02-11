const fs = require('fs')
const input = fs.readFileSync(0).toString().trim()
let answer = ''
for (let ch of input) {
    if (ch >= 'a' && ch <= 'z') answer += ch.toUpperCase()
    else answer += ch.toLowerCase()
}

console.log(answer)