// K*2+1 크기 구간의 사탕 수 최대 -> 중심점(시작점 + K) 구하기 
// index: 사탕 개수 배열 

const fs = require('fs')
const [n, ...a] = fs.readFileSync(0).toString().trim().split('\n')

const [N, K] = n.split(' ').map(Number)
const arr = a.map(row => row.split(' ').map(Number))
const MAX_LEN = 100
const candies = Array(MAX_LEN).fill(0)
const size = 2*K+1

let maxCount = 0

for (let [val, idx] of arr) {
    candies[idx] += val
}


for (let i=0;i<MAX_LEN-size;i++) {
    let count = 0
    for (let j=0;j<size;j++) {
        // 사탕 개수 구하기 
        count += candies[i+j]
    }

    maxCount = Math.max(maxCount, count)
}

console.log(maxCount)