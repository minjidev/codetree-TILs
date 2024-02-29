const fs = require('fs')
const [nums, ...arr] = fs.readFileSync(0).toString().trim().split('\n')

const [N, M] = nums.split(' ').map(Number)
const board = arr.slice(0, N).map(row => row.trim().split(' ').map(Number))
const cmds = arr.slice(N).map(el => Number(el) - 1)


for (let col of cmds) {
    // 1. 해당 col에 숫자가 있는 최상단 위치 찾기
    for (let j=0;j<N;j++) {
        if (board[j][col] === 0) continue

        // 2. (j, col)을 기준으로 십자 폭발
        const cur = board[j][col]
        for (let k=0;k<N;k++) {
            for (let l=0;l<N;l++) {
                if ((j === k || col === l) && (Math.abs(j-k) < cur && Math.abs(col-l) < cur)) {
                    board[k][l] = 0
                }
            }
        }


        // 3. 떨어뜨리기
        const tmp = Array.from({ length: N }, () => Array(N).fill(0))
        
        for (let k=0;k<N;k++) {
            let tmpEnd = N-1
            for (let l=N-1;l>=0;l--) {
                if (board[l][k] === 0) continue

                tmp[tmpEnd][k] = board[l][k]
                tmpEnd -= 1
            }
        }


        // 복사 
        for (let k=0;k<N;k++) {
            for (let l=0;l<N;l++) {
                board[k][l] = tmp[k][l]
            }
        }


        break 

    }
   
}

console.log(board.map(row => row.join(' ')).join('\n'))