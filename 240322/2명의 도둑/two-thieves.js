// 사각형 2개 고르는 완탐 + 행에서 연속한 M 구간을 찾는 백트래킹 

const fs = require('fs')
const [n, ...arr] = fs.readFileSync(0).toString().trim().split('\n')
const [N, M, C] = n.split(' ').map(Number)
const board = arr.map(row => row.split(' ').map(Number))
const MAX_M = 5
const tmp = Array(MAX_M).fill(0)
let maxCount = 0
let answer = 0


function possible(sx1, sy1, sx2, sy2) {
    // 격자를 넘어가면 불가능 
    if (sy1 + M - 1 >= N || sy2 + M - 1 >= N) {
        return false
    }

    // 행이 다르거나 행이 같고 겹치지 않는 경우 가능 
    if (sx1 !== sx2 || (sx1 === sx2 && sy1 + M - 1 < sy2)) {
        return true
    }

    // 아니면 불가능 
    return false
}

// DFS(현재 index, 무게, 가치)
function DFS(L, weight, val) {
    if (L === M) {
        // C를 넘지 않으면 갱신
        if (weight <= C) {
            maxCount = Math.max(maxCount, val)
        }

        return maxCount
    }

    // 선택 X 
    DFS(L+1, weight, val)

    // 선택 
    DFS(L+1, weight + tmp[L], val + tmp[L] * tmp[L])
}

// (sx, sy) ~ (sx, sy + M - 1) 구간에서 C이하 최댓값 찾기 
function findMax(sx, sy) {
    // tmp로 해당 구간 배열 생성
    for (let i=0;i<M;i++) {
        tmp[i] = board[sx][sy+i]
    }

    // 해당 구간의 최댓값 찾기
    maxCount = 0
    DFS(0, 0, 0)

    return maxCount
}

// 각 구간: (sx1, sy1) ~ (sx1, sy1 + M - 1), (sx2, sy2) ~ (sx2, sy2 + M - 1)
for (let sx1=0;sx1<N;sx1++) {
    for (let sy1=0;sy1<N;sy1++) {
        for (let sx2=0;sx2<N;sx2++) {
            for (let sy2=0;sy2<N;sy2++) {
                // 두 도둑의 위치가 겹치지 않는지 확인
                if (possible(sx1, sy1, sx2, sy2)) {
                    const count = findMax(sx1, sy1) + findMax(sx2, sy2)
                    answer = Math.max(answer, count)
                }
            }
        }
    }
}

console.log(answer)