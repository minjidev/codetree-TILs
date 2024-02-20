const fs = require('fs')
const [nums, ...arr] = fs.readFileSync(0).toString().trim().split('\n')
const [N, M] = nums.split(' ').map(Number)
const board = arr.map(row => row.split(' ').map(Number))
const dir = [[1, -1], [1, 1], [-1, 1], [-1, -1]] // 4방향
let max = 0

const getCost = (k) => k * k + (k+1) * (k+1)

const isOutside = (x, y) => x < 0 || y < 0 || x >= N || y >= N

const getGoldCount = (row, col, k) => {
  let goldCount = board[row][col] // 중심점

  for (let i=1;i<=k;i++) {
    // 시작점 지정
    let x = row - i
    let y = col
    // 4방향 순회 
    for (let j=0;j<4;j++) {
      for (let l=0;l<k;l++) {
        if (isOutside(x, y)) continue

        // 금 채굴 
        goldCount += board[x][y]

        // 이동 
        x += dir[j][0]
        y += dir[j][1]
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
      // 손해가 아닌 경우
      if (cost <= goldCount * M) {
        max = Math.max(max, goldCount)
      }
    }
  }
}

console.log(max)