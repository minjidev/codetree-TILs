const fs = require('fs')
const input = fs.readFileSync(0).toString().trim()
let answer = ''
for (let ch of input) {
    if (ch >= "A" && ch <= "Z") answer += ch
    else if (ch >= "a" && ch <= "z") answer += ch.toUpperCase()
}

console.log(answer)