const fs = require('fs')
const [nums, ...arr] = fs.readFileSync(0).toString().trim().split('\n')

const [N, T] = nums.split(' ').map(Number)
const board = arr.map(row => row.split(' ').map(Number))

for (let i=0;i<T;i++) {
    const firstLast = board[0][N-1]
    const secondLast = board[1][N-1]

    // 밀기 
    for (let i=N-1;i>=1;i--) {
        board[0][i] = board[0][i-1]
        board[1][i] = board[1][i-1]
    }

    board[0][0] = secondLast
    board[1][0] = firstLast
}

console.log(board.map(row => row.join(' ')).join('\n'))