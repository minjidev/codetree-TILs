const fs = require('fs')
const [N, M] = fs.readFileSync(0).toString().trim().split(' ')


const arr = Array.from({ length: N }, () => '')
let num = 0
for (let i=0;i<N;i++) {
    for (let j=0;j<M;j++) {
        num += 1
        arr[i] += num + ' '
    }
}

console.log(arr.join('\n'))