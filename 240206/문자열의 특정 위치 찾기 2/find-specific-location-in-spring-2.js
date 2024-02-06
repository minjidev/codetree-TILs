const fs = require('fs')
const input = fs.readFileSync(0).toString().trim()

const fruits = ["apple", "banana", "grape", "blueberry", "orange"]
const answer = []

for (let f of fruits) {
    if (f[2] === input || f[3] === input ) {
        answer.push(f)
    }
}

console.log(answer.join('\n'))
console.log(answer.length)