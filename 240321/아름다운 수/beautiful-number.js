// [1, 2, 3, 4]의 배수이면 아름다운 수 
// n자리 수 구해서 연속할 경우 숫자 세기 

const fs = require('fs')
const input = fs.readFileSync(0).toString().trim()
const N = +input
const tmp = Array(N).fill(0)
let count = 0

// 아름다운 수인지 확인
function isBeautifulNumber(arr) {
    let curCount = 0
    let prev = arr[0]

    for (let i=0;i<N;i++) {
        if (prev === arr[i]) {
            curCount += 1
        } else {
            if (curCount % prev !== 0) {
                return false
            }
            curCount = 1
        }

        prev = arr[i]
    }

    if (curCount % prev !== 0) {
        return false
    }

    return true
}

// N자리 숫자 만들기 
function DFS(L) {
    if (L === N) {
        if (isBeautifulNumber(tmp)) {
            count += 1
        }
        return 
    }

    for (let i=1;i<=4;i++) {
        tmp[L] = i
        DFS(L+1)
    }
}

DFS(0)
console.log(count)