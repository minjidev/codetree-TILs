const fs = require('fs')
const [n, ...input] = fs.readFileSync(0).toString().trim().split('\n')

const N = +n
const words = input.slice(0, input.length - 1)
const start = input.at(-1)
let count = 0
let lenSum = 0

for (let word of words) {
    if (word[0] === start) {
        count += 1
        lenSum += word.length
    }
}

console.log(count, (lenSum / count).toFixed(2))