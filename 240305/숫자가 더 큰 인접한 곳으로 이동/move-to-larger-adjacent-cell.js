const fs = require('fs')
const [nums, ...arr] = fs.readFileSync(0).toString().trim().split('\n')

const [N, R, C] = nums.split(' ').map(Number)
const board = arr.map(row => row.trim().split(' ').map(Number))
const dir = [[-1, 0], [1, 0], [0, -1], [0, 1]] // 상하좌우 순서 
let curX = R-1
let curY = C-1
const path = [board[curX][curY]]

function isOutside(x, y) {
    return x < 0 || y < 0 || x >= N || y >= N
}

function move() {
    const cur = board[curX][curY]

    for (let k=0;k<4;k++) {
        const nx = curX + dir[k][0]
        const ny = curY + dir[k][1]

        if (isOutside(nx, ny)) continue
        if (cur < board[nx][ny]) {
            curX = nx 
            curY = ny
            path.push(board[nx][ny])
            return true
        }
    }
    return false
}

while (true) {
    const isMoved = move()

    if (!isMoved) break
}

console.log(path.join(' '))