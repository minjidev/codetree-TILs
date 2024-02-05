const fs = require('fs')
const N = +fs.readFileSync(0).toString().trim()
const arr = Array.from({ length: N }, () => Array(N).fill(0))

for (let i=0;i<N;i++) {
    arr[i][0] = 1
    arr[0][i] = 1
}

for (let i=1;i<N;i++) {
    for (j=1;j<N;j++) {
        arr[i][j] = arr[i-1][j] + arr[i][j-1] + arr[i-1][j-1]
    }
}

console.log(arr.map(row => row.join(' ')).join('\n'))