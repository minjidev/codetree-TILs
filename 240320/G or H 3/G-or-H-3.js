const fs = require('fs')
const [n, ...arr] = fs.readFileSync(0).toString().trim().split('\n')

const [N, K] = n.split(' ').map(Number) // K+1칸 검사 필요
const ppl = arr.map(row => row.split(' ').map(v => isNaN(v) ? v : Number(v)))
const maxLen = Math.max(...ppl.map(([a, b]) => a))
const alphabets = Array(maxLen).fill(0)
let maxSum = 0

for (let [i, v] of ppl) {
    alphabets[i] = v
}

for (let i=0;i<maxLen-K+2;i++) {
    let sum = 0
    for (let j=0;j<K+1;j++) {
        if (alphabets[i+j] === 'G') {
            sum += 1
        } 
        
        if (alphabets[i+j] === 'H') {
            sum += 2
        }
    }

    maxSum = Math.max(maxSum, sum)
}

console.log(maxSum)