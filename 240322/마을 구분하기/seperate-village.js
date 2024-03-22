const fs = require('fs')
const [n, ...input] = fs.readFileSync(0).toString().trim().split('\n')

const N = +n
const board = input.map(row => row.split(' ').map(Number))
const dir = [[0, -1], [0, 1], [-1, 0], [1, 0]]
let count = 0
let ans = []

for (let i=0;i<N;i++) {
    for (let j=0;j<N;j++) {
        if (board[i][j] === 0) continue

        count = 0
        board[i][j] = 0
        DFS(i, j)
        ans.push(count)
    }
}

function DFS(x, y) {
    count += 1
    for (let k=0;k<4;k++) {
        const nx = x + dir[k][0]
        const ny = y + dir[k][1]

        if (nx < 0 || ny < 0 || nx >= N || ny >= N) continue
        if (board[nx][ny] === 0) continue

        board[nx][ny] = 0
        DFS(nx, ny)
    }
}

console.log(ans.length)
console.log(ans.sort((a, b) => a - b).join('\n'))