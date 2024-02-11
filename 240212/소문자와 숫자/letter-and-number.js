const fs = require('fs')
const input = fs.readFileSync(0).toString().trim()
let answer = ''
for (let ch of input) {
    if (!isNaN(ch)) answer += ch
    else if (ch >= 'a' && ch <= 'z') answer += ch
    else if (ch >= 'A' && ch <= 'Z') answer += ch.toLowerCase()
}

console.log(answer)