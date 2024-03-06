const fs = require('fs')
const [n, start, ...arr] = fs.readFileSync(0).toString().trim().split('\n')
const N = +n
const [R, C] = start.split(' ').map(num => num - 1)
const board = arr.map(row => row.trim().split(''))
let curX = R
let curY = C


/**
 * 0: 오른쪽
 * 1: 아래
 * 2: 왼쪽
 * 3: 위 
 */
let curDir = 0 
const dir = [[0, 1], [1, 0], [0, -1], [-1, 0]]
const DIR_LEN = 4 
// NxN 요소가 [f,f,f,f]인 3차원 배열 
const ch = Array.from({ length: N }, () => 
            Array.from({ length: N }, () => 
                Array.from({ length: DIR_LEN }, () => false)))
let count = 0
let isRepeated = false


function isOutside(x, y) {
    return x < 0 || y < 0 || x >= N || y >= N
}

function roateClockwise() {
    curDir = (curDir + 1) % 4
}

function rotateCounterClockwise() {
    curDir = curDir - 1 < 0 ? DIR_LEN-1 : curDir - 1
}


function moveStep(x, y) {
    ch[curX][curY][curDir] = true // 현재 노드 방문 표시 
    curX = x
    curY = y
    count += 1

    if (isOutside(x, y)) {
        return 
    }

    if (ch[x][y][curDir]) {
        isRepeated = true
        return
    }


    
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


while (true) {
    move()

    // 탈출하면 중단
    if (isOutside(curX, curY)) {
        break
    }

    // 더 이상 이동할 수 없으면 중단 
    if (isRepeated) {
        count = -1
        break
    }


}

console.log(count || -1)