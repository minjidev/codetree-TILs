const fs = require('fs')
const input = fs.readFileSync(0).toString().trim()
const len = input.length
const answer = input[0] + input.slice(2, len-2) + input[len-1]
console.log(answer)