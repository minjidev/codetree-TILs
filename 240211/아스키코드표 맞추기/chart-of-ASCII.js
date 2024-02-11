const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split(' ')
let answer = ''
const getStrFromCharCode = (code) => {
    return String.fromCharCode(code)
}

for (let code of input) {
    answer += getStrFromCharCode(code) + ' '
}

console.log(answer)