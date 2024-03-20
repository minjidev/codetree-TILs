// 행, 열 확인해서 m개 연속 같은 숫자면 count 
const fs = require('fs')
const [n, ...arr] = fs.readFileSync(0).toString().trim().split('\n')
const [N, M] = n.split(' ').map(Number)
const board = arr.map(row => row.split(' ').map(Number))
let answer = 0

for (let i=0;i<N;i++) {
    let count = 0
    let rowPrev = 0
    
    for (let j=0;j<N;j++) {
        if (rowPrev === board[i][j]) {
            count += 1
        } else {
            count = 1
        }

        rowPrev = board[i][j]

        if (count >= M) {
            answer += 1
            break
        }
       
    }
}

for (let i=0;i<N;i++) {
    let count = 0
    let colPrev = 0

    for (let j=0;j<N;j++) {
        if (colPrev === board[j][i]) {
            count += 1
        } else {
            count = 1
        }

        colPrev = board[j][i]

        if (count >= M) {
            answer += 1
            break
        }
    }
}

console.log(answer)