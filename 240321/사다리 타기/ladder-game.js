// 사다리의 가로줄을 포함하거나 포함하지 않는 문제 
// 처음 주어진 사다리대로 이동했을 때 나오는 결과 === DFS 돌았을 때 결과 
const fs = require('fs')
const [n, ...input] = fs.readFileSync(0).toString().trim().split('\n')
const [N, M] = n.split(' ').map(Number)
const arr = input.map(row => row.split(' ').map(Number))
const selected = []
let minCount = Number.MAX_SAFE_INTEGER

// 가로줄 기준 정렬
arr.sort((a, b) => a[1] - b[1])

// 사다리 타기
function possible() {
    const num1 = Array.from({ length: N }, (val, idx) => idx)
    const num2 = Array.from({ length: N }, (val, idx) => idx)
    // 원본 
    for (let [col, row] of arr) {
        [num1[col], num1[col+1]] = [num1[col+1], num1[col]]
    }

    // 선택된 사다리
    for (let [col, row] of selected) {
        [num2[col], num2[col+1]] = [num2[col+1], num2[col]]
    }

    // 결과 확인
    for (let i=0;i<N;i++) {
        if (num1[i] !== num2[i]) {
            return false
        }
    }

    return true
}

// 사다리 가로줄 포함할지 결정
function DFS(L) {
    // 가로줄 개수만큼 돌고나면 기존 결과와 같은 경우 count 
    if (L === M) {
        if (possible()) {
            minCount = Math.min(minCount, selected.length)
        
        }

        return 
    }
  
    // 뽑는 경우
    selected.push(arr[L])
    DFS(L+1)
    selected.pop()

    // 뽑지 않는 경우 
    DFS(L+1)

}

DFS(0)
console.log(minCount)