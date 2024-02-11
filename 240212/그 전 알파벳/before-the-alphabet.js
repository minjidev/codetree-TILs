const fs = require('fs')
const ch = fs.readFileSync(0).toString().trim()

const beforeCode = ch.charCodeAt(0) - 1

console.log(ch === 'a' ? 'z' : String.fromCharCode(beforeCode))