const fs = require('fs')
const [n, ...arr] = fs.readFileSync(0).toString().trim().split('\n')

const N = +n
const points = arr.map(row => row.trim().split(' ').map(Number))
let minDis = Number.MAX_SAFE_INTEGER

for (let i=1;i<N-1;i++) {
    let prev = 0
    let sum = 0
    for (let j=1;j<N;j++) {
        if (i === j) continue

        sum += Math.abs(points[j][0] - points[prev][0]) + Math.abs(points[j][1] - points[prev][1])
        prev = j
    }

    minDis = Math.min(minDis, sum)
}

console.log(minDis)