const fs = require('fs')
const [nums, ...arr] = fs.readFileSync(0).toString().trim().split('\n')

const [N, M] = nums.split(' ').map(Number)
const board = arr.map(row => row.split(' ').map(Number))
const dir = [[-1, 1], [-1, -1], [1, -1], [1, 1]]
let max = 0

const getSeqSum = (arr) => {
    return arr.reduce((acc, cur) => acc + cur, 0)
}

// 가로 
for (let i=0;i<N;i++) {
    max = Math.max(max, getSeqSum(board[i]))
}


// 세로 
for (let i=0;i<M;i++) {
    let seq = Array(N).fill(0)
    for (let j=0;j<N;j++) {
        seq[i] = board[i][j]
    }
    max = Math.max(max, getSeqSum(seq))
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