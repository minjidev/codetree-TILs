const fs = require('fs')
const [nums, ...arr] = fs.readFileSync(0).toString().trim().split('\n')
const [N, M] = nums.split(' ').map(Number)
let bombs = arr.map(Number) 

const getEndIdxOfExplosion = (start, val) => {
    let end = start + 1
    while (end < bombs.length) {
        if (bombs[end] === val) { 
            end += 1
        } else {
            break
        }
    }

    return end - 1
}

const fillZero = (start, end) => {
    for (let i=start;i<=end;i++) {
        bombs[i] = 0
    }
}

const drop = () => {
    const tmp = []
    for (let cur of bombs) {
        if (cur === 0) continue
        
        tmp.push(cur)
    }
    return tmp
}

while (true) {
    let didExplode = false
    let start = 0
    
    // 폭탄 터뜨리기
    for (let i=0;i<bombs.length;i++) {
        // 이미 터지기로 예정되어 있는 경우 패스
        if (bombs[i] === 0) continue

        // 연속된 값의 가장 마지막 idx
        let end = getEndIdxOfExplosion(i, bombs[i])
        
        if (end - i + 1 >= M) {
            fillZero(i, end)
            didExplode = true
        }
    }

    // 폭탄이 터지지 않은 경우 중지
    if (!didExplode) break

    // 떨어뜨리기
    bombs = [...drop()]
}


console.log(bombs.length)
console.log(bombs.join('\n'))