const fs = require('fs')
const input = fs.readFileSync(0).toString().trim()
let answer = ''
for (let i=0;i<input.length;i++) {
    if (i % 2 === 1) answer += input[i]
}
console.log([...answer].reverse().join(''))