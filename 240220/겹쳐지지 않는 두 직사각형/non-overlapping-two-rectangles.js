const fs = require('fs')
const [nums, ...arr] = fs.readFileSync(0).toString().trim().split('\n')

const [N, M] = nums.split(' ').map(Number)
const board = arr.map(row => row.split(' ').map(Number))
let maxSum = Number.MIN_SAFE_INTEGER


const getSum = (x, y, w, h) => {
    let sum = 0

    for (let i=x;i<=x+h;i++) {
        for (let j=y;j<=y+w;j++) {
            sum += board[i][j]
        }
    }
    
    return sum
}

const getMaxSum = (x, y, w1, h1) => {
    const sum = getSum(x, y, w1, h1)
    let maxSum = Number.MIN_SAFE_INTEGER

    // 두 번째 사각형 만들기 
    for (let i=0;i<N;i++) {
        for (let j=0;j<M;j++) {
            for (let w2=0;w2<M;w2++) {
                for (let h2=0;h2<N;h2++) {
                    // 가로 세로 끝이 범위를 벗어나면 무시 
                    if (i + h2 >= N || j + w2 >= M) continue
                    // 사각형 외부라면 
                    if (x + h1 < i || y + w1 < j) {
                        const total = sum + getSum(i, j, w2, h2)
                        maxSum = Math.max(maxSum, total)
                    }
                   
                }
            }
        }
    }

    return maxSum

}

// 첫 번째 직사각형 
for (let i=0;i<N;i++) {
    for (let j=0;j<M;j++) {
        // 직사각형 가로, 세로 최대 
        for (let w=0;w<M;w++) {
            for (let h=0;h<N;h++) {
                // 만약 가로 세로 끝이 범위를 벗어나면 무시 
                if (i + h >= N || j + w >= M) continue
                maxSum = Math.max(maxSum, getMaxSum(i, j, w, h))
            }
        }
    }
}

console.log(maxSum)