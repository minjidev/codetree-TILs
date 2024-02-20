const fs = require('fs')
const [n, ...arr] = fs.readFileSync(0).toString().trim().split('\n')

const N = +n
const board = arr.map(row => row.split(' ').map(Number))
const dir = [[-1, 1], [-1, -1], [1, -1], [1, 1]]
let maxSum = 0

const isOutside = (x, y) => {
    return x < 0 || y < 0 || x >= N || y >= N
}

const getSum = (row, col, k) => {
    let sum = 0
    // 시작점 
    let x = row + k
    let y = col

    for (let i=0;i<4;i++) {
        for (let j=0;j<k;j++) {
            // 이동하다 범위 벗어나면 중단 
            if (isOutside(x, y)) {
                return 0
            }

            sum += board[x][y]

            x += dir[i][0]
            y += dir[i][1]
        }
    }

    return sum 
}

for (let i=0;i<N;i++) {
    for (let j=0;j<N;j++) {
        for (k=1;k<2*(N-1);k++) {
            // 각 좌표에서 k일 때 합 구하기 
            maxSum = Math.max(maxSum, getSum(i, j, k))
        }
    }
}

console.log(maxSum)