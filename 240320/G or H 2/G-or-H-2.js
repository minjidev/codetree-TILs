// 거리: index 차 
// G=1, H=-1 : Math.abs(sum) === 거리 || 
const fs = require('fs')
const [n, ...a] = fs.readFileSync(0).toString().trim().split('\n')
const N = +n
const arr = a.map(row => row.split(' ').map(val => isNaN(val)? val : Number(val)))
const sorted = arr.sort(([a, b], [c, d]) => a - c) // 인덱스 오름차순 정렬
const MAX_LEN = 100
const tmp = Array(MAX_LEN+1).fill(0)
let maxSize = 0

for (let [idx, val] of arr) {
    tmp[idx] = (val === 'G' ? 1 : -1)
}

for (let i=0;i<N;i++) {
    const prevPos = sorted[i][0]
    // 각 사람 위치에서 확인 
    for (let j=i;j<N;j++) {

        // 해당 구간 확인 
        const curPos = sorted[j][0]
        const dist = Math.abs(curPos-prevPos)
        let sum = 0

        for (let k=prevPos;k<curPos+1;k++) {
            sum += tmp[k]
        }

        if (sum === 0 || j-i+1 === Math.abs(sum)) {
            maxSize = Math.max(maxSize, dist)
        }
    }
}

console.log(maxSize)