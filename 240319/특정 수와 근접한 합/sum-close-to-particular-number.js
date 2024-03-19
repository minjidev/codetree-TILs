const fs = require('fs')
const [n, arr] = fs.readFileSync(0).toString().trim().split('\n')
const [N, S] = n.split(' ').map(Number)
const nums = arr.split(' ').map(Number)
let minDiff = Number.MAX_SAFE_INTEGER

for (let i=0;i<N;i++) {
    for (let j=i+1;j<N;j++) {
        // 합 구하기
        let sum = 0
        for (let k=0;k<N;k++) {
            if (k === i || k === j) continue

            sum += nums[k]
        }

        const diff = Math.abs(S - sum)
        minDiff = Math.min(minDiff, diff)   
    }
}

console.log(minDiff)