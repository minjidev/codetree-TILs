const fs = require('fs')
const [n, ...input] = fs.readFileSync(0).toString().trim().split('\n')

// 양방향 그래프 graph 만들기 
// 1번에서 출발해 이동할 수 있으면 개수 세기 

const [N, M] = n.split(' ').map(Number)
const arr = input.map(row => row.split(' ').map(Number))

const graph = Array.from({ length: N+1 }, () => [])
const ch = Array(N+1).fill(0)
let count = 0


for (let [s, e] of arr) {
    graph[s].push(e)
    graph[e].push(s)
}


function DFS(L) {
    for (let i=0;i<graph[L].length;i++) {
        const cur = graph[L][i]
        if (!ch[cur]) {
            ch[cur] = 1
            count += 1
            DFS(cur)
        } 
    }
}

ch[1] = 1
DFS(1)
console.log(count)