const fs = require('fs')
const [nums, ...input] = fs.readFileSync(0).toString().trim().split('\n')

const [N, M] = nums.split(' ').map(Number)
const arr = input.map(row => row.split(' ').map(Number))
const answer = Array.from({ length: N }, () => Array(N).fill(0))

for (let [x, y] of arr) {
    answer[x-1][y-1] = 1
}

console.log(answer.map(row => row.join(' ')).join('\n'))