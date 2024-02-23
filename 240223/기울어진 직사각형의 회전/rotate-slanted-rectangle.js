const fs = require('fs')
const [num, ...arr] = fs.readFileSync(0).toString().trim().split('\n')


const N = +num
const board = arr.slice(0, N).map(row => row.split(' ').map(Number))
let [r, c, m1, m2, m3, m4, d] = arr[N].split(' ').map(Number)
const moveDir = [[[-1, 1], [-1, -1], [1, -1], [1, 1]], [[-1, -1], [-1, 1], [1, 1], [1, -1]]] // [반시계, 시계 방향]
const temp = Array.from({ length: N }, () => Array(N).fill(0))

const shift = (x, y, m1, m2, d) => {
    const dir = moveDir[d]
    const move = d === 0? [m1, m2, m1, m2] : [m2, m1, m2, m1]

    // board 값 복사 
    for (let i=0;i<N;i++) {
        for (let j=0;j<N;j++) {
            temp[i][j] = board[i][j]
        }
    }

    // 숫자 한 칸씩 밀었을 때 값 복사 
    for (let i=0;i<4;i++) {
        for (let j=0;j<move[i];j++) {
            const nx = x + dir[i][0]
            const ny = y + dir[i][1]

            temp[nx][ny] = board[x][y]

            x = nx 
            y = ny 
        }
    }

    // temp 값을 board에 옮기기 
    for (let i=0;i<N;i++) {
        for (let j=0;j<N;j++) {
            board[i][j] = temp[i][j]
        }
    }

}


shift(r-1, c-1, m1, m2, d)

console.log(board.map(row => row.join(' ')).join('\n'))