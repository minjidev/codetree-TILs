const fs = require('fs')
const [n, arr] = fs.readFileSync(0).toString().trim().split('\n')

const N = +n
const nums = arr.split(' ').map(Number)
let minDis = Number.MAX_SAFE_INTEGER

for (let i=0;i<N;i++) {
    let dis = 0
    for (let j=0;j<N;j++) {
        if (i === j) continue

        dis += Math.abs(i-j) * nums[j]
    }

    minDis = Math.min(minDis, dis)
}

console.log(minDis)