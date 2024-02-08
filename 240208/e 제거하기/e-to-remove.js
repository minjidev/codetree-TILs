const fs = require('fs')
const input = fs.readFileSync(0).toString().trim()

const idx = input.indexOf('e')
console.log(input.slice(0, idx) + input.slice(idx+1))