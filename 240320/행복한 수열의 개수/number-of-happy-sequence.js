// 행, 열 확인해서 m개 연속 같은 숫자면 count 
const fs = require('fs')
const [n, ...arr] = fs.readFileSync(0).toString().trim().split('\n')
const [N, M] = n.split(' ').map(Number)
const board = arr.map(row => row.split(' ').map(Number))
let answer = 0

for (let i=0;i<N;i++) {
    let count = 1
    for (let j=1;j<N;j++) {
        if (board[i][j-1] === board[i][j]) {
            count += 1
        } else {
            count = 1
        }

        if (count >= M) {
            break
        }
    }

    if (count >= M) {
        answer += 1
    }
}

for (let i=0;i<N;i++) {
    let count = 1
    for (let j=1;j<N;j++) {
        if (board[j-1][i] === board[j][i]) {
            count += 1
        } else {
            count = 1
        }

        if (count >= M) {
            break
        }
    }

    if (count >= M) {
        answer += 1
    }

}

console.log(answer)