const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split(' ')

const [N, M] = input.map(Number)
const answer = Array.from({ length: N }, () => Array(M).fill(0))
let num = 0

for (let i=0;i<M;i++) { // 열
    if (i % 2 === 0) {
        for (let j=0;j<N;j++) { // 행
            answer[j][i] = num 
            num += 1
        } 
    } else {
        for (let j=N-1;j>=0;j--) { // 행
            answer[j][i] = num 
            num += 1
        } 
    }
}

console.log(answer.map(row => row.join(' ')).join('\n'))