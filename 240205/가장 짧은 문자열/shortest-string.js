const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split('\n')
const lens = input.map(word => word.length)

const maxLen = Math.max(...lens)
const minLen = (Math.min(...lens))

console.log(maxLen - minLen)