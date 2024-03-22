// 터지면 0, 터지는 블록 수: blockCount, 최대 블럭 크기: maxCount 
const fs = require('fs')
const [n, ...input] = fs.readFileSync(0).toString().trim().split('\n')

const N = +n
const board = input.map(row => row.split(' ').map(Number))
const ch = Array.from({ length: N }, () => Array(N).fill(0))
const dir = [[0, -1], [0, 1], [-1, 0], [1, 0]]
let blockCount = 0
let maxCount = 0
let area = 0


for (let i=0;i<N;i++) {
    for (let j=0;j<N;j++) {
        if (ch[i][j] === 1) continue
        
        area = 0
        ch[i][j] = 1
        DFS(i, j)

        if (area >= 4) {
            blockCount += 1
            maxCount = Math.max(maxCount, area)
        }
    }
}


function DFS(x, y) {
    const cur = board[x][y]
    area += 1

    for (let k=0;k<4;k++) {
        const nx = x + dir[k][0]
        const ny = y + dir[k][1]

        if (nx < 0 || ny < 0 || nx >= N || ny >= N) continue
        if (ch[nx][ny] === 1) continue

        if (cur === board[nx][ny]) {
            ch[nx][ny] = 1
            DFS(nx, ny)
        }
    }
}

console.log([blockCount, maxCount].join(' '))