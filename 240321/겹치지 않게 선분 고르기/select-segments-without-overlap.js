// 1부터 N개 선분 뽑을 때, 겹치지 않는 경우 최대 개수 
const fs = require('fs')
const [n, ...input] = fs.readFileSync(0).toString().trim().split('\n')
const N = +n
const lines = input.map(row => row.split(' ').map(Number))

let maxCount = 0

function overlapped([s1, e1], [s2, e2]) {
    // 두 선분이 겹치는지 확인 -> 한 점이 다른 선분에 포함되는 경우 
    return (s1 <= s2 && s2 <= e1) || (s1 <= e2 && e2 <= e1) 
        || (s2 <= s1 && s1 <= e2) || (s2 <= e1 && e1 <= e2)
}

function possible(selected) {
    // 모든 쌍이 겹치지 않는지 확인
    for (let i=0;i<selected.length;i++) {
        for (let j=i+1;j<selected.length;j++) {
            if (overlapped(selected[i], selected[j])) {
                return false
            }
        }
    }

    return true
}

function DFS(L, selected) {
    if (L === N) {
        // 겹치는 선분 있는지 확인
        if (possible(selected)) {
            maxCount = Math.max(maxCount, selected.length)
        }

        return
    }

    // 선분 뽑기 
    DFS(L+1, [...selected, lines[L]])
    // 선분 뽑지 않기
    DFS(L+1, selected)

}

// 뽑을 선분 개수 
DFS(0, [])
console.log(maxCount)