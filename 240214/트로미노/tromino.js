const fs = require('fs')
const [nums, ...arr] = fs.readFileSync(0).toString().trim().split('\n')
const [N, M] = nums.split(' ').map(Number)
const board = arr.map(row => row.split(' ').map(Number))
const dir = [[-1, 1], [-1, -1], [1, -1], [1, 1]]
let max = 0

// 가로 
for (let i=0;i<N;i++) {
    for (let j=0;j<M-2;j++) {
        const sum = (board[i][j] + board[i][j+1] + board[i][j+2])
        max = Math.max(max, sum)
    }
}


// 세로 
for (let i=0;i<M;i++) {
    for (let j=0;j<N-2;j++) { 
       const sum = (board[j][i] + board[j+1][i] + board[j+2][i])
       max = Math.max(max, sum)
    }
}

// 1번 모양 
for (let i=0;i<N;i++) {
    for (let j=0;j<M;j++) {
        for (let [dx, dy] of dir) {     
            let sum = board[i][j] 
            const nx = i + dx
            const ny = j + dy

            if (nx < 0 || ny < 0 || nx >= N || ny >= M) continue 
            sum +=  (board[i][ny] + board[nx][j])
            max = Math.max(max, sum)
        }
    }
}

console.log(max)