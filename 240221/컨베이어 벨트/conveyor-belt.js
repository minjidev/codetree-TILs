const fs = require('fs')
const [nums, ...arr] = fs.readFileSync(0).toString().trim().split('\n')
const [N, T] = nums.split(' ').map(Number)
const board = arr.map(row => row.trim().split(' ').map(Number))
board[1].reverse()


for (let i=0;i<T;i++) {
    const last = board[0][N-1]
    const first = board[1][0]

    for (let i=N-1;i>=1;i--) {
        board[0][i] = board[0][i-1]
    }

    for (let i=0;i<N-1;i++) {
        board[1][i] = board[1][i+1]
    }

    board[0][0] = first
    board[1][N-1] = last
}

board[1].reverse()
console.log(board.map(row => row.join(' ')).join('\n'))