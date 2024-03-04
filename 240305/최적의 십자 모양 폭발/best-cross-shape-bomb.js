const fs = require('fs')
const [num, ...arr] = fs.readFileSync(0).toString().trim().split('\n')
const N = +num
const board = arr.map(row => row.trim().split(' ').map(Number))
const dir = [[-1, 0], [1, 0], [0, -1], [0, 1]]

let copied = []
let maxCount = 0

function copy(arr1, arr2) {
    for (let i=0;i<N;i++) {
        for (let j=0;j<N;j++) {
            arr2[i][j] = arr1[i][j]
        }
    }
}

// 격자 하나씩 돌면서 십자 모양 폭발 
function explode(cx, cy) {
    const cur = copied[cx][cy]
    copied[cx][cy] = 0
    for (let i=0;i<N;i++) {
        for (let j=0;j<N;j++) {
            // 행이나 열이 일치하면서 거리가 현재값 미만인 경우 폭발
            if ((i === cx || j === cy) && (Math.abs(i-cx) + Math.abs(j-cy) < cur)) {
                copied[i][j] = 0
            }
        }
    }
}

// 떨어뜨리기
function drop() {
    const tmp = Array.from({ length: N }, () => Array(N).fill(0))
    for (let i=0;i<N;i++) {
        let tmpEnd = N-1
        for (let j=N-1;j>=0;j--) {
            const cur = copied[j][i]
            if (cur === 0) continue

            tmp[tmpEnd][i] = cur
            tmpEnd -= 1
        }
    }

    copy(tmp, copied)
}

// 조건을 만족하는 쌍의 수 세기 
// 4방향 확인 
function countPairs() {
    const ch = Array.from({ length: N }, () => Array(N).fill(false))
    let count = 0
    for (let i=0;i<N;i++) {
        for (let j=0;j<N;j++) {
            if (copied[i][j] === 0) continue
            ch[i][j] = true

            for (let k=0;k<4;k++) {
                const nx = i + dir[k][0]
                const ny = j + dir[k][1]

                if (nx < 0 || ny < 0 || nx >= N || ny >= N) continue
                if (ch[nx][ny] || copied[nx][ny] === 0) continue

                // 값이 같으면
                if (copied[i][j] === copied[nx][ny]) {
                    count += 1
                }               

            }

        }
    }

    return count
}


for (let i=0;i<N;i++) {
    for (let j=0;j<N;j++) {
        copied = Array.from({ length: N }, () => Array(N).fill(0))

        copy(board, copied)
        explode(i, j)
        drop()

        const count = countPairs()
        maxCount = Math.max(maxCount, count)

    }
}

console.log(maxCount)