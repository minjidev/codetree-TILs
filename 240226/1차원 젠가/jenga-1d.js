const fs = require('fs')
const [n, ...arr] = fs.readFileSync(0).toString().trim().split('\n')

const N = +n
let blocks = arr.slice(0, N).map(Number)
const cmds = arr.slice(N).map(row => row.trim().split(' ').map(Number))

for (let [s, e] of cmds) {
    const tmp = []
    for (let i=0;i<blocks.length;i++) {
        if (i<s-1 || i>e-1) {
            tmp.push(blocks[i])
        }
    }

    blocks = [...tmp]
}

console.log(blocks.length)
console.log(blocks.join('\n'))