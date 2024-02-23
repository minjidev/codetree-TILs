const fs = require('fs')
const [nums, ...arr] = fs.readFileSync(0).toString().trim().split('\n')

const [N, M, Q] = nums.split(' ').map(Number)
let board = arr.slice(0, N).map(row => row.trim().split(' ').map(Number))
const commands = arr.slice(N).map(row => row.trim().split(' ').map(Number).map(num => num - 1))
const dir = [[0, -1], [0, 1], [1, 0], [-1, 0]]

for ([r1, c1, r2, c2] of commands) {
    // 직사각형 회전 
    const topRight = board[r1][c2]
    const bottomRight = board[r2][c2]
    const bottomLeft = board[r2][c1] 
    
    for (let i=c2;i>c1;i--) {
        board[r1][i] = board[r1][i-1]
    }
    
    for (let i=r2;i>r1;i--) {
        board[i][c2] = board[i-1][c2]
    }
    
    for (let i=c1;i<c2;i++) {
        board[r2][i] = board[r2][i+1]
    }
    
    for (let i=r1;i<r2;i++) {
        board[i][c1] = board[i+1][c1]
    }

    board[r2][c2-1] = bottomRight
    board[r1+1][c2] = topRight
    board[r2-1][c1] = bottomLeft

    const newBoard = Array.from({ length: N }, () => Array(M).fill(0))

    for (let i=0;i<N;i++) {
        for (let j=0;j<M;j++) {
            if (i >= r1 && i <= r2 && j >= c1 && j <= c2) {
                const total = [board[i][j], 1] // [sum, count]
                for (let k=0;k<4;k++) {
                    const nx = i + dir[k][0]
                    const ny = j + dir[k][1]

                    if (nx < 0 || ny < 0 || nx >= N || ny >= M) continue
                    total[0] += board[nx][ny]
                    total[1] += 1
                }
                
                const [sum, count] = total
                newBoard[i][j] = Math.floor(sum / count)
            } else {
                newBoard[i][j] = board[i][j]
            }
        }
    }

    board = newBoard
}

console.log(board.map(row => row.join(' ')).join('\n'))