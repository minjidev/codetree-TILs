const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split('\n')
const arr = input.map(row => row.split(' ').map(Number))
let answer = Array.from({ length: 3}, () => [])
const r = arr.length
const c = arr[0].length
const getAverage = (sum, len) => {
    return (sum / len).toFixed(1)
}

for (let i=0;i<r;i++) {
    let sum = 0
    for (let j=0;j<c;j++) {
        sum += arr[i][j]
    }
    answer[0].push(getAverage(sum, c))
}


for (let i=0;i<c;i++) {
    let sum = 0
    for (let j=0;j<r;j++) {
        sum += arr[j][i]
    }
    answer[1].push(getAverage(sum, r))
}

let total = 0
for (let i=0;i<r;i++) {
    for (let j=0;j<c;j++) {
        total += arr[i][j]
    }
}


answer[2].push(getAverage(total, r * c))

console.log(answer.map(row => row.join(' ')).join('\n'))