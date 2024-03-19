// (i, j) i= 0~N-1, j= 0~N-2
// (k, l) k= i+1~N-1, l= j+1~N-2

const fs = require('fs')
const [n, ...arr] = fs.readFileSync(0).toString().trim().split('\n')

const N = +n
const board = arr.map(row => row.split(' ').map(Number))
let maxCount = 0

for (let i=0;i<N;i++) {
    for (let j=0;j<N-2;j++) {
        for (let k=0;k<N;k++) {
            for (let l=0;l<N-2;l++) {
                // 사각형 겹치지 않는 경우 
                if (i < k || j < l) {
                    const firstCount = board[i][j] + board[i][j+1] + board[i][j+2]
                    const secondCount = board[k][l] + board[k][l+1] + board[k][l+2]
    
                    maxCount = Math.max(maxCount, firstCount + secondCount)
                }
               
            }
        }
    }
}

console.log(maxCount)