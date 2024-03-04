const fs = require('fs')
const [nums, ...arr] = fs.readFileSync(0).toString().trim().split('\n')
const [N, M, K] = nums.split(' ').map(Number)
const board = arr.map(row => row.trim().split(' ').map(Number))
let tmp = Array.from({ length: N }, () => Array(N).fill(0))

// 복사 
function copy() {
    for (let i=0;i<N;i++) {
        for (let j=0;j<N;j++) {
            board[i][j] = tmp[i][j]
        }
    }
}

// 현재 요소 기준 동일한 요소 
function getLastIndexOf(row, col, val) {
    let end = row + 1
    while (end < N) {
        if (board[end][col] === val) {
            end +=1 
        } else {
            break
        }
    }

    return end - 1
}

// 폭발 
// 각 열의 연속하는 숫자의 마지막 index를 찾아서 (개수) >= M이면 0으로 변경 
function explode() {
    for (let i=0;i<N;i++) {
        while (true) {
            let didExplode = false
            for (let j=0;j<N;j++) {
                const cur = board[j][i]

                if (cur === 0) continue

                const end = getLastIndexOf(j, i, cur)

                // M개 이상 숫자 연속되면 폭발 
                if (end - j + 1 >= M) {
                    fillZero(j, end, i)
                    didExplode = true
                }
                
            }

            // 더 이상 폭발할 게 없으면 중지 
            if (!didExplode) break
        }
    }
}

function checkBombsToExplode() {
    for (let i=0;i<N;i++) {
        for (let j=0;j<N;j++) {
            const cur = board[j][i]

            if (cur === 0) continue
            const end = getLastIndexOf(j, i, cur)

            // 폭발시킬 폭탄 있으면 true 반환 
            if (end - j + 1 >= M) {
                return true
            }
            
        }
    }

    // 끝까지 봤는데 없으면 false 반환 
    return false
}


// 시계방향 90도 회전 
function rotate() {
    tmp = Array.from({ length: N }, () => Array(N).fill(0))
    for (let i=0;i<N;i++) {
        for (let j=0;j<N;j++) {
            tmp[j][N-i-1] = board[i][j]
        }
    }

    copy()
}


function fillZero(start, end, col) {
    for (let i=start;i<=end;i++) {
        board[i][col] = 0
    }
}

// 떨어뜨리기 
function drop() {
    tmp = Array.from({ length: N }, () => Array(N).fill(0))
    for (let i=0;i<N;i++) {
        let tmpEnd = N-1
        for (let j=N-1;j>=0;j--) {
            const cur = board[j][i]
            if (cur === 0) continue

            tmp[tmpEnd][i] = board[j][i]
            tmpEnd -= 1
        }
    }

    copy()
}

function countBombs() {
    let count = 0
    for (let i=0;i<N;i++) {
        for (let j=0;j<N;j++) {
            if (board[i][j] === 0) continue

            count += 1
        }
    }

    return count
}

let rep = 0
while (rep < K) {
    while (checkBombsToExplode()) {
        // 폭발하고 떨어뜨리기
        explode()
        drop()
    }


    // 회전하고 떨어뜨리기
    rotate()
    drop()

    rep += 1
}

    while (checkBombsToExplode()) {
        // 폭발하고 떨어뜨리기
        explode()
        drop()
    }

const bombCount = countBombs()

console.log(bombCount)