const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split('\n')

const words = input.slice(0, input.length-1)
const last = input.at(-1)
const answer = []
for (let word of words) {
    if (word.at(-1) === last) {
        answer.push(word)
    }
}

if (answer.length === 0) {
    console.log('None')
} else {
    console.log(answer.join('\n'))
}