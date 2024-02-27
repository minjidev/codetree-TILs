const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split('\n')
const LEN = 4
const board = input.slice(0, LEN).map(row => row.trim().split(' ').map(Number))
const dir = input[LEN]
let tmp = Array.from({ length: LEN }, () => Array(LEN).fill(0))

const copy = () => {
    for (let i=0;i<LEN;i++) {
        for (let j=0;j<LEN;j++) {
           board[i][j] = tmp[i][j]
        }
    }
}

const log = (arr) => {
    console.log(arr.map(row => row.join(' ')).join('\n'))
}

const pushToRight = () => {
    tmp = Array.from({ length: LEN }, () => Array(LEN).fill(0))
    for (let i=0;i<LEN;i++) {
        let tmpEnd = LEN - 1
        for (let j=LEN-1;j>=0;j--) {
            if (board[i][j] !== 0) {
                tmp[i][tmpEnd] = board[i][j]
                tmpEnd -= 1
            }
        }
    }

    copy()
}

const combineToRight = () => {
    for (let i=0;i<LEN;i++) {
        for (let j=LEN-1;j>0;j--) {
            if (board[i][j] === 0) continue
            if (board[i][j] === board[i][j-1]) {
                board[i][j] += board[i][j-1]
                board[i][j-1] = 0
            }
        }
    }
}


const moveRight = () => {
    pushToRight()
    combineToRight()
    pushToRight()

    log(board)
}

const pushToLeft = () => {
    tmp = Array.from({ length: LEN }, () => Array(LEN).fill(0))
    for (let i=0;i<LEN;i++) {
        tmpEnd = 0
        for (let j=0;j<LEN;j++) {
            if (board[i][j] !== 0) {
                tmp[i][tmpEnd] = board[i][j]
                tmpEnd += 1
            }
        }
    }
    copy()
}

const combineToLeft = () => {
    for (let i=0;i<LEN;i++) {
        for (let j=0;j<LEN-1;j++) {
            if (board[i][j] === 0) continue
            if (board[i][j] === board[i][j+1]) {
                board[i][j] += board[i][j+1]
                board[i][j+1] = 0
            }
        }
    }
}

const moveLeft = () => {
    pushToLeft()
    combineToLeft()
    pushToLeft()
    
    log(board)
}

const pushToUp = () => {
    tmp = Array.from({ length: LEN }, () => Array(LEN).fill(0))
    for (let i=0;i<LEN;i++) {
        let tmpEnd = 0
        for (let j=0;j<LEN;j++) {
            if (board[j][i] !== 0) {
                tmp[tmpEnd][i] = board[j][i]
                tmpEnd +=1
            }
        }
    }

    copy()
}

const combineToUp = () => {
    for (let i=0;i<LEN;i++) {
        for (let j=0;j<LEN-1;j++) {
            if (board[j][i] === 0) continue
            if (board[j][i] === board[j+1][i]) {
                board[j][i] += board[j+1][i]
                board[j+1][i] = 0
            }
        }
    }
}

const moveUp = () => {
    pushToUp()
    combineToUp()
    pushToUp()    

    log(board)
}

const pushToDown = () => {
    tmp = Array.from({ length: LEN }, () => Array(LEN).fill(0))
    for (let i=0;i<LEN;i++) {
        let tmpEnd = LEN-1
        for (let j=LEN-1;j>=0;j--) {
           if (board[j][i] !== 0) {
            tmp[tmpEnd][i] = board[j][i]
            tmpEnd -= 1
           }
        }
    }

    copy()
}

const combineToDown = () => {
    for (let i=0;i<LEN;i++) {
        for (let j=LEN-1;j>0;j--) {
            if (board[j][i] === 0) continue
            if (board[j][i] === board[j-1][i]) {
                board[j][i] += board[j-1][i]
                board[j-1][i] = 0
            }
        }
    }
}


const moveDown = () => {
    pushToDown()
    combineToDown()
    pushToDown()

    log(board)
}

switch(dir) {
    case 'R': 
        moveRight()
        break
    case 'L': 
        moveLeft()
        break
    case 'U': 
        moveUp()
        break
    case 'D':
        moveDown()
        break
}