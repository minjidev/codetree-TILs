const fs = require('fs')
const [nums, ...arr] = fs.readFileSync(0).toString().trim().split('\n')

const [N, M] = nums.split(' ').map(Number)
const board = arr.map(row => row.split(' ').map(Number))
let maxSize = 0

const getRectSize = (x1, y1, x2, y2) => {
    let rectSize = 0
    for (let i=x1;i<=x2;i++) {
        for (let j=y1;j<=y2;j++) {
            if (board[i][j] < 0) return 0
            rectSize += 1
        }
    }
    
    return rectSize
}

// (i, j), (k, l)를 꼭지점으로 하는 사각형 
for (let i=0;i<N;i++) {
    for (let j=0;j<M;j++) {
        for (let k=i;k<N;k++) {
            for (let l=j;l<M;l++) {
                maxSize = Math.max(maxSize, getRectSize(i, j, k, l))
            }
        }
    }
}

console.log(maxSize || -1)