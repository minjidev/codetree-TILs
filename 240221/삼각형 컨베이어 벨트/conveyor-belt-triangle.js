const fs = require('fs')
const [nums, ...arr] = fs.readFileSync(0).toString().trim().split('\n')

const [N, T] = nums.split(' ').map(Number)
const board = arr.map(row => row.trim().split(' ').map(Number))

let seconds = 0

while (seconds < T) {
    const tmp = [board[0][N-1], board[1][N-1], board[2][N-1]]

    for (let i=N-1;i>=1;i--) {
        for (let j=0;j<3;j++) {
            board[j][i] = board[j][i-1]
        }
    }

    board[1][0] = tmp[0]
    board[2][0] = tmp[1]
    board[0][0] = tmp[2]

    seconds +=1 

}

console.log(board.map(row => row.join(' ')).join('\n'))