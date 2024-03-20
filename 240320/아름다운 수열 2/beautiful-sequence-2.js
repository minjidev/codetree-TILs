// A에서 크기가 M인 연속 구간을 잡아 B의 요소를 모두 가진 경우 count 
// 수열 B 인덱스에 개수 저장, 해당 배열이 모두 0이면 아름다운 수열 

const fs = require('fs')
const [n, ...arr] = fs.readFileSync(0).toString().trim().split('\n')
const [N, M] = n.split(' ').map(Number)
const [str1, str2] = arr
const a = str1.split(' ').map(Number)
const b = str2.split(' ').map(Number).sort()
const MAX_LEN = 100


let answer = 0
let tmp = Array(MAX_LEN).fill(MAX_LEN+1)

for (let i=0;i<N-M+1;i++) {
    for (let j=0;j<M;j++) {
        tmp[j] = a[i+j]
    }

    tmp = tmp.sort((a, b) => a - b)
    // 같은 요소를 가진 배열인지 확인 
    let isSame = true
    for (let j=0;j<M;j++) {

        if (tmp[j] !== b[j]) {
            isSame = false
            break
        }
    }

    if (isSame) {
        answer += 1
    }
}

console.log(answer)