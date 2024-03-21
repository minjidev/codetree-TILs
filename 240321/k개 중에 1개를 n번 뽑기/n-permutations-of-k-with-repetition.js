const fs = require('fs')
const [K, N] = fs.readFileSync(0).toString().trim().split(' ').map(Number)
const tmp = Array(N).fill(0)

function DFS(L) {
    if (L === N) {
        console.log(tmp.slice().join(' '))
        return 
    }

    for (let i=1;i<=K;i++) {
        tmp[L] = i
        DFS(L+1)
    }


}

DFS(0)