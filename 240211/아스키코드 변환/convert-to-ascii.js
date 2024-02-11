const fs = require('fs')
const [str, code] = fs.readFileSync(0).toString().trim().split(' ')

let answer = ''
answer += str.charCodeAt(0) + ' '
answer += String.fromCharCode(code)
console.log(answer)