// row 아래로 이동하면서 블럭의 아래 방향 확인 
// 하나라도 0이 아닌 경우 중단 
const fs = require('fs')
const [nums, ...arr] = fs.readFileSync(0).toString().trim().split('\n')
let [N, M, K] = nums.split(' ').map(Number)
K -= 1 
const board = arr.map(row => row.trim().split(' ').map(Number))
let row = -1


function isOutside(x, y) {
    return x < 0 || y < 0 || x >= N || y >= N
}

function move() {
    for (let i=K;i<K+M;i++) {
        const nx = row + 1
        const ny = i
        
        // 아래 방향이 격자판 외부이거나 공백이 아닌 경우 이동 불가 
        if (isOutside(nx, ny) || board[nx][ny] !== 0) {
            return false
        }

    }

    return true
}

while (true) {
    const isMovable = move()

    if (!isMovable) break

    // 가능하면 아래로 행 이동 
    row += 1
}

for (let i=K;i<K+M;i++) {
    board[row][i] = 1
}

console.log(board.map(row => row.join(' ')).join('\n'))