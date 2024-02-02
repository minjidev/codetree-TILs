const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split(' ')
const [N, M] = input.map(Number)  
const answer = Array.from({ length: N }, () => Array(M).fill(0))
const end = N + M - 1  
let num = 0


for (let i=0;i<end;i++) { // 더해서 나오는 값(0~4)
    for (let j=0;j<=i;j++) {
        if (j >= N || i-j >= M) continue
        num += 1 
        answer[j][i-j] = num 
    }
}

console.log(answer.map(row => row.join(' ')).join('\n'))