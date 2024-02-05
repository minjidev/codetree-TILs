const fs = require('fs')
const N = +fs.readFileSync(0).toString().trim()

const answer = Array.from({ length: N }, (v, i) => Array(i+1).fill(0))

for (let i=0;i<N;i++) {
    answer[i][0] = 1
    answer[i][answer[i].length-1] = 1
    
}

for (let i=2;i<N;i++) {
    for (let j=1;j<answer[i].length-1;j++) {
        answer[i][j] = answer[i-1][j-1] + answer[i-1][j]
    }
}

console.log(answer.map(row => row.join(' ')).join('\n'))