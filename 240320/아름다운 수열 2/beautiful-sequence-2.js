// A에서 크기가 M인 연속 구간을 잡아 B의 요소를 모두 가진 경우 count 
// 수열 B 인덱스에 개수 저장, 해당 배열이 모두 0이면 아름다운 수열 

const fs = require('fs')
const [n, ...arr] = fs.readFileSync(0).toString().trim().split('\n')
const [N, M] = n.split(' ').map(Number)
const [str1, str2] = arr
const a = str1.split(' ').map(Number)
const b = str2.split(' ').map(Number)
const MAX_LEN = Math.max(...[...a, ...b])

let answer = 0

for (let i=0;i<N-M+1;i++) {
    for (let j=i+M-1;j<N;j++) {
        // count 배열 초기화 
        let count = Array(MAX_LEN+1).fill(0)

        for (let val of b) {
            count[val] += 1
        }

        // 잡은 구간에 b 수열 요소 있는지 판단 
        for (let k=i;k<j+1;k++) {
            count[a[k]] -= 1
        }
        
        // 아름다운 수열인지 판단
        let zeroCount = 0
        
        for (let v of count) {
            if (v !== 0) break
            
            zeroCount += 1
        }

        if (zeroCount === MAX_LEN+1) {
            answer += 1
        }
    }
}

console.log(answer)