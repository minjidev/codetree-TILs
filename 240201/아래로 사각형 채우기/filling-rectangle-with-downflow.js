const fs = require('fs')
const N = +fs.readFileSync(0).toString().trim()
const answer = Array.from({ length: N }, () => Array(N).fill(0))
let num = 0

for (let i=0;i<N;i++) {
    for (let j=0;j<N;j++) {
        num += 1
        answer[j][i] = num
    }
}

console.log(answer.map(row => row.join(' ')).join('\n'))