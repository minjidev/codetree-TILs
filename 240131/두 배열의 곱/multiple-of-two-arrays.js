const fs = require('fs')
const [a, b] = fs.readFileSync(0).toString().trim().split('\n\n')
const arr1 = a.split('\n').map(row => row.split(' ').map(Number))
const arr2 = b.split('\n').map(row => row.split(' ').map(Number))
const answer = Array(3).fill('')

for (let i=0;i<3;i++) {
    for (let j=0;j<3;j++) {
        answer[i] += (arr1[i][j] * arr2[i][j]) + ' '
    }
}

console.log(answer.join('\n'))