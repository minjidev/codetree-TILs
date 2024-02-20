const fs = require('fs')
const [n, ...arr] = fs.readFileSync(0).toString().trim().split('\n')

const N = +n
const board = arr.map(row => row.split(' ').map(Number))
const dir = [[-1, 1], [-1, -1], [1, -1], [1, 1]]
let maxSum = 0

const isOutside = (x, y) => {
    return x < 0 || y < 0 || x >= N || y >= N
}

const getSum = (curX, curY, w, h) => {
    let sum = 0
    const moveNum = [w, h, w, h]
    // 시작점 

    for (let i=0;i<4;i++) {
        for (let j=0;j<moveNum[i];j++) {
            // 이동하다 범위 벗어나면 중단 
            if (isOutside(curX, curY)) {
                return 0
            }

            sum += board[curX][curY]

            curX += dir[i][0]
            curY += dir[i][1]
        }
    }

    return sum 
}

const maxLen = 2*(N-1)
for (let i=0;i<N;i++) {
    for (let j=0;j<N;j++) {
        // 직사각형 가로, 세로 
        for (let k=1;k<maxLen;k++) {
            for (let l=1;l<maxLen;l++) {
                maxSum = Math.max(maxSum, getSum(i, j, k, l))
            }
        }
    }
}

console.log(maxSum)