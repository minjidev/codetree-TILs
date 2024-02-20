const fs = require('fs')
const [nums, ...arr] = fs.readFileSync(0).toString().trim().split('\n')

const [N, M] = nums.split(' ').map(Number)
const board = arr.map(row => row.split(' ').map(Number))
let maxSum = Number.MIN_SAFE_INTEGER


const getSum = (x1, y1, x2, y2) => {
    let sum = 0

    for (let i=x1;i<=x2;i++) {
        for (let j=y1;j<=y2;j++) {
            sum += board[i][j]
        }
    }

    return sum
}

const getMaxSum = (x1, y1, x2, y2) => {
    const sum = getSum(x1, y1, x2, y2)
    let maxSum = Number.MIN_SAFE_INTEGER

    // 두 번째 사각형 만들기 
    for (let i=0;i<N;i++) {
        for (let j=0;j<M;j++) {
            for (let k=i;k<N;k++) {
                for (let l=j;l<M;l++) {
                    // 사각형 외부라면 
                    if (x2 < i || y2 < j) {
                        const total = sum + getSum(i, j, k, l)
                        maxSum = Math.max(maxSum, total)
                    }
                   
                }
            }
        }
    }

    return maxSum

}

// 첫 번째 직사각형 (i, j), (k, l)을 꼭지점으로
for (let i=0;i<N;i++) {
    for (let j=0;j<M;j++) {
        for (let k=i;k<N;k++) {
            for (let l=j;l<M;l++) {
                maxSum = Math.max(maxSum, getMaxSum(i, j, k, l))
            }
        }
    }
}

console.log(maxSum)