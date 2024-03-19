const fs = require('fs')
const [n, arr] = fs.readFileSync(0).toString().trim().split('\n')

const [N, K] = n.split(' ').map(Number)
const nums = arr.split(' ').map(Number)
let maxSum = 0

for (let i=0;i<N-K+1;i++) {
    let sum = 0
    for (let j=0;j<K;j++) {
        sum += nums[i+j]
    }

    maxSum = Math.max(maxSum, sum)
}

console.log(maxSum)