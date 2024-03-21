const fs = require('fs')
const [K, N] = fs.readFileSync(0).toString().trim().split(' ').map(Number)
const answer = []

function DFS(L) {
    if (L === N) {
        console.log(answer.join(' '))
        return 
    }

    for (let i=1;i<=K;i++) {
        answer.push(i)
        DFS(L+1)
        answer.pop()
    }


}

DFS(0)