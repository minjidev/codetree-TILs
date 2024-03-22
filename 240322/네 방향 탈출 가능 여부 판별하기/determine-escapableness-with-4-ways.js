const fs = require('fs')
const [nums, ...arr] = fs.readFileSync(0).toString().trim().split('\n')

const [N, M] = nums.split(' ').map(Number)
const board = arr.map(row => row.split(' ').map(Number))
const dir = [[0, -1], [0, 1], [-1, 0], [1, 0]]

const q = []
board[0][0] = 0
q.push([0, 0])

while (q.length > 0) {
    const [x, y] = q.shift()

    for (let k=0;k<4;k++) {
        const nx = x + dir[k][0]
        const ny = y + dir[k][1]

        if (nx < 0 || ny < 0 || nx >= N || ny >= M) continue
        if (board[nx][ny] === 0) continue

        board[nx][ny] = 0
        q.push([nx, ny])
    }
}

const passExist = board[N-1][M-1] === 0 ? 1 : 0
console.log(passExist)