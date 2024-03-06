const fs = require('fs')
const [n, start, ...arr] = fs.readFileSync(0).toString().trim().split('\n')
const N = +n
const [R, C] = start.split(' ').map(num => num - 1)
const board = arr.map(row => row.trim().split(''))
const DIR_LEN = 4
const visited = Array.from({ length: N }, () => 
            Array.from({ length: N }, () => 
                Array.from({ length: DIR_LEN }, () => false)))
let curX = R
let curY = C
let curDir = 0
let elpasedTime = 0

function isOutside(x, y) {
    return x < 0 || y <0 || x >= N || y >= N
}

// 해당 위치에 벽이 있으면 이동 불가 
function wallExist(x, y) {
    return (!isOutside(x, y) && board[x][y] === '#')
}


function simulate() {
    // 현재 위치에 같은 방향으로 이동한 적 있으면 탈출 불가능  
    if (visited[curX][curY][curDir]) {
        console.log(-1)
        process.exit(0);
    }

    visited[curX][curY][curDir] = true

    const dir = [[0, 1], [1, 0], [0, -1], [-1, 0]]
    const nx = curX + dir[curDir][0]
    const ny = curY + dir[curDir][1]

    // 1. 바라보는 방향이 벽인 경우 반시계 방향 90' 회전 
    if (wallExist(nx, ny)) {
        curDir = (curDir - 1 + 4) % 4
    }

    // 2. 바라보는 방향으로 이동이 가능하면 
    // 2.1 바로 앞이 격자 밖이면 탈출
    else if (isOutside(nx, ny)) {
        curX = nx
        curY = ny
        elpasedTime += 1
    }

    // 2.2 격자 내에서 이동 가능 
    else {
        // 이동한다고 가정했을 때 오른쪽에 벽이 있는지 확인
        const rightDir = (curDir + 1) % 4
        const rx = nx + dir[rightDir][0]
        const ry = ny + dir[rightDir][1]

        // 벽이 있다면 그 방향으로 이동 
        if (wallExist(rx, ry)) {
            curX = nx
            curY = ny
            elpasedTime += 1
        } else {
            // 아니면 시계방향 90' 회전하고 총 2칸 이동 
            curX = rx
            curY = ry
            curDir = (curDir + 1) % 4
            elpasedTime += 2
        }
    }

}


while (!isOutside(curX, curY)) {
    simulate()
}

console.log(elpasedTime)