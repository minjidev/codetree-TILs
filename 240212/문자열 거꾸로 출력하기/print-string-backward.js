const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split('\n')

for (let word of input) {
    if (word === 'END') break
    console.log([...word].reverse().join(''))
}