const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split('\n')
const board = input.map(row => row.split(' ').map(Number))
// 오른쪽, 아래, 아래쪽 대각선 확인 
const dir = [[0, 1], [1, 0], [1, -1], [1, 1]]
const BOARD_SIZE = 19
const WIN_COUNT = 5

for (let i=0;i<BOARD_SIZE;i++) {
    for (let j=0;j<BOARD_SIZE;j++) {
        if (board[i][j] === 0) continue
        const cur = board[i][j]
        
        for (let k=0;k<4;k++) {
            // 이동 방향 설정
            let x = i
            let y = j
            let count = 1
            
            // 해당 방향으로 4번 이동하면서 cur값과 같은지 확인
            for (let l=0;l<4;l++) {
                const nx = x + dir[k][0]
                const ny = y + dir[k][1]

                if (nx < 0 || ny < 0 || nx >= BOARD_SIZE || ny >= BOARD_SIZE) continue
                if (cur !== board[nx][ny]) continue

                x = nx
                y = ny
                count += 1
            }

            if (count === WIN_COUNT) {
                console.log(cur)
                console.log(Math.floor((i+x)/2)+1, Math.floor((j+y)/2)+1)
                return
            } 
        }
    }
}

console.log(0)