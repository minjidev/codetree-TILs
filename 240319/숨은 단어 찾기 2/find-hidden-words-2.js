const fs = require('fs')
const [nums, ...input] = fs.readFileSync(0).toString().trim().split('\n')
const [N, M] = nums.split(' ').map(Number)

// 8방향 확인
const dir =[[0, -1], [0, 1], [1, 0], [-1, 0], [-1, -1], [-1, 1], [1, -1], [1, 1]]
const board = input.map(row => row.split(''))
const string = 'LEE'
let answer = 0

for (let i=0;i<N;i++) {
    for (let j=0;j<M;j++) {
        if (board[i][j] !== 'L') continue

        for (let k=0;k<8;k++) {
            // 방향 설정
            let x = i
            let y = j
            let count = 1
            for (let l=0;l<2;l++) {
                const nx = x + dir[k][0]
                const ny = y + dir[k][1]

                if (nx < 0 || ny < 0 || nx >= N || ny >= M) break
                if (board[nx][ny] === string[l+1]) {
                    x = nx
                    y = ny
                    count += 1
                }
            }

            // 해당 방향으로 LEE가 존재하는 경우
            if (count === 3) {
                answer += 1
            }
        }
    }
}


console.log(answer)