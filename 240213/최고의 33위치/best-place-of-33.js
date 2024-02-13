const fs = require('fs')
const [n, ...arr] = fs.readFileSync(0).toString().trim().split('\n')

const N = +n
const board = arr.map(row => row.split(' ').map(Number))

let max = 0
for (let i=0;i<N-2;i++) {
    for (let j=0;j<N-2;j++) {
        let count = 0
        for (let k=0;k<3;k++) {
            for (let l=0;l<3;l++) {
                if (board[i+k][j+l] === 1) count += 1
            }
        }
        max = Math.max(count, max)
    }
}

console.log(max)