const fs = require('fs')
const [n, ...arr] = fs.readFileSync(0).toString().trim().split('\n')
const [N, K] = n.split(' ').map(Number) // K+1 구간 확인
const ppl = arr.map(row => row.split(' ').map(v => isNaN(v) ? v : Number(v)))
const MAX_LEN = 10000
const alphabets = Array(MAX_LEN).fill(0)
let maxSum = 0

for (let [i, v] of ppl) {
    alphabets[i] = (v === 'G' ? 1 : 2)
}

console.log(alphabets)


for (let i=0;i<=MAX_LEN-K;i++) {
    let sum = 0
    for (let j=i;j<i+K+1;j++) {
        // console.log(alphabets[j])
        sum += alphabets[j]

        // if (alphabets[i+j] === 'G') {
        //     sum += 1
        // } 
        
        // if (alphabets[i+j] === 'H') {
        //     sum += 2
        // }
    }
    // console.log(sum)

    maxSum = Math.max(maxSum, sum)
}

console.log(maxSum)