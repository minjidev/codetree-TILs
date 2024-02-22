const fs = require('fs')
const [nums, ...arr] = fs.readFileSync(0).toString().trim().split('\n')

const [N, M, Q] = nums.split(' ').map(Number)
let board = arr.slice(0, N).map(row => row.trim().split(' ').map(Number))
const commands = arr.slice(N).map(row => row.trim().split(' ').map(el => !isNaN(el) ? Number(el) : el))

const pushToLeft = (row) => {
    const first = board[row][0]
    for (let i=0;i<M-1;i++) {
        board[row][i] = board[row][i+1]
    }
    board[row][M-1] = first
}

const pushToRight = (row) => { 
    const last = board[row][M-1]
    for (let i=M-1;i>=1;i--) {
        board[row][i] = board[row][i-1]
    }
    board[row][0] = last
}

const push = (dir, row) => {
    if (dir === 'L') {
        pushToRight(row)
    } else {
        pushToLeft(row)
    }
}

const propagateUp = (startDir, startRow) => {
    let prev = board[startRow - 1]
    let prevDir = startDir
// 위쪽으로 전파
    for (let i=startRow-2;i>=0;i--) {
        let hasSame = false
        cur = board[i]

        // 같은 열에 같은 숫자가 있으면 밀기 
        for (let j=0;j<M;j++) {
            if (cur[j] === prev[j]) {
                hasSame = true
                break
            }
           
        }
 
        if (hasSame) {
            const curDir = prevDir === 'L' ? 'R' : 'L'
            push(curDir, i)
            prevDir = curDir
        } else {
            break
        }

        prev = board[i]
        
    }

}

const propagateDown = (startDir, startRow) => {
    let prev = board[startRow-1]
    let prevDir = startDir
// 아래쪽으로 전파
    for (let i=startRow;i<N;i++) {
        let hasSame = false
        cur = board[i]
        // 같은 열에 같은 숫자가 있으면 밀기 
        for (let j=0;j<M;j++) {
            if (cur[j] !== prev[j]) continue
            hasSame = true
            break
        }

        if (hasSame) {
            const curDir = prevDir === 'L' ? 'R' : 'L'
            push(curDir, i)
            prevDir = curDir
        } else {
            break
        }

        prev = board[i]
        
    }
}


for (let [r, dir] of commands) {
    // r행 밀기 
    push(dir, r-1)
    propagateUp(dir, r)
    propagateDown(dir, r)
}

console.log(board.map(row => row.join(' ')).join('\n'))