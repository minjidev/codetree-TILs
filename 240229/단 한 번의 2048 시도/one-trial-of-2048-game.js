const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split('\n')
const N = 4
const board = input.slice(0, N).map(row => row.trim().split(' ').map(Number))
const dir = input[N]
let tmp

function copy() {
    for (let i=0;i<N;i++) {
        for (let j=0;j<N;j++) {
            board[i][j] = tmp[i][j]
        }
    }

}

function rotate() {
    tmp = Array.from({ length: N }, () => Array(N).fill(0))

    // 시계 방향 90도 회전 
    for (let i=0;i<N;i++) {
        for (let j=0;j<N;j++) {
            tmp[i][j] = board[N-j-1][i]
        }
    }

    // board에 복사 
    copy()
}
// 현재 값 저장하고 -> 다음 값에서 현재 값 처리 결정 
function drop() {
    tmp = Array.from({ length: N }, () => Array(N).fill(0))
    
    for (let i=0;i<N;i++) {
        let tmpEnd = N-1
        let prev = null
        for (let j=N-1;j>=0;j--) {
            const cur = board[j][i]

            if (cur === 0) continue

            // 이전 값이 없는 경우 
            if (prev === null) {
                prev = cur
            } else if (prev === cur) {
                // 이전 값과 현재 값이 같은 경우 합치기 
                tmp[tmpEnd][i] = cur * 2
                tmpEnd -= 1
                // 지나간 값은 다시 못 합치게 이전 값 prev 초기화
                prev = null
            } else {
                // 이전 값과 현재 값 다른 경우 prev 떨어뜨리기 
                tmp[tmpEnd][i] = prev
                tmpEnd -= 1
                // 이후 같은 값 나오면 합칠 수 있도록 prev 갱신 
                prev = cur
            }
        }
     

        // 모두 진행하고 prev 값이 남아있다면 떨어뜨리기
        if (prev !== null) {
            tmp[tmpEnd][i] = prev
            tmpEnd -= 1
        }
    }

    copy()
}

function tilt(dir) {
        
    // 1. dir 횟수만큼 시계방향으로 90도 호전 
    for (let i=0;i<dir;i++) {
        rotate()
    }

    // 2. 떨어뜨리기 
    drop()

    // 3. 처음 상태로 되돌리기: 4 - dir만큼 시계방향으로 회전 
    for (let i=0;i<4-dir;i++) {
        rotate()
    }
}

const dirMapper = {
    'D': 0,
    'R': 1,
    'U': 2,
    'L': 3
}

tilt(dirMapper[dir])

console.log(board.map(row => row.join(' ')).join('\n'))