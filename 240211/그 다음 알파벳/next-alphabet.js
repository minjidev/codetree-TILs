const fs = require('fs')
const ch = fs.readFileSync(0).toString().trim()
const nextCode = ch.charCodeAt(0) + 1
console.log(String.fromCharCode(nextCode))