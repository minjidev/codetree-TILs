const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split('\n')

const board = input.map(row => row.split(' ').map(Number))
let sum = 0

for (let i=0;i<4;i++) {
    for (let j=0;j<4;j++) {
        if (j<=i) {
            sum += board[i][j]
        }
    }
}

console.log(sum)