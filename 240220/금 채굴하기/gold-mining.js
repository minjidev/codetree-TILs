const fs = require('fs')
const [nums, ...arr] = fs.readFileSync(0).toString().trim().split('\n')
const [N, M] = nums.split(' ').map(Number)
const board = arr.map(row => row.split(' ').map(Number))
let max = 0
const getCost = (k) => k * k + (k+1) * (k+1)

const getGoldCount = (row, col, k) => {
  let goldCount = 0
  for (let i=0;i<N;i++) {
    for (let j=0;j<N;j++) {
      if (Math.abs(i-row) + Math.abs(j-col) <=k) {
        goldCount += board[i][j]
      }
    }
  }

  return goldCount
}

for (let i=0;i<N;i++) {
  for (let j=0;j<N;j++) {
    // 가능한 k까지 
    for (let k=0;k<2*(N-1)+1;k++) {
      const goldCount = getGoldCount(i, j, k)
      const cost = getCost(k)
      if (goldCount * M < cost) continue
      // 손해가 아닌 경우
      max = Math.max(max, goldCount)
    }
  }
}

console.log(max)