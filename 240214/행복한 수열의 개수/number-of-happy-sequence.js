const fs = require('fs')
const [num, ...arr] = fs.readFileSync(0).toString().trim().split('\n')

const [N, M] = num.split(' ').map(Number)
const board = arr.map(row => row.split(' ').map(Number))
let happyCount = 0

for (let i=0;i<N;i++) {
    let rowCount = 0
    let rowPrev = 0
    for (let j=0;j<N;j++) {
        if (board[i][j] !== rowPrev) {
            rowCount = 1
        } else {
            rowCount += 1 
        }
        
        rowPrev = board[i][j]

        if (rowCount >= M) {
            happyCount += 1
            break
        }
        
    }
}

for (let i=0;i<N;i++) {
    let colCount = 0
    let colPrev = 0
    for (let j=0;j<N;j++) {
        if (board[j][i] !== colPrev) {
            colCount = 1
        } else {
            colCount += 1 
        }
        
        colPrev = board[j][i]

        if (colCount >= M) {
            happyCount += 1
            break
        }
        
    }
}

console.log(happyCount)