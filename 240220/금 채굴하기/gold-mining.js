const fs = require('fs')
const [nums, ...arr] = fs.readFileSync(0).toString().trim().split('\n')
const [N, M] = nums.split(' ').map(Number)
const board = arr.map(row => row.split(' ').map(Number))
const dir = [[1, -1], [1, 1], [-1, 1], [-1, -1]] // 4방향
let max = 0

const getCost = (k) => k * k + (k+1) * (k+1)

const isOutside = (x, y) => x < 0 || y < 0 || x >= N || y >= N

// 가장자리만 채굴 
const getGoldCount = (row, col, k) => {
  if (k === 0) {
    return board[row][col]
  }

  let goldCount = 0
  // 시작점 설정 
  let x = row - k
  let y = col

  for (let i=0;i<4;i++) {
    for (let j=0;j<k;j++) {
      if (!isOutside(x, y)) {
        goldCount += board[x][y]
      }

      x += dir[i][0]
      y += dir[i][1]
    }
  }

  return goldCount

}

for (let i=0;i<N;i++) {
  for (let j=0;j<N;j++) {
    let goldCount = 0
    // 가능한 k까지 
    for (let k=0;k<2*(N-1)+1;k++) {
      goldCount += getGoldCount(i, j, k)
      const cost = getCost(k)
      // 손해가 아닌 경우
      if (cost <= goldCount * M) {
        max = Math.max(max, goldCount)
      }
    }
  }
}

console.log(max)