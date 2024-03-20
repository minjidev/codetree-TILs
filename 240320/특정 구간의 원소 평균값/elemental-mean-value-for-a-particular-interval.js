// 구간의 시작점, 끝점 잡기 
const fs = require('fs')
const [n, input] = fs.readFileSync(0).toString().trim().split('\n')
const N = +n
const arr = input.split(' ').map(Number)
let count = 0

for (let i=0;i<N;i++) {
    for (let j=i;j<N;j++) {
        let sum = 0
        // 평균 구하기 
        for (let k=i;k<j+1;k++) {
            sum += arr[k]
        }

        const avg = sum/(j-i+1)
        
        // 평균값 해당 구간에 포함되는지 확인
        for (let k=i;k<j+1;k++) {
            if (avg === arr[k]) {
                count += 1 
                break
            } 
        }
        
    }
}

console.log(count)