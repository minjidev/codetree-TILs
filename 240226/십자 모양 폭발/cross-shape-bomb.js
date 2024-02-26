const fs = require('fs')
const [n, ...arr] = fs.readFileSync(0).toString().trim().split('\n')

const N = +n
const board = arr.slice(0, N).map(row => row.trim().split(' ').map(Number))
const [sx, sy] = arr[N].split(' ').map(Number).map(num => num-1)
const dir = [[-1, 0], [1, 0], [0, -1], [0, 1]]

const num = board[sx][sy]
board[sx][sy] = 0
// 터뜨리기: 중앙 -> 4방향 각각 격자 내에서 숫자만큼 진행 
for (let i=0;i<4;i++) {
    let x = sx
    let y = sy
    for (let j=0;j<num-1;j++) {
        const nx = x + dir[i][0]
        const ny = y + dir[i][1]

        if (nx < 0 || ny < 0 || nx >= N || ny >= N) break

        board[nx][ny] = 0
        x = nx
        y = ny
    }
}


const tmp = Array.from({ length: N }, () => Array(N).fill(0))
// 열 순회 -> 뒤에서부터 tmp에 담기 
for (let i=0;i<N;i++) {
    let tmpEnd = N-1
    for (let j=N-1;j>=0;j--) {
        if (board[j][i] !== 0) {
            tmp[tmpEnd][i] = board[j][i]
            tmpEnd -= 1
        } 
    }
}

console.log(tmp.map(row => row.join(' ')).join('\n'))