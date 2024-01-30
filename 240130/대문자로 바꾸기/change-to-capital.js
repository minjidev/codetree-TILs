const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split('\n')
const arr = input.map(row => row.trim().split(' '))

for (let i=0;i<arr.length;i++) {
    for (let j=0;j<arr[0].length;j++) {
        arr[i][j] = (arr[i][j]).toUpperCase()
    }
}
console.log(arr.map(row => row.join(' ')).join('\n'))