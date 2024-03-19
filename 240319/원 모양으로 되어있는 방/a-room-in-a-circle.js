const fs = require('fs')
const [n, ...arr] = fs.readFileSync(0).toString().trim().split('\n')

const N = +n
const rooms = arr.map(Number)
let minDist = Number.MAX_SAFE_INTEGER

for (let i=0;i<N;i++) {
    let sumDist = 0
    for (let j=0;j<N;j++) {
        if (i === j) continue

        const dist = (j - i + N) % N
        sumDist += dist * rooms[j]
    }

    minDist = Math.min(minDist, sumDist)
}

console.log(minDist)