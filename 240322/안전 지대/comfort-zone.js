const fs = require('fs')
const [nums, ...input] = fs.readFileSync(0).toString().trim().split('\n')

// K보다 큰 영역(안전영역)만 DFS 해서 개수 세기 -> 최대값 구하기 

const [N, M] = nums.split(' ').map(Number)
const board = input.map(row => row.split(' ').map(Number))
const dir = [[0, -1], [0, 1], [1, 0], [-1, 0]]
let tmp = Array.from({ length: N }, () => Array(M).fill(0))
let maxCount = 0
let minK = Number.MAX_SAFE_INTEGER
let maxH = 0

function copy() {
    for (let i=0;i<N;i++) {
        for (let j=0;j<M;j++) {
            tmp[i][j] = board[i][j]        
        }
    }
}

function DFS(x, y, h) {
    // 방문 표시 
    tmp[x][y] = 0

    for (let k=0;k<4;k++) {
        const nx = x + dir[k][0]
        const ny = y + dir[k][1]

        if (nx < 0 || ny < 0 || nx >= N || ny >= M) continue
        if (tmp[nx][ny] === 0) continue
        
        if (tmp[nx][ny] > h) {
            tmp[nx][ny] = 0
            DFS(nx, ny, h)
        }
    }

}

for (let i=0;i<N;i++) {
    for (let j=0;j<M;j++) {
        maxH = Math.max(maxH, board[i][j])
    }
}

for (let h=1;h<=maxH;h++) {
    copy()
    let safeAreaCount = 0
    for (let x=0;x<N;x++) {
        for (let y=0;y<M;y++) {
            if (tmp[x][y] === 0) continue
            // K보다 높은 영역(안전영역)만 DFS 
            if (board[x][y] > h) {
                safeAreaCount += 1
                DFS(x, y, h)
            }
        }
    }

    // 갱신 
    if (maxCount < safeAreaCount) {
        maxCount = safeAreaCount
        minK = h
    } 
}

console.log([minK, maxCount].join(' '))