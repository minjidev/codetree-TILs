const fs = require("fs")
let input = fs.readFileSync(0).toString().trim().split('\n')
const arr = input.map(row => row.split(' ').map(Number))
let answer = []

for (let i=0;i<arr.length;i++) {
    let sum = 0
    for (let j=0;j<arr[0].length;j++) {
        sum += arr[i][j]
    }
    answer.push(sum)
}

console.log(answer.join('\n'))