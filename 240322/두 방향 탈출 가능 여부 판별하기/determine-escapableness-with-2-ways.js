// DFS로 아래/오른쪽으로 이동하여 (N-1, M-1)에 도달하면 count +=1 
// count = 0이면 0반환 아니면 1반환 

const fs = require('fs')
const [nums, ...arr] = fs.readFileSync(0).toString().trim().split('\n')
const [N, M] = nums.split(' ').map(Number)
const board = arr.map(row => row.split(' ').map(Number))
const dir = [[0, 1], [1, 0]]
let count = 0

function DFS(x, y) {
    // 끝 칸에 도달
    if (x === N-1 && y === M-1) {
        count = 1
    }

    for (let k=0;k<2;k++) {
        const nx = x + dir[k][0]
        const ny = y + dir[k][1]

        if (nx < 0 || ny < 0 || nx >= N || ny >= M) continue
        if (board[nx][ny] === 0) continue

        
        board[nx][ny] = 0
        DFS(nx, ny)
    }
}

board[0][0] = 0
// DFS(0, 0)
console.log(count)