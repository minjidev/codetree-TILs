const fs = require('fs')
const [nums, ...arr] = fs.readFileSync(0).toString().trim().split('\n')
const [N, M] = nums.split(' ').map(Number)
const arr1 = arr.slice(0, N).map(row => row.split(' ').map(Number))
const arr2 = arr.slice(N).map(row => row.split(' ').map(Number))
const answer = Array.from({ length: N }, () => Array(M).fill(0))

for (let i=0;i<N;i++) {
    for (let j=0;j<M;j++) {
        if (arr1[i][j] !== arr2[i][j]) {
            answer[i][j] = 1
        }
    }
}

console.log(answer.map(row => row.join(' ')).join('\n'))