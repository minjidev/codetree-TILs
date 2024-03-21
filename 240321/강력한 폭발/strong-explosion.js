// 1인 위치에 3가지 폭탄 유형 확인 
const fs = require('fs')
const [n, ...input] = fs.readFileSync(0).toString().trim().split('\n')
const N = +n
const board = input.map(row => row.split(' ').map(Number))
const dir = [
    [[-2, 0], [-1, 0], [1, 0], [2, 0]],
    [[-1, 0], [1, 0], [0, -1], [0, 1]],
    [[-1, -1], [1, 1], [1, -1], [-1, 1]]
]
const tmp = Array(N*N).fill(0) // 방향 정할 배열 
let bombsCount = 0
let maxArea = 0


// 폭발할 개수 
for (let i=0;i<N;i++) {
    for (let j=0;j<N;j++) {
        if (board[i][j] === 1) {
            bombsCount += 1
        }
    }
}

function DFS(L) {
    if (L === bombsCount) {
        let exploded = 0
        let dirIndex = 0
        const copy = Array.from({ length: N }, () => Array(N).fill(0))
        
        // 복사 
        for (let i=0;i<N;i++) {
            for (let j=0;j<N;j++) {
                copy[i][j] = board[i][j]
            }
        }

        
        // 폭발 영역 확인
        for (let i=0;i<N;i++) {
            for (let j=0;j<N;j++) {
                if (board[i][j] === 0) continue
                // 시작점 폭발 = 2
                if (copy[i][j] !== 2) {
                    copy[i][j] = 2
                    exploded += 1
                }
               
                // 나머지 폭발
                for (let k=0;k<4;k++) {
                    const idx = tmp[dirIndex]
                    const nx = i + dir[idx][k][0]
                    const ny = j + dir[idx][k][1]

                    if (nx < 0 || ny < 0 || nx >= N || ny >= N) continue
                    if (copy[nx][ny] === 2) continue 

                    copy[nx][ny] = 2
                    exploded += 1
                }

                // 다음 방향 
                dirIndex += 1

            }
        }

        maxArea = Math.max(maxArea, exploded)

        return 
    }

    // 방향 설정
    for (let i=0;i<3;i++) {
        tmp[L] = i
        DFS(L+1)
    }

}

DFS(0)

console.log(maxArea)