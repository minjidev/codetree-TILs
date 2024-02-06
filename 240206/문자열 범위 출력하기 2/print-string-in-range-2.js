const fs = require('fs')
const [input,  num] = fs.readFileSync(0).toString().trim().split('\n')
const N = +num
const reversed = input.split('').reverse()

if (input.length <= N) {
    console.log(reversed.join(''))
} else {
    console.log(reversed.slice(0, +num).join(''))
}