const fs = require('fs')
const input = fs.readFileSync(0).toString().trim()

console.log(input.substring(2, 10))