const fs = require('fs')
const [nums, ...arr] = fs.readFileSync(0).toString().trim().split('\n')
const [N, M] = nums.split(' ').map(Number)
let bombs = arr.map(Number) 

while (true) {
    let start = 0
    let count = 0
    let prev = bombs[0]
    let exploded = 0
    const tmp = []

    for (let i=0;i<N;i++) {
        if (prev === bombs[i]) {
            count += 1
        } else {
            if (count >= M) {
                // s~e까지 0으로 변경  
                for (let j=start;j<i;j++) {
                    bombs[j] = 0
                }
            }
        
            count = 1
            start = i 
        }
        prev = bombs[i]
    }


    // 폭탄이 터지지 않은 경우 중지
    for (let i=0;i<N;i++) {
        if (bombs[i] === 0) exploded += 1
    }

    if (exploded === 0) break

    for (let cur of bombs) {
        if (cur === 0) continue
        
        tmp.push(cur)
    }

    bombs = [...tmp]
}


console.log(bombs.length)
console.log(bombs.join('\n'))