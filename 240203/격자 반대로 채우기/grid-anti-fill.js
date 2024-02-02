const fs = require('fs')
const N = +fs.readFileSync(0).toString().trim().split(' ')
const answer = Array.from({ length: N }, () => Array(N).fill(0))
const isEven = N % 2 === 0
let num = 0


for (let i=N-1;i>=0;i--) {
    if (isEven) {
        if (i % 2 === 1) {
            for (let j=N-1;j>=0;j--) {
                num += 1
                answer[j][i] = num
            }
        } else {
            for (let j=0;j<N;j++) {
                num += 1
                answer[j][i] = num
            }
        }
    } else {
        if (i % 2 === 0) {
            for (let j=N-1;j>=0;j--) {
                num += 1
                answer[j][i] = num
            }
        } else {
            for (let j=0;j<N;j++) {
                num += 1
                answer[j][i] = num
            }
        }
    }
   
   
}

console.log(answer.map(row => row.join(' ')).join('\n'))