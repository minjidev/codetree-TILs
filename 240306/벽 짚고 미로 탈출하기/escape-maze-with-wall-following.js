const fs = require('fs')
const [n, start, ...arr] = fs.readFileSync(0).toString().trim().split('\n')
const N = +n
const [R, C] = start.split(' ').map(num => num - 1)
const board = arr.map(row => row.trim().split(''))
let curX = R
let curY = C
board[curX][curY] = 0 // 방문 표시 


/**
 * 0: 오른쪽
 * 1: 아래
 * 2: 왼쪽
 * 3: 위 
 */
let curDir = 0 
const dirStr = ['오른쪽', '아래', '왼쪽', '위']
const dir = [[0, 1], [1, 0], [0, -1], [-1, 0]]
const DIR_LEN = 4


function isOutside(x, y) {
    return x < 0 || y < 0 || x >= N; y >= N
}

function roateClockwise() {
    curDir = (curDir + 1) % 4
}

function rotateCounterClockwise() {
    curDir = curDir - 1 < 0 ? DIR_LEN-1 : curDir - 1
}

let count = 0

function moveStep(x, y) {
    curX = x
    curY = y
    count += 1

    if (!isOutside(x, y)) board[x][y] = 0
}


function move() {
    // 앞 방향 
    const nx = curX + dir[curDir][0]
    const ny = curY + dir[curDir][1]

    // 앞 방향이 격자 밖이면 탈출 
    if (isOutside(nx, ny)) {
        moveStep(nx, ny)
        return
    }

    // 벽이면 반시계 90도 회전 
    if (board[nx][ny] === '#') {
        rotateCounterClockwise()
    } else {
        // 앞으로 이동, 이때 오른쪽이 벽이 아니면 시계방향 90도 회전해 앞으로 이동 
        moveStep(nx, ny)

        const rightDir = (curDir + 1) % 4
        const rx = nx + dir[rightDir][0]
        const ry = ny + dir[rightDir][1]

        if (board[rx][ry] !== '#') {
            roateClockwise()
            moveStep(curX + dir[curDir][0], curY + dir[curDir][1]) // 앞으로 이동 
        }
    }
}



function isMovbale() {
    let count = 0
    // 4방향 벽으로 막혀있거나 이미 방문한 경우 
    for (let k=0;k<DIR_LEN;k++) {
        const nx = curX + dir[k][0]
        const ny = curY + dir[k][1]

        if (isOutside(nx, ny)) return true
        if (board[nx][ny] === '#' || board[nx][ny] === 0) {
            count += 1 
        }
    }

    if (count === DIR_LEN) return false
    // 그게 아니면 이동 가능 
    return true
}

let rep = 0

while (true) {
    move()

    // console.log('curX, curY: ', curX, curY)
    // console.log(dirStr[curDir])
    // console.log(board.map(row => row.join(' ')).join('\n'))
    // console.log('--------------------------')

    // 더 이상 이동할 수 없으면 중단 
    if (!isMovbale()) {
        count = -1
        break
    }

    // 탈출하면 중단
    if (isOutside(curX, curY)) break

}

console.log(count || -1)